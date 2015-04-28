import Ember from "ember";

export default Ember.Controller.extend({
    wat: function() {
        return Math.floor(Math.random() * 10000000);
    }.property().volatile()
});
