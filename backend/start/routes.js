"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const Database = use("Database");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.get("/posts", async () => {
  return await Database.table("blog_posts").select("*");
});

Route.get("/users", async () => {
  return await Database.table("users").select("*");
});

Route.post("/register/submit", async () => {
  // var request = require("request");
  // const data = request.only(["username", "email", "password"]);

  return await Database.table("users").insert({
    username: "leonardo",
    email: "leonardociberxon@gmail.com",
    password: "E@22segredo",
  });
});
