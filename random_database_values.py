from pymongo import MongoClient
from datetime import datetime, timedelta
from random import random
import sys

def __main__(*args, **kwargs):
    """
    Adds a series of random values to Mongo DB
    """
    client = MongoClient('localhost', 3001)
    events_collection = client.meteor.events
    timeseries_collection = client.meteor.timeseries
    timeseries_collection.drop()
    events_collection.drop()
    starttime = datetime.now()
    random_series = lambda multiplier, rate: [{'time': starttime + timedelta(0,0,1000000*n/rate), 'value': multiplier*random()} for n in range(1000)]
    for track in ['silverstone','spa', 'monaco']:
        id = events_collection.insert({'name': track})
        for dataset in [{'name': 'velocity', 'units': 'm/s', 'data': random_series(100., 50.), 'event': id},
                        {'name': 'rpm', 'units': '1/min', 'data': random_series(5000., 200.), 'event': id},
                        {'name': 'lat-g', 'units': 'N', 'data': random_series(10., 500.), 'event': id}
                        ]:
            timeseries_collection.insert(dataset)

if __name__ == '__main__':
    __main__()
