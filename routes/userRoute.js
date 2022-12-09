const express = require("express");
const route = express.Router();
const userHandler = require("./../controller/user");

route.get("/", userHandler.getTracker);
route.get("/all-data", userHandler.view);
route.post("/getcountry", userHandler.getBySearch);
route.post("/getcountries", userHandler.getBySearchCountry);
route.get("/country", userHandler.getByCountry);
route.get("/country/:name", userHandler.getByCountryName);
route.get("/country-data", userHandler.getByCountryData);
route.get("/news/", userHandler.getNews);
route.get("/news/:type", userHandler.getNewsById);
route.get("/about", userHandler.about);
module.exports = route;
