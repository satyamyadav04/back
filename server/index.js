const express = require("express");
const app = express();
const cors = require("cors");
const matchKeyWord = require("./npl");
const verses = require("./db.json");

require("body-parser");
app.use(express.json());
app.use(cors());

app.post("/search", (req, res) => {
  let query = "I feel stress and tension";
  const keywords = matchKeyWord(query);
  console.log(keywords);

  let results = [];
  keywords.forEach(({ keyword, synonyms }) => {
    let verseMatches = verses.filter((verse) => {
      return (
        // verse.text.toLowerCase().includes(keyword) ||
        verse.translation.toLowerCase().includes(keyword) ||
        synonyms.some(
          (synonym) =>
            // verse.text.toLowerCase().includes(synonym) ||
            verse.translation.toLowerCase().includes(synonym)
        )
      );
    });

    results = verseMatches
  });

  if (results.length == 0) {
    results = [{ NoFound: "No mathches found here some revalte info" }];
  }
  res.send(results);
});

app.listen(4000, () => {
  console.log(`server is serving on port ${process.env.PORT}`);
});
