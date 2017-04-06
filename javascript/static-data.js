angular.module("client").service('StaticData', function() {

    this.generate = function(callback){
      $.getJSON( "javascript/config.json", function(config) {
        for( i in config.apps){
          $.getJSON( "results/"+config.apps[i]+".json", function(app_results) {
            for(var j in app_results){
              callback(app_results[j]);
            }
          })
        }
      })
    }

});
