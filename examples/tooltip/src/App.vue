<template>
<div id="app">
    <vtooltip>
        <div slot="content">This is what goes inside the tooltip</div>
        <div slot="tooltip-text">Hover over me</div>
    </vtooltip>
</div>
</template>

<script>
import Vtooltip from 'v-poptool';
import vue from 'vue';

export default {
    name: 'App',
    components: {
        Vtooltip
    }
}
</script>

<style>
#app {
    position: absolute;
    top: 50px;
    left: 210px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
