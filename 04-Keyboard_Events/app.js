new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue expert (in progress...)',
        name: 'David'
    },
    methods: {
        updateName(e) {
            this.name = e.target.value;
        }
    }
})