var vm = new Vue({
    el: '#exercise',
    data: {
        value: 0,
    },
    methods: {

    },
    computed: {
        result() {
            return this.value != 12 ?  'Not there yet' : 'Done';
        }
    },
    watch: {
        result: () => {
            setTimeout(() => {
                vm.value = 0;
            }, 5000)
        }
    }
});