import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(bodyParser.json());

const apiurl = "https://dummyapi.online/api/movies";
const jsonApiUrl = "http://localhost:5000/endpoint";

app.get("/fetch-data", async (req, res) => {
  try {
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    
    const data = await response.json();

    const addData = async (data) => {
      const promises = data.map((element) =>
        axios
          .post(jsonApiUrl, element, {
            headers: { "Content-Type": "application/json" },
          })
          .catch((error) => console.error("Error posting data:", error.message))
      );
      return Promise.all(promises);
    };

    await addData(data);

    res.status(200).json({
      message: "Data successfully sent to your JSON server",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("The server is running on port 5000");
});

