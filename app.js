new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue expert (in progress...)',
        name: 'Ryu',
        url: 'https://www.youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(daytime) {
            return `Hello and good ${daytime}, ${this.name}`
        }
    }
})