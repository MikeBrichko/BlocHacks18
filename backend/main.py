from flask import Flask, jsonify
import os
import model
import json


app = Flask(__name__)

from model import User
from model import Request

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] ='postgresql://blochacks2018.cabpdipzuxbo.us-east-1.rds.amazonaws.com:5432/blochacks2018?user=bloc&password=mypassword'
db=SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String)
    bio = db.Column(db.String)
    country = db.Column(db.String)
    picture = db.Column(db.String)
    requests = db.relationship('Request', backref='request')


class Request(db.Model):
    __tablename__ = 'request'
    id =  db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String)
    description = db.Column(db.String)
    category = db.Column(db.String)
    quantity = db.Column(db.String)
    location = db.Column(db.String)


class RequestRepo: 

    def __init__(self): 
        pass

    #Returns list
    def get_all_requests(selfs):
        request = Request.query.all()
        return request

    #Returns list
    def get_request_by_filter(self, filterTag):
        request =  Request.query.filter_by(category=filterTag)
        return request


    def get_request_by_id(self, request_id):
        request = Request.query.filter_by(id=request_id).first()
        return request


def encode_request(request):
    #info = '{id: ' + str(request.id) + ', title: ' + request.title + ', owner_id: ' + str(request.owner_id) +  ', description: ' + request.description + ', category: ' + request.category + ', quantity: ' + request.quantity + ', location: ' + request.location + '}'
    info = {
        'id ': request.id, 
        'owner_id': request.owner_id,
        'title' : request.title,
        'description' : request.description,
        'category' : request.category, 
        'quantity' : request.quantity,
        'location' : request.location  
    }
    
    return info


@app.route('/')
def hello_world():
    return "hello"

@app.route('/requests')
def get_all():

    #typeFilter = request.args.get('filter')
    #all_requests = None
    #if typeFilter:
    #    all_requests = Request.query.filter_by(category=filterTag)
    #else:
    all_requests = Request.query.all() 

    arr = []
    for req in all_requests:
        arr.append(encode_request(req))

    return jsonify(arr) 



#@app.route('/updateModel')
#def update():
#    model.db.create_all()
#    return "Finished updated"
    
# CORS
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response
	
if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)





