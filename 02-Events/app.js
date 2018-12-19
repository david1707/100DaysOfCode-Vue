new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue expert (in progress...)',
        wage: 10,
    },
    methods: {
        changeWage(amount){
            this.wage += amount;
        }
    }
})