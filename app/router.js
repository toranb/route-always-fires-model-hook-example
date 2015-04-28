import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("hats", { path: "/", queryParams: ['refresh']}, function() {
        this.route("hat", { path: "/hat/:hat_id" });
    });
});

export default Router;
