const { json, response } = require("express");
const novelCovid = require("novelcovid");
const news = require("daily-news-ts");
const fetch = require("node-fetch");
const fs = require("fs");
exports.getTracker = async (req, res) => {
  try {
    const data = await novelCovid.all();
    const data2 = await novelCovid.countries({ sort: "cases" });
    const data3 = await novelCovid.yesterday.countries({ sort: "cases" });
    const data4 = await novelCovid.twoDaysAgo.countries({ sort: "cases" });
    // res.status(200).json({
    //   data2,
    // });
    res.render("home", {
      data,
      data2,
      data3,
      data4,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.view = async (req, res) => {
  try {
    const data = await novelCovid.countries({ sort: "cases" });
    console.log(data);
    res.render("view", {
      data,
    });
  } catch (err) {}
};
exports.getBySearch = async (req, res) => {
  try {
    const x = req.body.search;
    const specificData = await novelCovid.countries({ country: x });
    fs.writeFile("./file.txt", x, "utf-8", (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({
      specificData,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getBySearchCountry = async (req, res) => {
  try {
    const x = req.body.search;
    console.log(x);
    const specificData = await novelCovid.countries({ country: x });
    fs.writeFile("./file2.txt", x, "utf-8", (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({
      specificData,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getByCountry = async (req, res) => {
  const name = fs.readFileSync(`./file.txt`, "utf-8");
  const data = await novelCovid.countries({ country: name });
  const data2 = await novelCovid.countries({ sort: "cases" });
  const data3 = await novelCovid.yesterday.countries({ sort: "cases" });
  const data4 = await novelCovid.twoDaysAgo.countries({ sort: "cases" });
  // console.log(data);
  // console.log(data);
  res.render("country", { data, data2, data3, data4 });
};
exports.getByCountryData = async (req, res) => {
  const name = fs.readFileSync(`./file2.txt`, "utf-8");
  const data = await novelCovid.countries({ country: name });
  const data2 = await novelCovid.countries({ sort: "cases" });
  const data3 = await novelCovid.yesterday.countries({ country: name });
  const data4 = await novelCovid.twoDaysAgo.countries({ country: name });
  // console.log(data);
  // console.log(data3);

  res.render("table", {
    data,
    data2,
    data3,
    data4,
  });
};

exports.getNews = async (req, res) => {
  const data = await novelCovid.countries({ sort: "cases" });
  const b = await news.getNews("en", "in", `NATION`);

  res.render("news", {
    b,
    data,
  });
};
//   res.status(200).json({
//     b,
//   });
// };

exports.getNewsById = async (req, res) => {
  const x = req.params.type;
  const data = await novelCovid.countries({ sort: "cases" });
  const b = await news.getNews("en", "in", `${x}`);
  res.render("news", {
    b,
    data,
  });
};
exports.getByCountryName = async (req, res) => {
  const name = req.params.name;
  const data = await novelCovid.countries({ country: name });
  const data2 = await novelCovid.countries({ sort: "cases" });
  const data3 = await novelCovid.yesterday.countries({ sort: "cases" });
  const data4 = await novelCovid.twoDaysAgo.countries({ sort: "cases" });
  // console.log(data);
  // console.log(data);
  res.render("country", { data, data2, data3, data4 });
};
exports.about = async (req, res) => {
  const data = await novelCovid.countries({ sort: "cases" });
  res.render("about", {
    data,
  });
};
