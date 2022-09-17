from rest_framework import serializers

class TweetField(serializers.Field):
    def to_representation(self, value):
        ret = {
            'tweet_id': value.tweet_id,
            'author_username': value.author_username,
            'author_name': value.author_name,
            'created_at': value.created_at,
            'content': value.content
        }

        return ret

class TweetsResponseSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=[('OK', 'OK'), ('ERROR', 'ERROR')])
    totalResults = serializers.IntegerField()
    tweets = serializers.ListField(
        child=TweetField(),
        allow_empty=True
    )
