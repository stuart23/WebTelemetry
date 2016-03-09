Tests = new Mongo.Collection("timeseries");

function resample(test, frequency) {
  var timeseries = Tests.findOne({name : test}).timeseries;
  var count = 0;
  var mins = [];
  timeseries.forEach(function (variable) {
    var me = variable;
    var local_minaaaa = variable.find();
    var local_min = variable.data.find({}, {sort: {time: -1}});
    mins.push({key: count, value: mins});
    }
  );
  return mins;
}

if (Meteor.isClient) {
    Template.test_item_list.helpers({
        'test_names': function () { return Tests.find(); }
    });

    Template.test_data.helpers({
        'test_values': function () { return resample(
                                  Session.get('selected_test'),
                                  Session.get('selected_frequency')
                                  );
                                }
    });

    Template.body.events({
        'change.test-dropdown': function (event) {
            Session.set('selected_test', event.target.value);
        },
        'change.frequuency-selector': function (event) {
            Session.set('selected_frequency', event.target.value);
        }
    });

}
