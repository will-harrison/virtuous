mkdir client && mkdir server && mkdir lib

declare collection in /lib/projectNameLib.js
  ProjectName = new Meteor.Collection("projectName");

publish data in /server/projectNameServer.js
  Meteor.publish("projectName", function () {
    return ProjectName.find();
  });

subscribe to data in /client/projectNameClient.js
  Meteor.subscribe("projectName");

define template helper in client
  Template.projectName.noun = function () {
    return ProjectName.find();
  }
