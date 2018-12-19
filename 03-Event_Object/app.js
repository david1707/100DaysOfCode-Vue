new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue expert (in progress...)',
        coords: {
            x: 0,
            y: 0,
        }
    },
    methods: {
        logEvent(e) {
            console.log(e);
        },
        logCoords(e) {
            [this.coords.x, this.coords.y] = [e.offsetX, e.offsetY]
        }
    }
})