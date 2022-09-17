class TweetsHelper:
    max_results = 30
    expansions = 'author_id'
    tweet_fields='created_at'

    @staticmethod
    def formQuery(crime_types, locations):
        verified = "is:verified"
        retweets = "-is:retweet"
        language = "lang:en"
        trim_to_lower = lambda st: st.lower().strip()
        
        trimmed_lowercase_crime_types = list(map(trim_to_lower, crime_types))
        trimmed_lowercase_locations = list(map(trim_to_lower, locations))
        joined_crime_types = TweetsHelper.joinWithOR(trimmed_lowercase_crime_types)
        joined_locations = TweetsHelper.joinWithOR(trimmed_lowercase_locations)

        query = "(" + joined_crime_types + ") (" + joined_locations + ")"
        query += " " + language
        query += " " + retweets
        query += " " + verified

        return query
    
    @staticmethod
    def joinWithOR(keywords):
        joined_string = ""
        
        if len(keywords) != 0:
            joined_string = '\"'+ keywords[0] + '\"'

        for i in range(1, len(keywords)):
            string_to_add = ' OR \"' + keywords[i] + '\"'
            joined_string += string_to_add
        
        return joined_string