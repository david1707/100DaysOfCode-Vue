new Vue({
    el: '#app',
    data: {
        link: 'http://www.google.com'
    },
    methods: {
        changeLink() {
            this.link = 'http://www.bing.com'
        }
    }
});