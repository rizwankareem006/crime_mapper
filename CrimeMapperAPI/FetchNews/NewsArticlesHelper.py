import datetime

class NewsArticlesHelper:
    sortBy = 'relevancy'
    language = 'en'
    pageSize = 10

    @staticmethod
    def getFromDate(weeks=1):
        utc_date_now = datetime.datetime.utcnow().replace(microsecond=0)
        time_frame = datetime.timedelta(weeks=weeks)
        from_datetime = utc_date_now - time_frame
        from_datetime_isoformat = from_datetime.isoformat()
        return from_datetime_isoformat
    
    @staticmethod
    def getToDate():
        utc_date_now = datetime.datetime.utcnow().replace(microsecond=0)
        to_datetime_isoformat = utc_date_now.isoformat()
        return to_datetime_isoformat
    
    @staticmethod
    def formQuery(crime_types, locations):
        trim_to_lower = lambda st: st.lower().strip()
        
        trimmed_lowercase_crime_types = list(map(trim_to_lower, crime_types))
        trimmed_lowercase_locations = list(map(trim_to_lower, locations))
        joined_crime_types = NewsArticlesHelper.joinWithOR(trimmed_lowercase_crime_types)
        joined_locations = NewsArticlesHelper.joinWithOR(trimmed_lowercase_locations)

        query = "(" + joined_crime_types + ") AND (" + joined_locations + ")"
        return query

    @staticmethod
    def joinWithOR(keywords):
        joined_string = ""
        
        if len(keywords) != 0:
            joined_string = '+\"'+ keywords[0] + '\"'

        for i in range(1, len(keywords)):
            string_to_add = ' OR +\"' + keywords[i] + '\"'
            joined_string += string_to_add
        
        return joined_string

        



