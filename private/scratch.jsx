_ = require("underscore");

/*
  create a formated list to insert into mongo
*/

// list in existing format

var virtues = [
  { virtue: 'Temperance', description: 'Eat not to dullness; drink not to elevation.' },
  { virtue: 'Silence', description: 'Speak not but what may benefit others or yourself; avoid trifling conversation.' }
];



// wrap list in mongo insert format

function wrap(virtue) {
  return {
    s1: "db.virtues.insert( ",
    s2: virtue,
    s3: " );"
  };
}

_.each(virtues, function (virtue) {
  var out = wrap(virtue);
  console.log(out.s1 + JSON.stringify(out.s2) + out.s3);
});