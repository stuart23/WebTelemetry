Meteor.methods({
  'resample': function(args) {
    var event_id_object = new Meteor.Collection.ObjectID(args.event_id);
    //console.log(event_id_object);
    // var event_id_object = null;
    // try {
    //   console.log('event id ' + event_id);
    //   var stu = 23;
    // } catch(err) {
    // }
    var event_datasets = Timeseries.find(
      {event : event_id_object}
    );
    // var b = event_datasets.fetch();
    // console.log(b);
    // // var time_max_min = Meteor.call('timeMaxMin', event_datasets);
    // // Times in milliseconds
    var time_max_min = {time_min : 0.5, time_max : 2.3}
    time_delta = time_max_min.time_max-time_max_min.time_min;
    return {test_value: [args.frequency, time_max_min.time_max-time_max_min.time_min,
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
