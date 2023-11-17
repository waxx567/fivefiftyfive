import tkinter as tk
import requests
from tkinter import messagebox
from PIL import Image, ImageTk
import ttkbootstrap


'''Function to retrieve information from OpenWeatherMap API, and return a tuple containing the icon, url, temperature, description, city and country'''
def get_weather(city):
    api_key = "88e48e2416af614c0705bccdeec9d75b"
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    res = requests.get(url)

    if res.status_code == 404:
        messagebox.showerror("Error", "City not found")
        return None

    # Parse the response JSON for weather information
    weather = res.json()
    icon_id = weather['weather'][0]['icon']
    temperature = weather['main']['temp'] - 273.15
    description = weather['weather'][0]['description']
    city = weather['name']
    country = weather['sys']['country']

    # Get the icon URL and return all weather information
    icon_url = f"http://openweathermap.org/img/wn/{icon_id}@2x.png"

    return (icon_url, temperature, description, city, country)


'''Function to retrieve user input from the input widget, call the function to get the weather information, and update the GUI to include the retrieved information'''
def search():
    city = city.get()
    result = get_weather(city)

    if result is None:
        return
    # If the city is valid, unpack the weather information
    icon_url, temperature, description, city, country = result

    # Update the location label
    location_label.configure(text=f"{city}, {country}")

    # Get the weather icon from the URL
    image = Image.open(requests.get(icon_url, stream=True).raw)
    icon = ImageTk.PhotoImage(image)

    # Update the icon label
    icon_label.configure(image=icon)
    icon_label.image = icon

    # Update the temperature and description labels
    temperature_label.configure(text=f"Temperature: {temperature}°C")
    description_label.configure(text=f"{description}")


root = ttkbootstrap.Window(themename="morph")
root.title("Weather App")
root.geometry("400x400")

'''Input widget -> to get city name from user'''
city = ttkbootstrap.Entry(root, font="Helvetica, 18")
city.pack(pady=10)

'''Search button widget -> to search for city's weather information'''
search_button = ttkbootstrap.Button(root, text="Search", command=search, bootstyle="warning")
search_button.pack(pady=10)

'''Location label widget -> to display the city and country names'''
location_label = tk.Label(root, font="Helvetica, 25")
location_label.pack(pady=20)

'''Icon label widget -> to display a weather icon'''
icon_label = tk.Label(root)
icon_label.pack()

'''Temperature label widget -> to display the temperature'''
temperature_label = tk.Label(root, font="Helvetica, 20")
temperature_label.pack()

'''Description label widget -> to display a description of the weather'''
description_label = tk.Label(root, font="Helvetica, 20")
description_label.pack()

root.mainloop()
