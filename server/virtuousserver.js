Meteor.startup(function () {
  Meteor.publish('virtues', function () {
    return Virtues.find();
  });


  // seed Virtues collection with Ben's 13 virtues
  // TODO: redo this. Inserted into 1 document instead of multiple
  if (Virtues.find().count() == 0 ) {
    // ../lib/virtueList
    // should call seedVirtues
    _.each(virtueList.virtues, function(virtue, key, list){
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
