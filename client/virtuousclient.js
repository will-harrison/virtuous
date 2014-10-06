Meteor.startup(function() {
  Meteor.subscribe('virtues');
});

function push(entry) {
  Virtuous.insert(entry);
  console.log("Added entry '" + entry.entry + "' for virtueID: " + entry.virtue);
}

function setVirtue (reverse) {
  var currentVirtue = Session.get("currentVirtue");

  if (currentVirtue === undefined) {
    Session.set("currentVirtue", 0);
  }
  else if (currentVirtue < Virtues.find().count() - 1) {
    Session.set("currentVirtue", currentVirtue + 1);
  }
  else if (reverse) {
    Session.set("currentVirtue", currentVirtue - 1);
  }
  else {
    // should go to graph, not restart
    Session.set("currentVirtue", 0);
  }
};

function getCurrentVirtue() {
  var currentVirtue = Session.get("currentVirtue") || 0;
  var virtues = Virtues.find().fetch();
  return virtues[currentVirtue];

}

Template.virtues.virtue = function () {
  return getCurrentVirtue();
};

Template.betterWorse.events({
  'click input.better': function (event) {
    var entry = {
        virtue: getCurrentVirtue().virtue,
        entry: "better",
        value: 1,
        timestamp: new Date()
      };
    push(entry);
    setVirtue();
  },
  'click input.worse': function (event) {
    var entry = {
      virtue: getCurrentVirtue().virtue,
      entry: "worse",
      value: -1,
      timestamp: new Date()
    };
    push(entry);
    setVirtue();
  }
});