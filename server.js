const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");
app.engine("madeline", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replace("#nameofcity#", "<title>" + options.nameofcity + "</title>")
      .replace("#navigation#", "<h2>" + options.navigation + "</h2>")
      .replace("#information#", "<h1>" + options.information + "</h1>")
      .replace("#link#", "<div>" + options.link + "</div>");
    return callback(null, rendered);
  });
});
app.set("views", "./views");
app.set("view engine", "madeline");

//template one is the cities of Afghanistan",
//AFGHANISTAN
app.get("/", (req, res) => {
  res.render("template", {
    navigation: `<a href="http://localhost:3000/kabul">Next Route</a>`, //this link adds the next route
    nameofcity: "Afghanistan",
    information: "Afghanistan",
    link: `<a href="https://en.wikipedia.org/wiki/Afghanistan" target="_blank">Read More!</a>`,
  });
});

//KABUL
app.get("/kabul", (req, res) => {
  res.render("template", {
    navigation: `<a href="http://localhost:3000/herat">Next Route</a>`, //this link adds the next route
    nameofcity: "Kabul",
    information: "Kabul is the capital and largest city of Afghanistan",
    link: `<a href="https://en.wikipedia.org/wiki/Kabul" target="_blank">Read More!</a>`,
  });
});

//HERAT
app.get("/Herat", (req, res) => {
  res.render("template", {
    navigation: `<a href="http://localhost:3000/mazar">Next Route</a>`, //this link adds the next route
    nameofcity: "Herat",
    information:
      "Herat  is an oasis city and the third-largest city of Afghanistan",
    link: `<a href="https://en.wikipedia.org/wiki/Herat" target="_blank">Read More!</a>`,
  });
});

//MAZAR
app.get("/mazar", (req, res) => {
  res.render("template", {
    navigation: `<a href="http://localhost:3000/kandahar">Next Route</a>`, //this link adds the next route
    nameofcity: "Mazar-i-Sharif",
    information:
      "Mazar-i-Sharif  or just Mazār, is the fourth-largest city of Afghanistan",
    link: `<a href="https://en.wikipedia.org/wiki/Mazar-i-Sharif" target="_blank">Read More!</a>`,
  });
});

//KANDAHAR
app.get("/kandahar", (req, res) => {
  res.render("template", {
    navigation: `<a href="http://localhost:3000/kabulipalaw">Next Route</a>`, //this link adds the next route
    nameofcity: "Kandahar",
    information: "Kandahar is a city in Afghanistan",
    link: `<a href="https://en.wikipedia.org/wiki/Kandahar" target="_blank">Read More!</a>`,
  });
});

//template two is about food",
//KABULI PALAW
app.get("/kabulipalaw", (req, res) => {
  res.render("food", {
    navigation: `<a href="http://localhost:3000/aushak">Next Route</a>`, //this link adds the next route
    nameofcity: "Kabuli palaw",
    information:
      "Kabuli palaw is a variety of pilaf made in Afghanistan. It consists of steamed rice mixed with raisins, carrots, and beef or lamb. There exists different variations depending on the region.",
    link: `<a href="https://en.wikipedia.org/wiki/Kabuli_palaw" target="_blank">Read More!</a>`,
  });
});

//AUSHAK
app.get("/aushak", (req, res) => {
  res.render("food", {
    navigation: `<a href="http://localhost:3000/bolani">Next Route</a>`, //this link adds the next route
    nameofcity: "Aushak",
    information:
      "Aushak is an Afghan dish made of pasta dumplings filled with chives, with a (frequently meaty) tomato sauce, topped with yogurt and dried mint. A time-consuming meal to prepare, it is usually served on holidays or at special gatherings. It is similar to the Central Asian mantu, which is also popular in Afghanistan. In contrast to aushak, mantu have a meat filling.",
    link: `<a href="https://en.wikipedia.org/wiki/Aushak" target="_blank">Read More!</a>`,
  });
});

//BOLANI
app.get("/bolani", (req, res) => {
  res.render("food", {
    navigation: `<a href="http://localhost:3000/mantu">Next Route</a>`, //this link adds the next route
    nameofcity: "Aushak",
    information:
      "Bolani (Dari: بولانی), also called Periki (Pashto) is a stuffed flat-bread from Afghanistan, fried with a filling. It has a thin crust and can be stuffed with a variety of ingredients, such as potatoes or leeks but also graced pumpkin, chives, red lentils or with minced meat. It can be served with plain yogurt or mint yogurt and is usually served with a doogh drink",
    link: `<a href="https://en.wikipedia.org/wiki/Bolani" target="_blank">Read More!</a>`,
  });
});

//MANTU/MANTI
app.get("/mantu", (req, res) => {
  res.render("food", {
    navigation: `<a href="http://localhost:3000/comingsoon">Next Route</a>`, //this link adds the next route
    nameofcity: "Mantu/Manti",
    information:
      "Manti is a type of dumpling popular in most cuisines of the South Caucasus, Balkans, Central Asia, and Afghanistan.",
    link: `<a href="https://en.wikipedia.org/wiki/Manti_(food)" target="_blank">Read More!</a>`,
  });
});

//coming soon
app.get("/comingsoon", (req, res) => {
  res.render("food", {
    navigation: `<a href="http://localhost:3000">Next Route</a>`, //this link adds the next route
    nameofcity: "Comingsoon",
    information: "The food is not yet cooked, you have to wait, Sorry .",
    link: `<a href="http://localhost:3000">Next Route</a>`,
  });
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
