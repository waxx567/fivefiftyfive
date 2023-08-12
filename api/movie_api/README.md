HTML:
This HTML file defines a simple form with an input field for the movie title and a submit button. When the form is submitted, it sends a GET request to the /movies route with the entered title as a query parameter.

Python:
In this code, we define a Flask route at / that serves the index.html file with a form for entering a movie title. We then define a Flask route at /movies that accepts a GET request with a title parameter in the query string. We use the requests library to send a request to the OMDb API with the specified title and our API key, and retrieve the response data as a JSON object.

We extract the relevant movie data from the JSON object and return the movie title, year, genre, director, actors, plot, and poster image URL as a JSON response.
