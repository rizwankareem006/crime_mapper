from django.http import JsonResponse
from CrimeMapperAPI.settings import GOOGLE_MAPS_API_KEY
from rest_framework.views import APIView
import googlemaps
# Create your views here.

class ReverseGeocoding(APIView):

    def get(self, request):
        gmaps = googlemaps.Client(key=GOOGLE_MAPS_API_KEY)
        latlng = (request.GET['latitude'], request.GET['longitude'])
        reverse_geocode_result = gmaps.reverse_geocode(
            latlng=latlng, 
            result_type=[
                'locality',
                'sublocality',
                'administrative_area_level_2',
                'country',
                'administrative_area_level_1',
                'neighborhood']
        )
        places = set()
        for item in reverse_geocode_result:
            if 'address_components' in item.keys():
                for addr in item['address_components']:
                    if 'long_name' in addr.keys():
                        places.add(addr['long_name'])

        locations = {
            'locations': list(places)
        }

        return JsonResponse(locations)