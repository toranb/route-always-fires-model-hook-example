import Ember from "ember";

var hits = 0;

var Hat = Ember.Object.extend({
    name: ""
});

export default Ember.Route.extend({
    queryParams: {
      phat: {
        refreshModel: true
      }
    },
    model: function() {
        console.log("IN Z MODEL");
        var hats = [];
        hits = hits + 1;
        for(var i = 0; i < hits; i++) {
            var hat = Hat.create({name: i});
            hats.pushObject(hat);
        }
        return hats;
    }
});
