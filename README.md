# After cloning the repository, install dependencies:

cd <project folder>/asteroid
npm install

## Configuration

you need to register in https://api.nasa.gov/ to get an application programming interface (API) key.
In <project folder>/asteroid/src/config/config.js you will find a constant equal to an empty string, replace the empty string with your API key as follows
...
export const API_KEY = "d8J4Vx72TXXXXXXXXXXXXXXXXXX";

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
