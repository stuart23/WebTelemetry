Tests = new Mongo.collection("timeseries");

if (Meteor.isClient) {
    Template.body.helpers({
        tests: function () {
            return Tests.find();
        }
//        test_data: function() {
//            return Tests.find({"name": Session.get("selected_test")});
//        }
    });
//
//    Template.body.events({
//        "change .test-dropdown": function(event) {
//            Session.set("selected_test", event.target.value);
//        }
//    });
}
