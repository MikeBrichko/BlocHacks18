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
