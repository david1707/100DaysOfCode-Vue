<template>
    <div class="add-smoothie container">
        <h2 class="center-align indigo-text text-darken-3">Add new Smoothie recipe</h2>
        <form @submit.prevent="addSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredients">Add an ingredient:</label>
                <input type="text" name="add-ingredients" @keydown.tab.prevent="addIngredient" v-model="another">
            </div>
            <div v-for="(ing, index) in ingredients" :key="index">
                <label for="ingredient">Ingredient {{ index + 1 }}</label>
                <input type="text" name="ingredient" v-model="ingredients[index]">
            </div>
            <div class="field center-align mt-4">
                <p v-if="feedback" class="red-text">{{ feedback }} </p>
                <button class="btn pink">Add Smoothie</button>
            </div>
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init';
import slugify from 'slugify';

export default {
    name: 'AddSmoothie',
    data() {
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null,
        }
    },
    methods: {
        addSmoothie() {
            if(this.title && this.ingredients.length > 0) {
                this.slug = slugify(this.title, {
                    replacement: '-'.ingredients,
                    remove: /[$*_+~.()'"!\-;@]/g,
                    lower: true,
                });
                 console.log(this.slug);
                db.collection('smoothies').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug,
                }).then( () => {
                    this.$router.push( {name: 'Index'});
                }).catch(err => this.feedback = err);
            } else {
                this.feedback = 'Check the form please'
            }
        },
        addIngredient() {
            if(this.another && this.ingredients.indexOf(this.another) == -1) {
                this.ingredients.push(this.another);
                this.another = null;
            } else {
                this.feedback = 'You must enter a value to add an ingredient';
            }
        }
    }
}
</script>

<style>
.add-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.add-smoothie h2 {
    font-size: 2em;
    margin: 20px auto;
}
.add-smoothie .field {
    margin: 20px auto;
}
button {
    margin-top: 10px;
}
</style>

