Meteor.startup(function() {
  Meteor.subscribe('virtues');

});
Session.set("virtueCounter", getVirtueCount());
var virtues = getVirtues();

console.log("virtues: "+virtues[Session.get("virtueCounter")].virtue);
console.log("counter: "+Session.get("virtueCounter"));

// document.write(virtues[Session.get("virtueCounter")-1].virtue);
// document.write(virtues[Session.get("virtueCounter")-1].description);

function getVirtues() {
  return Virtues.find().fetch();
}

function getVirtueCount () {
  return Virtues.find().count();
}


function getNextVirtue () {
  var virtues = getVirtues();

  for (prop in virtues) {
      if (!virtues.hasOwnProperty(prop)) {
          //The current property is not a direct property of p
          continue;
      }
      console.log(prop);
  }
}

// function getNextVirtue() {
//   var result = Virtues.findOne({}, {skip: Session.get("currentVirtueID")});
//   Session.set("currentVirtueName", result.virtue);
//   Session.set("currentVirtueID", Session.get("currentVirtueID") + 1);
//   return result;
// }

function push(vote) {
  console.log("Added vote " + vote.vote + " for virtueID: " + vote.virtue);
}

Template.virtues.virtue = function () {
  return getNextVirtue();
};

Template.betterWorse.events({
  'click input.better': function (event) {
    var vote = {
        virtue: document.getElementById('virtue').innerHTML,
        vote: "better",
        value: 1
      };
    console.log(vote);
    getNextVirtue();
    push(vote);
  },
  'click input.worse': function (event) {
    var vote = {
      virtue: document.getElementById('virtue').innerHTML,
      vote: "worse",
      value: -1
    };
    console.log(vote);
    getNextVirtue();
    push(vote);

  }
});