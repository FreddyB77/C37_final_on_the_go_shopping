### On-The-Go-Shopping
## What
On-The-Go-Shopping is an application designed to give the people select a grocery store in a quick and engaging way to find nearby grocery store of choice. The app is calling Yelp's API and Grocery API for location and product information on a clean and simple UI that allows the user to scan products while shopping at your most loved grocery store using product bar-codes, as well as generating a shopping list, checkout and receipt; allowing the customer to avoid checkout lines all together.

## Who:
(WEB_Dev)Reynold Urena, Benjamin Moore, Frederick Bain
(UX/UI) Marita Holder-Torres, Yen Rose
Members of cohort 37 in Wyncode Academy and Wyncode Staff

## How:
Dependencies was built using React. Our group used Visual Studio as our code editor.

# Install
We added the neccesary packages by including the following commands: add react-bootstrap bootstrap yarn add react-router-dom yarn add axios add .env into your folder and add the CLIENT_ID & YELP_API_KEY into the file. You can reach out to a code owner(listed under the Who) for these details:

To run the application, Yarn install needs to be run in the premaster branch and inside client. Then Yarn Dev or Yarn Start can be run to view the application on the local host 3000.

## Setup
    • git clone this repo
    • cd into it.
    • yarn install
    • cd client && yarn install
    • cp .env.sample .env
    
## Setup backend
    • install MongoDB
    • install Mongoose
    • install Express
    
## Available build commands
    • yarn dev: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from  Express will be prefaced with [0], any logs from create-react-app will be prefaced with [1].
    • yarn server: Runs JUST your Express.JS server.
    • yarn client: Runs JUST your front-end React app.
    • Yarn dev run: Allows you to Run a second server simultaneously while on your front-end React app.
    
Open http://localhost:3000 to view your local React app in the browser. The page will reload if you make edits.

## To deploy
NOTE: Heroku specifically runs npm start, so don't remove that from your package.json file.
    • heroku create your-app-name
    • heroku config:set MONGODB_URL=<insertYourAtlasDbUri>
    • git push heroku master
