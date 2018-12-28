<template>
    <li
        class="list-group-item"
        style="cursor: pointer"
        @click="serverSelected"
        :class="{critical: server.status == 'Critical', unknown: server.status == 'Unknown'}">
        Server #{{ server.id }} - Status: {{ server.status }}
    </li>
</template>

<script>
import { serverBus } from '../../main.js'

export default {
    props:['server'],
    methods: {
        serverSelected() {
            serverBus.$emit('serverSelected', this.server)
        }
    }
}
</script>

<style scoped>
.normal {
    background-color: #fff;
}
.critical {
    background-color: rgba(255, 0, 0, 0.7);
}
.unknown {
    background-color: rgba(0, 183, 255, 0.702);
}
</style>
