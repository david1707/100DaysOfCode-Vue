<template>
    <div>
        <label>
            <input 
                type="checkbox"
                @change="allChecked"
                :checked="!anyRemaining">
                Check All
        </label>
    </div>
</template>

<script>
export default {
    name: 'todo-check-all',
    computed: { 
        anyRemaining() {
           return this.$store.getters.anyRemaining;
        },
    },
    methods: {
        allChecked() {
            this.$store.commit('checkAll', event.target.checked);
        }
    }
}
</script>

