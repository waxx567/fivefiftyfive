import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/weather')
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'No city provided'})
    api_key = '88e48e2416af614c0705bccdeec9d75b'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Failed to retrieve weather data'}) 
    data = response.json()
    weather = {
        'description': data['weather'][0]['description'],
        'temperature': data['main']['temp'],
        'feels_like': data['main']['feels_like'],
        'humidity': data['main']['humidity'],
        'wind_speed': data['wind']['speed']
    } 
    return jsonify(weather)


if __name__ == '__main__':
    app.run(debug=True)
