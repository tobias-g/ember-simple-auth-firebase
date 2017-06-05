import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        /**
         * Login a user with an email and password
         */
        signIn: function () {
            this.get('session').authenticate('authenticator:torii', 'firebase', {
                provider: 'password',
                email: this.get('email'),
                password: this.get('password')
            })
            .then((data) => {
                console.log(data.currentUser);
            })
            .catch((error) => {
                console.log(error);
            });
        },

        /**
         * Login a user via Google provider
         */
        googleSignIn: function () {
            this.get('session').authenticate('authenticator:torii', 'firebase', {
                provider: 'google'
            })
            .then((data) => {
                console.log(data.currentUser);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
});
