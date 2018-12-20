new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue expert (in progress...)',
        // showName: false,
        showName: true,
        showAge: true,
    },
    methods: {
        toggleName() {
            this.showName = !this.showName;
        },
        toggleAge() {
            this.showAge = !this.showAge;
        }
    }
})