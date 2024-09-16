const nlp = require("compromise");
const synonyms = require("synonyms");
const fuzzball = require("fuzzball");
// const { token } = require("synonyms/dictionary");
const preDefinedWord = require("./PredefeiendWord");

const matchKeyWord = (query) => {
  const doc = nlp(query);

  const terms = doc.terms().json();

  const tokens = terms.map((term) => {
    if (term.text) return term.text.toLowerCase();
    return "";
  });

  console.log("Tokens:", tokens);

  let matchKeyWords = [];

  Object.keys(preDefinedWord).forEach((keyword) => {
    const keywords = preDefinedWord[keyword];
    const synonyms = preDefinedWord[keyword].v || [];
    const synonyms2 = preDefinedWord[keyword].n || [];

    console.log(keywords);

    const keywordArray = [...(keywords.v || [])];
    const keywordSynonysms = [...synonyms, ...synonyms2];

    tokens.forEach((token) => {
      if (
        keywordArray.some((word) => fuzzball.partial_ratio(word, token) > 75)
      ) {
        matchKeyWords.push({
          keyword: keyword,
          synonyms: keywordSynonysms,
        });
      }
    });

    // if (tokens.some((word) => keywordArray.includes(word))) {
    //   matchKeyWords.push(keyword);
    // }
  });

  console.log("Matched Keywords:", matchKeyWords);

  return matchKeyWords;
};

module.exports = matchKeyWord;
