Tests = new Mongo.Collection("timeseries");

if (Meteor.isClient) {
    Template.testlist.helpers({
        tests: function () {
            return Tests.find();
        },
        datatable: function () {
            return Tests.find();
        }
    });
}
