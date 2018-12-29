<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <h3 v-custom:click="myFunction">Sample text</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            myFunction(){
                alert('On click custom directive activated')
            }
        },
        directives: {
            'custom': {
                bind(el, binding, vnode) {
                    let eventType = binding.arg;
                    let myFunction = binding.value;
                    el.addEventListener(eventType, myFunction)
                }
            }
        }
    }
</script>

<style>
</style>
