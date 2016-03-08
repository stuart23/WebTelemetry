Tests = new Mongo.Collection("timeseries");

if (Meteor.isClient) {
    Template.body.helpers({
        tests: function () {
            return Tests.find();
        }
    });
}
