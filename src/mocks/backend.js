const axios = require("axios").default;

const mock = true;
const headers = {
  "content-type": "application/json",
};

module.exports = function (_, req, res) {
  if (req.url == "/api/posts" && req.method === "GET") {
    if (mock) {
      return res({
        headers,
        content: JSON.stringify([
          {
            userId: 1,
            id: 1,
            title: "First title",
            body: "First body",
          },
        ]),
      });
    } else {
      return axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (value) => res({ headers: value.headers, content: value.data }),
        () => {}
      );
    }
  }
};
