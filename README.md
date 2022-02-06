# Silid Aklatan (Server Side)

### API Brief Info [initial]: 
The silidAklatan-API will be collection of books for the Project2 requirement.

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

### RESTful API STRUCTURE [ideal/tentative]:
>controllers [this folder will serve as data control for api fetching/parsing]
    >> books.js 
    >> authors.js
>models [this folder is responsible for the data sctucture or the schema for data input]
    >> booksSchema.js
>routes [this will serve as the router for respective database api]
    >> booksRoutes.js
    >> authorsRoutes.js
.gitignore
.gitpod.yml
index.js
package.json
Procfile
README.md
yarn.lock

