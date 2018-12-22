<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit '{{ smoothie.title }}' Smoothie</h2>
        <form @submit.prevent="EditSmoothie">
        <div class="field title">
            <label for="title">Smoothie Title:</label>
            <input type="text" name="title" v-model="smoothie.title">
        </div>
        <div class="field add-ingredient">
            <label for="add-ingredients">Add an ingredient:</label>
            <input type="text" name="add-ingredients" @keydown.tab.prevent="addIngredient" v-model="another">
        </div>
        <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="field">
            <label for="ingredient">Ingredient {{ index + 1 }}</label>
            <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
            <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
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
    name: 'EditSmoothie',
    data() {
        return {
            smoothie: null,
            another: null,
            feedback: null,
        }
    },
    methods: {
        EditSmoothie() {
            if(this.smoothie.title && this.smoothie.ingredients.length > 0) {
                this.smoothie.slug = slugify(this.smoothie.title, {
                    replacement: '-'.ingredients,
                    remove: /[$*_+~.()'"!\-;@]/g,
                    lower: true,
                });
                db.collection('smoothies').doc(this.smoothie.id).update({
                    title: this.smoothie.title,
                    ingredients: this.smoothie.ingredients,
                    slug: this.smoothie.slug,
                }).then( () => {
                    this.$router.push( {name: 'Index'});
                }).catch(err => this.feedback = err);
            } else {
                this.feedback = 'Check the form please'
            }
        },
        addIngredient() {
            if(this.another && this.smoothie.ingredients.indexOf(this.another) == -1) {
                this.smoothie.ingredients.push(this.another);
                this.another = null;
            } else {
                this.feedback = 'You must enter a value to add an ingredient';
            }
        },
        deleteIng(ing){
            this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => ingredient != ing );
        }
    },
    created() {
        let ref = db.collection('smoothies').where('slug', "==", this.$route.params.smoothie_slug );
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.smoothie = doc.data();
                this.smoothie.id = doc.id;
            });
        })
    }
}
</script>

<style>
.edit-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.edit-smoothie h2 {
    font-size: 2em;
    margin: 20px auto;
}
.edit-smoothie .field {
    margin: 20px auto;
    position: relative;
}
button {
    margin-top: 10px;
    position: relative;
}
.edit-smoothie .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}
i {
    color: red;
}
</style>
