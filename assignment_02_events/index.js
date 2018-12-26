new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        buttonAlert(){
            alert('Button clicked!')
        },
        saveKey() {
            this.value = event.target.value;
        }
    }
})