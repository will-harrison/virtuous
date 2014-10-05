Meteor.startup(function () {
  Meteor.publish('virtues', function () {
    return Virtues.find();
  });

  
  // seed Virtues collection with Ben's 13 virtues
  if (Virtues.find().count() == 0 ) {
    // ../lib/virtueList
    _.each(virtueList, function(virtue, key, list){
      console.log(virtue);
      Virtues.insert(virtue, function (err, result) {
        if (err) {return err};
        console.log("Inserting " + virtue.virtue);
      });
    });
  };


  return Meteor.methods({
    removeAllVirtues: function () {
      return Virtues.remove({});
    },
    removeAllVirtuous: function () {
      return Virtuous.remove({});
    },
    seedVirtuous: function () {
      _.each(list, function(value, key, list){
      
        // body
      
      });
    }
  });
});
