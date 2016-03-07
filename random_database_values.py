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
    test_series = [{'time': starttime + timedelta(0,0,1000*n), 'value': 100.*random()} for n in range(1000)]
    timeseries_collection.insert({'name': 'silverstone',
                                  'data': {'velocity': test_series}
                                })

if __name__ == '__main__':
    __main__()

