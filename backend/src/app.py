from flask import Flask
from .config import app_config
from .models import db

def create_app(env_name):
  app = Flask(__name__)
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  app.config.from_object(app_config[env_name])
  db.init_app(app)

  @app.route('/', methods=['GET'])
  def index():
    return 'Congratulations! Your first endpoint is working'

  return app