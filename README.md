# Weather Application

### What I did:

Made an application utilizing the Google maps API to target the locations of the cities for which I chose to get the weather using the government's official weather api: https://weather-gov.github.io/api/

Example: 
https://api.weather.gov/points/33.749,-84.388
https://api.weather.gov/gridpoints/FFC/50,86/forecast

To use this API to get the weather, it requires that one first finds the specific grid points that the weather service uses by passing in the longitude and latitude of the desired location. Then, it will return a JSON object that one can use to get the link to the weather forecast for that particular location based on the grid points that were used in the previous API call.

I currently am using Node.js just as a way to send my API key for Google Maps in the .env file over to the frontend so that I would not let all of GitHub know my personal key.

I made the pins and the location names (both on the map and at the bottom of the map) clickable so that the user can select which cities they want to view the weather for. I also made the weather section be able to be closed so that if one wants to just focus on the map, they can.

If you have any questions or comments, please feel free to reach out to me.

### Future plans:
1. Add unit tests (I ran out of time to do this, unfortunately)
2. Redo this in TypeScript
3. Utilize Redux so that I can clean up the `Map/index.jsx` file
4. Improve styling, maybe talk to a designer to get a better idea of what would be desired
5. Improve the backend, maybe also utilize React Router.
6. Add Webpack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### RUN SERVER

In the main directory, you can run `npm start` to have the Node.js backend running on [http://localhost:3001](http://localhost:3001) 

### RUN CLIENT

In the `/client` directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

I don't suggest you run it, but `yarn eject` is an option.
