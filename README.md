# On-The-Go-Shopping
## What
On-The-Go-Shopping is an application designed to give the people select a grocery store in a quick and engaging way to find nearby grocery store of choice. The app is calling Yelp's API and Grocery API for location and product information on a clean and simple UI that allows the user to scan products while shopping at your most loved grocery store using product bar-codes, as well as generating a shopping list, checkout and receipt; allowing the customer to avoid checkout lines all together.

## Screen Shots:
![pic1](https://user-images.githubusercontent.com/63671353/85342196-03442080-b4b8-11ea-9457-ef5bae386d7c.png)

![pic2](https://user-images.githubusercontent.com/63671353/85342159-ed366000-b4b7-11ea-8205-d9db40b30b33.png)

![pic3](https://user-images.githubusercontent.com/63671353/85342167-f1fb1400-b4b7-11ea-91c2-1a3e7826d9f1.png)

![pic4](https://user-images.githubusercontent.com/63671353/85342180-f9222200-b4b7-11ea-89e4-5f8263124b38.png)


## Who
#### Members of cohort 37 in Wyncode Academy:

    •  (WEB_Dev) Reynold Urena, Benjamin Moore, Frederick Bain
    •  (UX/UI) Marita Holder-Torres, Yen Rose
    •  Wyncode Staff & TA's for help

## How:
Dependencies was built using React. Our group used Visual Studio as our code editor. 

### Install
We added the neccesary packages by including the following commands: add react-bootstrap bootstrap yarn add react-router-dom yarn add axios add .env into your folder and add the CLIENT_ID & YELP_API_KEY into the file. You can reach out to a code owner(listed under the Who) for the below details:

### Unique Applications for this project:
    •  Yelp API Key – for location data
    •  UPCsite API Key – for Grocery item database
    •  Stripe API Key – for  online payment processing
    •  QuaggaJS – for scanner entirely written in JavaScript supporting real- time localization and decoding of various types of barcodes such as EAN, CODE 128, CODE 39, EAN 8, UPC-A, UPC-C, I2of5, 2of5, CODE 93 and CODABAR.


To run the application, Yarn install needs to be run in the premaster branch and inside client. Then Yarn Dev or Yarn Start can be run to view the application on the local host 3000.

### Setup
    • git clone this repo
    • cd into it.
    • yarn install
    • cd client && yarn install
    • cp .env.sample .env
    
### Setup backend
    • install MongoDB
    • install Mongoose
    • install Express
    
### Available build commands
    • yarn dev: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from  Express will be prefaced with [0], any logs from create-react-app will be prefaced with [1].
    • yarn server: Runs JUST your Express.JS server.
    • yarn client: Runs JUST your front-end React app.
    • Yarn dev run: Allows you to Run a second server simultaneously while on your front-end React app.
    
Open http://localhost:3000 to view your local React app in the browser. The page will reload if you make edits.

### To deploy
NOTE: Heroku specifically runs npm start, so don't remove that from your package.json file.
    • heroku create your-app-name
    • heroku config:set MONGODB_URL=<insertYourAtlasDbUri>
    • git push heroku master
