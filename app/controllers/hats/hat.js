import Ember from "ember";

export default Ember.Controller.extend({
    wat: function() {
        return new Date().toISOString();
    }.property().volatile()
});
