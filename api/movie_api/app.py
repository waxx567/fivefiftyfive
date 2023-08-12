import requests
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/movies')
def get_movies():
    title = request.args.get('title')
    if not title:
        return jsonify({'error': 'No movie title provided'})
    
    api_key = 'API_KEY_HERE'
    url = f'http://www.omdbapi.com/?apikey={api_key}&t={title}'
    response = requests.get(url)
    if response.status_code != 200:
        return jsonify({'error': 'Failed to retrieve movie data'})
    
    data = response.json()
    if 'Error' in data:
        return jsonify({'error': data['Error']})
    
    movie = {
        'title': data['Title'],
        'year': data['Year'],
        'genre': data['Genre'],
        'director': data['Director'],
        'actors': data['Actors'],
        'plot': data['Plot'],
        'poster': data['Poster']
    }
    
    return jsonify(movie)


if __name__ == '__main__':
    app.run(debug=True)
