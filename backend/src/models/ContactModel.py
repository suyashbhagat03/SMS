from marshmallow import fields, Schema
import datetime
from . import db

class ContactModel(db.Model):
    
  __tablename__ = 'contacts'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(128), nullable=False)
  email = db.Column(db.String(128), unique=True, nullable=False)
  institute_name = db.Column(db.String(128), nullable=False)
  designation = db.Column(db.String(128), nullable=False)
  phone_number = db.Column(db.Integer(10), unique=True, nullable=False)
  created_at = db.Column(db.DateTime)
  
  # class constructor
  def __init__(self, data):
    self.name = data.get('name')
    self.email = data.get('email')
    self.institute_name = data.get('institute_name')
    self.designation = data.get('designation')
    self.phone_number = data.get('phone_number')
    self.created_at = datetime.datetime.utcnow()

  def save(self):
    db.session.add(self)
    db.session.commit()

  @staticmethod
  def get_all_contacts():
    return ContactModel.query.all()

  def __repr__(self):
    return '<id {}>'.format(self.id)

class ContactSchema(Schema):

  id = fields.Int(dump_only=True)
  name = fields.Str(required=True)
  email = fields.Email(required=True)
  institute_name = fields.Str(required=True)
  designation = fields.Str(required=True)
  phone_number = fields.Int(required=True)
  created_at = fields.DateTime(dump_only=True)
