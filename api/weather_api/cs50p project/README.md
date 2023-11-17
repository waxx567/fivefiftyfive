# Weather app by Wayne McRae (Johannesburg, South Africa 2023/11/17)

The user types python project.py into the Command Prompt
The user is prompted to input the name of a city.
The program outputs the relevant weather information.


project.py is a weather app that allows a user to get the weather for a particular city after submitting the name of that city.

run
$ python project.py
to initiate

Example:
Name of city: Berlin

🌥️
Weather in Berlin, Germany:
Description: overcast clouds
Temperature: 3.47°C
Humidity: 88%
Wind speed: 7.15 m/s


test_project.py mocks API calls so that no actual calls are made during the testing of the project.

run
$ pytest python.py
to initiate
