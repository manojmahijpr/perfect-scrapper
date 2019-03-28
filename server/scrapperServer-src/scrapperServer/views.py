from django.shortcuts import render

from django.http import JsonResponse

import tweepy

def github_data(request):
    context = {
        'title': 'Title here',
        'desc': 'Gives desc'
    }
    return JsonResponse(context)

def twitter_data(request):

    INDIA_WOE_ID = 23424848

    consumer_key = 'k1fgp8TuPXTwdVClmzQs8260W'
    consumer_secret = 'F9HMFmRb1Hgl7r5SOBALZBhifPkY8iJ6QLt0Nn08Ota4sUM8Ik'
    access_token = '632818397-xB97NlhhKiYLL9ctkrHNc3KQsry5mmX2YdCing1H'
    access_token_secret = 'GoMKiWrT1DV7rO0gqmc9g9YrZUD7LrPURuI3rMk5FW61X'

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    data = api.trends_place(INDIA_WOE_ID)[0]
    print(data)
    
    trends = data['trends']

    context = {
        'trends': trends,
    }
    return JsonResponse(context)