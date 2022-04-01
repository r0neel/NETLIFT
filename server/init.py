from pymongo import MongoClient

client = MongoClient('localhost', 27017)

db = client['netLift']
users = db['users']
workouts = db['workouts']
lifts = db['lifts']
exercises = db['exercises']
