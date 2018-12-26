var vm = new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0,
    },
    methods: {
        result() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    computed: {
        output() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: {
        counter: function(value) {
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    }

});