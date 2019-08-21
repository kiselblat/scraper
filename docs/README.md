# scraper

A boot camp assignment for scraping articles, storing them in a noSQL database, and adding comments to each.

## Installation and Dependencies

### Prerequisites

  - **node.js** : Node is a command-line JavaScript application. It allows us to run a server with js.

  - **MongoDB** : [MongoDB](https://www.mongodb.com/) is a noSQL database that store information as BSONs. In order to run Scraper, a Mongo must either be available on localhost, or configured with an environment variable.

### Packages

  - **axios** : Used to GET HTML from the source website for scraping.

  - **cheerio** : The actual scraping tool. Used to extract data from the HTML retrieved by axios.

  - **express** : Express creates and manages our server. It takes in a PORT, a set of middleware, and the routes.

  - **express-handlebars** : Handlebars for express is our view rendering engine.

  - **mongoose** : Mongoose is our ORM. It allows us to control the MongoDB, and gives us the power to make relationships between collections like mySQL.

  - **morgan** : Makes our server-side console output look nicer.

A `package.json` file has been provided so all of these dependencies can be installed by simply running:

```bash
npm i
```

Once these have been installed, and provided Mongo is running and accessible, Scraper can be started with:

```bash
node server.js
```

Then find the app at `localhost:3000` in your browser.

## How to Use

Currently, the scraper does work automatically, though a page refresh may be necessary to display new stories.

Each story can be clicked on and a Note area will reveal itself where a comment can be left and later updated.

## How it Works

- Models
  - Article
  - Note
- Views
  - Handlebars
- Controller
  - apiRoutes
  - htmlRoutes

Scraper is organized along the Model-View-Controller paradigm. This separates the app into different pieces each responsible for a different piece of the whole.

**Models** : The model files define the overall shape of each Mongo collection by creating a Schema for what each document should contain.

**Views** : The views are what the user sees and interacts with. We are using a view engine called [`express-handlebars`](https://www.npmjs.com/package/express-handlebars).

**Controller** : The controller is the set of logic created to implement the functionality of the app. In this case, Scraper is controlled with a set of HTML and API routes defined in the `routes` directory.