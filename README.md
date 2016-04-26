# hapi-framework
Using Hapi as our Server-Side Framework
## Synopsis
Used Hapi Framework and MongoDB/Mongoose to build a single resource REST application. Handles basic CRUD for planets.

## How to Use
Type into terminal:

```
node server.js
```

This will start the server.

##### GET
You can see all the planets in the database by going to:

```
localhost:3000/planets
```
in your browser after starting the server.

##### POST
You can add planets to the database by posting a new planet with a name, color, size and moonsNumber. Post it to:

```
localhost:3000/planets
```

To view the planets within the database go to *localhost:3000/planets* in your browser.

##### PUT
In order to change the content of a planet, 'put' new color, size or moonsNumber to *localhost:3000/planets/name of planet*.
Example:

```
localhost:3000/planets/neptune
```

##### DELETE
To destroy a planet delete at:

```
localhost:3000/planets/name
```
*Note: that 'name' in this circumstance can be the name of whatever planet you wish to delete*

To test mocha and linter type gulp into the command line.

## Contributors
Kat Beame,
Rachel Burke &
Shelly Yusuf

## Resources Used

  * http://mph-web.de/build-a-restful-api-using-hapi-js-and-mongodb/
  * http://www.cronj.com/blog/hapi-mongoose/
  * https://www.npmjs.com/package/hapi-named-routes
  * http://blog.modulus.io/nodejs-and-hapi-create-rest-api
  * https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi
  * https://github.com/Cron-J/Hapi-Mongoose-Angular-Node.js/tree/master/server

## License
We used the MIT license
