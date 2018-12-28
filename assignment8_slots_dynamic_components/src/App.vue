<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="componentLoaded = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="componentLoaded = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="componentLoaded = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="componentLoaded">
                    <p slot="blue">Blue Template Loaded</p>
                    <p slot="red">Red Template Loaded</p>
                    <p slot="green">Green Template Loaded</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                componentLoaded: 'appBlue',
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
