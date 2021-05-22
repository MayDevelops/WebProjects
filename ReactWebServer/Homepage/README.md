# XKCD Comic Browser

The XKCD comic browser initially shows you a pre-set comic. The app can be interacted with by clicking the different buttons:
* First: Gets the first comic from the api
* Previous: Gets the previous comic from the api
* Next: Gets the next comic from the api
* Random: Generates a random number and then gets the comic associated with that random number from the api
* Last: Gets the last comic from the api

The Stars and Comments sections are attached to each individual comic. The ratings and comments you leave for one comic do not bleed into the others.

The application works by taking the initial value (700) and using the previous or next buttons to grab new comics from that base start position. A axios request is sent to the XKCD api and a JSON response is returned. The application uses a React-Redux store. The store keeps the global state of the entire application. All of the json that is returned from the api is stored in this store for each individual comic. Right now the app has to request each different comic # because there is no database attached to this web application. 

## Tools Used:
- React
- Redux
- JavaScript
- HTML
- CSS
