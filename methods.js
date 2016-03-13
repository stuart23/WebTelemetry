Meteor.methods({
  'resample': function(event_id, frequency) {
    console.log('event id' + event_id);
    var event_datasets = Timeseries.find(
      {event : new Meteor.Collection.ObjectID(event_id)}
    );
    // var frequency_num = Number(frequency);
    // return {test_value: frequency_num}
    // if (event_datasets.count() == 0 || isNaN(frequency_num)) {
    //   return {test_value: ['']};
    // }
    var b = 23;
    // var time_max_min = Meteor.call('timeMaxMin', event_datasets);
    // Times in milliseconds
    var time_max_min = {time_min : 0.5, time_max : 2.3}
    time_delta = time_max_min.time_max-time_max_min.time_min;
    return {test_value: [frequency, time_max_min.time_max-time_max_min.time_min,
      time_max_min.time_min, time_max_min.time_max]};
  },

  'timeMinMax': function (event_datasets) {
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
});
