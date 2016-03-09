Events = new Mongo.Collection("events");
Timeseries = new Mongo.Collection("timeseries");

function timeMaxMin(event_datasets) {
  var mins = [];
  var maxs = [];
  event_datasets.forEach(function (variable) {
    var timesteps = variable.data.map(
        function (timestep) {
          return timestep.time;
          }
        );
    mins.push(_.min(timesteps));
    maxs.push(_.max(timesteps));
    }
  );
  return {time_min : _.min(mins), time_max : _.max(maxs)};
}

function resample(event_id, frequency) {
  var event_datasets = Timeseries.find(
    {event : new Meteor.Collection.ObjectID(event_id)}
  );
  var ee = 2;
  var ff = 4;
  // var time_max_min = timeMaxMin(event_datasets);
  // Times in milliseconds
  var j = frequency;
  var k = j + 5;
  var l = j * 2;
  time_delta = time_max_min.time_max-time_max_min.time_min;

  return {test_value: [frequency, time_max_min.time_max-time_max_min.time_min,
    time_max_min.time_min, time_max_min.time_max]};
}

if (Meteor.isClient) {
  Session.set('selected_text', null);
  Session.set('selected_frequency', null);

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
          var a = Session.get('selected_test');
          var b = Number(Session.get('selected_frequency'));
          var c = Session.get('selected_frequency');
          var d = Number(Session.get('selected_frequency'));
          if ((Session.get('selected_test')) && (Session.get('selected_frequency'))) {
            return resample(
              Session.get('selected_test'),
              Number(Session.get('selected_frequency'))
              );
            } else {
              return false;
            }
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
