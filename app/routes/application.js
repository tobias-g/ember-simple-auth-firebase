import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        return this.get('session').fetch().catch(function() {});
    },

    actions: {
        /**
         * We want to be able to logout from anywhere so lets put the action in
         * the application route.
         */
        logout: function () {
            this.get('session').close();
        }
    }
});