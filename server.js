const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8080;

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// Add the routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

