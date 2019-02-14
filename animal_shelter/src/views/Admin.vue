<template>
    <div class="admin">
        <div class="container">
            <div class="row">
                <h3 class="center-align">Welcome to the admin section</h3>
            </div>
            <div class="row">
                <div class="col s4 center-align">
                    <a class="waves-effect waves-light btn-large "><i class="material-icons left">event</i>Manage events</a>
                    <div class="events display">
                        <h3>0 Events</h3>
                    </div>
                </div>
                <div class="col s4 center-align">
                    <a class="waves-effect waves-light btn-large"><i class="material-icons left">pets</i>Manage pets</a>
                    <div class="pets display">
                        <h3>12 Pets</h3>
                    </div>
                </div>
                <div class="col s4 center-align">
                    <a class="waves-effect waves-light btn-large"><i class="material-icons left">library_books</i>Manage blog</a>
                    <div class="blog display">
                        <h3>7 Entries</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    

}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20vh;

        .row {
            margin-top:  10vh;
        }

        .display {
            background: #26a69a;
            color: white;
            padding: 1em;
            width: 80%;
            margin: 0 auto;
            margin-top: 10vh;
        }

        .display:hover {
            opacity: 0.7;
        }

        .events {
            background: rgb(196, 32, 32);
        }
    }


</style>
