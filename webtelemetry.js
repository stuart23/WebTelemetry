Events = new Mongo.Collection("events");
Timeseries = new Mongo.Collection("timeseries");

function resample(event_id, frequency) {
  var event_datasets = Timeseries.find(
    {event : new Meteor.Collection.ObjectID(event_id)}
  );
  var count = 0;
  var mins = [];
  event_datasets.forEach(function (variable) {
    var me = variable.data;

    var you = variable;
  //   mins.push({key: count, value: mins});
    }
  );
    return {test_value: event_id};
}

if (Meteor.isClient) {
    Template.test_item_list.helpers({
        'test_names': function () {
          return Events.find().map(
            function (element) {
              return {name: element.name, id: element._id.valueOf()};
            }
          );
        }
    });

    Template.test_data.helpers({
        'test_values': function () {
          return resample(
                                  Session.get('selected_test'),
                                  Session.get('selected_frequency')
                                  );
                                }
    });

    Template.body.events({
        'change.test-dropdown': function (event) {
            Session.set('selected_test', event.target.value);
        },
        'change.frequency-selector': function (event) {
            Session.set('selected_frequency', event.target.value);
        }
    });

}
