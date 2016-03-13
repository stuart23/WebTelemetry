if (Meteor.isClient) {
  Template.test_data.helpers({
    'test_names': function () {
      return Events.find().map(
        function (element) {
          return {name: element.name, id: element._id.valueOf()};
        }
      );
    },
    'test_values': function () {
      var a = Meteor.call(
        'resample',
        {
          event_id: Session.get('selected_test'),
          frequency: Session.get('selected_frequency')
        },
        function(error, results) {
        console.log(results);
        return results;
        }
      );
      console.log(a);
      return a;
    }
  });

  Template.test_data.events({
    'change.test-dropdown': function (event) {
      Session.set('selected_test', event.target.value);
    },
    'change.frequency-selector': function (event) {
      Session.set('selected_frequency', event.target.value);
    }
  });
}
