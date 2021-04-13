from flask import Flask
import requests
from settings import apikeyWeather, apikeyGiphy

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello World!'


@app.route('/weather/<city>')
def weather(city):
    url = "http://api.openweathermap.org/data/2.5/weather"
    params = {'q': city, 'units': 'metric', 'appid': apikeyWeather}
    response = requests.get(url=url, params=params)
    description = response.json()['weather'][0]['main']
    celsius = response.json()['main']['temp']
    url_desc, url_temp = giph_finder(description, celsius)
    return "Temperature in {} is: {}°C<br><img src={} width = {} height = {}> \
           <br>The weather is: {}<br><img src={}>".format(city, celsius, url_temp, 200, 200, description, url_desc)


# Returns the links with visualization GIFs of temperature and weather
def giph_finder(description, celsius):
    url = "http://api.giphy.com/v1/gifs/translate"
    temp = temp_range(celsius)
    params_desc = {'api_key': apikeyGiphy, 's': description}
    params_temp = {'api_key': apikeyGiphy, 's': temp}
    response_desc = requests.get(url=url, params=params_desc)
    response_temp = requests.get(url=url, params=params_temp)
    url_desc = response_desc.json()['data']['images']['downsized_large']['url']
    url_temp = response_temp.json()['data']['images']['downsized_large']['url']
    return url_desc, url_temp


# Returns the description of the temperature
def temp_range(celsius):
    if celsius < 0:
        return "freezing"
    elif celsius < 5:
        return "cold"
    elif celsius < 10:
        return "chilly"
    elif celsius < 15:
        return "cool"
    elif celsius < 28:
        return "warm"
    return "hot"


if __name__ == "__main__":
    app.run()
