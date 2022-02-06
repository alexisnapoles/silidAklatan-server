# Silid Aklatan (Server Side)

### SUMMARY: 
This server-side database will be used for the web application Silid Aklatan which will be a collection of books.

This primarily is a RESTful API and database, developed in Node.js and MongoDB. HTTP methods used for retrieving from and sending data to server are GET, POST, PATCH and DELETE.


### API SETTING UP:

To setup, enter fthe following commands into the terminal

```
yarn install
npm install -g nodemon
```

Make sure to create your own .env file and provide the connection string from your Mongo database. Example

```
MONGO_URI=<your MongoDB connection string>
```

### API DEPENDENCIES:
```
yarn add express
yarn add cors
yarn add mongodb
yarn add dotenv
```

### REFERENCES:
- 1. [tgc14-mongo-express](https://github.com/kunxin-chor/tgc14-mongo-express);
- 2. [RESTfulAPIExpressJS](https://github.com/mfikricom/RESTfulAPIExpressJS);
- 3. [vuejs-crud](https://github.com/leonardogbxv/vuejs-crud);

### RESTful API STRUCTURE [ideal/tentative]:
- database 
    -- db.js
    <!-- >> books.js (WIP - in the future) -->
    <!-- >> authors.js (WIP) -->
- routes 
    -- routes.js
    <!-- >> booksRoutes.js (WIP - in the future) -->
    <!-- >> authorsRoutes.js (WIP - in the future) -->
- .gitignore
- .gitpod.yml
- index.js // file for server
- package.json
- Procfile
- README.md
- yarn.lock

