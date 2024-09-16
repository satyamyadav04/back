const synonyms = require("synonyms");

const preDefinedWord = {
  // **Keywords related to Dharma (duty, righteousness)**
  dharma: synonyms("duty") || { v: ["duty", "obligation", "responsibility"], n: ["righteousness", "morality"] },
  
  // **Keywords related to Karma (action, deeds)**
  karma: synonyms("action") || { v: ["act", "deed", "perform"], n: ["action", "deed", "work"] },

  // **Keywords related to Bhakti (devotion, love)**
  bhakti: synonyms("devotion") || { v: ["devote", "adore", "worship"], n: ["devotion", "love", "faith"] },

  // **Keywords related to Moksha (liberation, salvation)**
  moksha: synonyms("liberation") || { v: ["liberate", "free", "release"], n: ["salvation", "liberation", "freedom"] },

  // **Keywords related to Arjuna's dilemmas (conflict, confusion)**
  arjuna: synonyms("conflict") || { v: ["struggle", "debate", "waver"], n: ["dilemma", "confusion", "doubt"] },

  // **Keywords related to Yoga (union, discipline)**
  yoga: synonyms("discipline") || { v: ["unite", "balance", "practice"], n: ["union", "discipline", "meditation"] },

  // **Keywords related to Peace (inner peace, tranquility)**
  shanti: synonyms("peace") || { v: ["calm", "settle", "soothe"], n: ["peace", "tranquility", "serenity"] },

  // **Keywords related to Knowledge (wisdom, understanding)**
  jnana: synonyms("knowledge") || { v: ["know", "understand", "comprehend"], n: ["wisdom", "insight", "understanding"] },

  // **Keywords related to Fearlessness (courage, bravery)**
  abhay: synonyms("courage") || { v: ["face", "confront", "endure"], n: ["fearlessness", "bravery", "courage"] },

  // **Keywords related to Detachment (letting go, renunciation)**
  vairagya: synonyms("detachment") || { v: ["detach", "release", "renounce"], n: ["detachment", "renunciation", "indifference"] },
  
  // **Keywords related to Stress or Tension**
  stress: synonyms("stress") || { v: ["stress", "accent", "emphasize"], n: ["stress", "tension", "pressure"] },

  // **Keywords related to Happiness (joy, contentment)**
  happiness: synonyms("happiness") || { v: ["rejoice", "delight", "enjoy"], n: ["happiness", "joy", "contentment"] }
};

module.exports = preDefinedWord;
