<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <input type="text" v-model="firstText">
                <p>Reversed text: {{ firstText | reverseText }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>Text length: {{ firstText | countLetters }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <input type="text" v-model="secondText">
                <p>Reversed text: {{ computedReverse }}</p>
                <p>Text length: {{ computedLength }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { lengthAwareMixin } from './lengthAwareMixin.js'

    export default {
        data() {
            return {
                firstText: 'Sample text',
                secondText: 'Lorem Ipsum',
            }
        },
        filters: {
            reverseText(value) {
                return value.split('').reverse().join('');
            }
        },
        computed: {
            computedReverse() {
                return this.secondText.split('').reverse().join('');
            },
        },
        mixins: [lengthAwareMixin]
    }
</script>

<style>
</style>
