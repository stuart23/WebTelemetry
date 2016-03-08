Tests = new Mongo.Collection("timeseries");

if (Meteor.isClient) {
    Template.test_items.helpers({
        'test_names': function () { return Tests.find(); }
    });

    Template.test_data.helpers({
        'test_values': function () { 
            return  {'name': Session.get('selected_text')}
             }
    });

    Template.body.events({
        'change.test-dropdown': function (event) {
        //Session.set('selected_text', event.target.value); 
        Session.set('selected_text', 'helllloo'); 
        }
    });

}
