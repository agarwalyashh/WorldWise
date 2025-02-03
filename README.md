# WorldWise App

This app uses the Leaflet library to help user add their travel details, i.e, cities they have visited and details about their trip. The interactive map provided by the library helps in navigating to different places and it fetches the corresponding latitude and longitude position of the particular place, which is used in the functioning of the entire app using params and query strings. The application then shows the list of visited cities and countries, and the details added about them. It also makes use of a geolocation feature which helps the user navigate to their current location in the map.

The entire workflow makes use of React Router for proper navigation, making it a single page application. A login feature has also been implemented which is a temporary one. The data fed by the user is also fetched using a fake-api server set up using json-server. Lazy Loading has been implemented to divide the app into bundles. 
Styling on the entire app is done using Tailwind CSS
