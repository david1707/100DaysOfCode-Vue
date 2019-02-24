<template>
    <div class="admin">
        <div class="container">
            <div class="row">
                <h3 class="center-align">Welcome to the admin section</h3>
            </div>
            <div class="row" v-if="loaded">
                <div class="col s4 center-align">
                    <router-link to="/admin/events" class="waves-effect waves-light btn-large "><i class="material-icons left">event</i>Manage events</router-link>
                    <div class="events display" :class="{ 'existing-element': eventsTotal, 'empty-element': !eventsTotal }">
                        <h3>{{ eventsTotal }} Events</h3>
                    </div>
                </div>
                <div class="col s4 center-align">
                    <router-link to="/admin/pets" class="waves-effect waves-light btn-large "><i class="material-icons left">pets</i>Manage pets</router-link>
                    <div class="events display" :class="{ 'existing-element': petsTotal, 'empty-element': !petsTotal }">
                        <h3>{{ petsTotal }} Pets</h3>
                    </div>
                </div>
                <div class="col s4 center-align">
                    <router-link to="/admin/blog" class="waves-effect waves-light btn-large "><i class="material-icons left">library_books</i>Manage blog</router-link>
                    <div class="events display" :class="{ 'existing-element': blogTotal, 'empty-element': !blogTotal }">
                        <h3>{{ blogTotal }} Entries</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase/firebaseInit'

export default {
    name: 'admin',
    data() {
        return {
            loaded: false,
            eventsTotal: Number,
            petsTotal: Number,
            blogTotal: Number,
        }
    },
    beforeCreate() {
        db.collection('events').get()
			.then(snapshot => {
                this.eventsTotal = snapshot.size;
            });
        db.collection('pets').get()
            .then(snapshot => {
                this.petsTotal = snapshot.size;
            });
        db.collection('blogs').get()
			.then(snapshot => {
                this.blogTotal = snapshot.size;
            })
            .then( () => this.loaded = true)
    }
}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20vh;

        .row {
            margin-top:  10vh;
        }

        .display {
            color: white;
            padding: 1em;
            width: 80%;
            margin: 0 auto;
            margin-top: 10vh;
        }

        .display:hover {
            opacity: 0.7;
        }

        .existing-element {
            background: #26a69a;
        }

        .empty-element {
            background: rgb(196, 32, 32);
        }
    }
</style>
