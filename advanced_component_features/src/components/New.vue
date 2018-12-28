<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Click</button>
        {{ counter }}
    </div>    
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        }
    },
    destroyed() {
        console.log('Destroyed')
    },
    deactivated() {
        console.log('Deactivated')
    },
    deactivated() {
        console.log('Activated')
    }
}
</script>
