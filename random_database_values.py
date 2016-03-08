from pymongo import MongoClient
from datetime import datetime, timedelta
from random import random
import sys

def __main__(*args, **kwargs):
    """
    Adds a series of random values to Mongo DB
    """
    client = MongoClient('localhost', 3001)
    timeseries_collection = client.meteor.timeseries
    timeseries_collection.drop()
    starttime = datetime.now()
    random_series = lambda multiplier, rate: [{'time': starttime + timedelta(0,0,1000000*n/rate), 'value': multiplier*random()} for n in range(1000)]
    for track in ['silverstone','spa', 'monaco']:
        print                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   timeseries_collection.insert({'name': track,
                                  'timeseries': [
                                                 {'name': 'velocity', 'units': 'm/s', 'data': random_series(100., 50.)},
                                                 {'name': 'rpm', 'units': '1/min', 'data': random_series(5000., 200.)},
                                                ]
                                })

if __name__ == '__main__':
    __main__()
