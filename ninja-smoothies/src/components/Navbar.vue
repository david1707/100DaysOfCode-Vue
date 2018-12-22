<template>
    <div class="navbar">
        <nav class="nav-extended indigo darken-2">
            <div class="nav-content center-align">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">Smooth Criminal</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab purple">
                    <router-link :to="{ name: 'AddSmoothie' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
    
}
</script>

<style>
.navbar nav {
    padding: 0 20px;
}
</style>


