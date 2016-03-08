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

    starttime = datetime.now()
    random_series = lambda multiplier: [{'time': starttime + timedelta(0,0,1000*n), 'value': multiplier*random()} for n in range(1000)]
    timeseries_collection.insert({'name': 'spa',
                                  'timeseries': [
                                                 {'name': 'velocity', 'units': 'm/s', 'data': random_series(100.)},
                                                 {'name': 'rpm', 'units': '1/min', 'data': random_series(5000.)},
                                                ]
                                })

if __name__ == '__main__':
    __main__()


