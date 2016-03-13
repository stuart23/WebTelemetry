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
      return Meteor.call(
        'resample',
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
