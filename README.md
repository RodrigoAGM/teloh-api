# BuscaTelo API

---
To run the project follow this instructions:

Download and install the LTS version for [Node.js](https://nodejs.org/en/)

Create the Schema in MySQL: ```buscatelo-api```

MySql version: ```8.0.15```

#### Then type this commands inside the project folder:

Install TypeORM : ```npm install -g typeorm```

Install node dependencies : ```npm install```

Confirm that you have the right credentials in ```ormconfig.json``` and then start the project : ```npm start```

For the propose to create news Users you need a first User with 
an **ADMIN** role.

Run the migrations : ```npm run migration:run```


Check the [TypeORm](https://typeorm.io/#/) docs.



