
import express from "express";
import axios from "axios";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", async(req, res) => {
    try {
        const response = await axios.get("https://sv443.net/jokeapi/v2/joke/Any");
        const jokeData = response.data;
        res.render("index", { jokeData });
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error fetching joke. Please try again later.');
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
