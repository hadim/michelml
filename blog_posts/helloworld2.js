const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "Hello World 2",
  cleanName: "helloworld2",
  author: "Michel Moreau",
  date: "2019-04-07T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/helloworld2.html", "utf8"),
};