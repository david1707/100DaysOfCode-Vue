var app = new Vue({
    el: '#app',
    data: {
        greeting: 'Hello World!',
        alertMessage: '',
    },
    methods: {
        changeGreeting() {
            this.greeting = this.greeting === 'Hello World!' ? 'What is up' : 'Hello World!';
            console.log(this.$data);
        },
        alertMessageGreeting() {
            this.alertMessage = 'You typed something!';
        },
        alertEnterGreeting() {
            this.alertMessage = 'You typed something!';
        }
    },
})