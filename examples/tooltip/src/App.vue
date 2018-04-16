<template>
<div id="app">

    <div class="top-left">
        <vtooltip
            :options="{
            color: 'red',
            backgroundColor: '#DDD',
            fontSize: 16,
            textAlign: 'center',
            arrowPlacement: 'right',
            hOffset: 10,
            Voffset: 2,
        }">
            <div slot="content">Hello there</div>
            <div slot="tooltip-text">
                I am top left
            </div>
        </vtooltip>
    </div>

    <div class="top-right">
        <vtooltip
            :options="{
            color: 'red',
            backgroundColor: '#DDD',
            fontSize: 16,
            textAlign: 'center',
            arrowPlacement: 'right',
            hOffset: 10,
            Voffset: 2,
        }">
            <div slot="content">Hello there</div>
            <div slot="tooltip-text">
                I am top right
            </div>
        </vtooltip>
    </div>

    <div class="bottom-left">
        <vtooltip
            :options="{
            color: 'red',
            backgroundColor: '#DDD',
            fontSize: 16,
            textAlign: 'center',
            arrowPlacement: 'right',
            hOffset: 10,
            Voffset: 2,
        }">
            <div slot="content">Hello there</div>
            <div slot="tooltip-text">
                I am bottom left
            </div>
        </vtooltip>
    </div>

    <div class="bottom-right">
        <vtooltip
            :options="{
            color: 'red',
            backgroundColor: '#DDD',
            fontSize: 16,
            textAlign: 'center',
            arrowPlacement: 'right',
            hOffset: 10,
            Voffset: 2,
        }">
            <div slot="content">Hello there</div>
            <div slot="tooltip-text">
                I am bottom right
            </div>
        </vtooltip>
    </div>


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
body{
    width: 100%;
    margin: 0;
    padding: 0;

}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #DDD;
    font-size: 35px;
    position: relative;
    height: 100vh;
    background: black;
}


.top-left{
    position: absolute;
    left: 150px;
    top: 50px;
}
.top-right{
    position: absolute;
    right: 150px;
    top: 50px;
}

.bottom-left{
    position: absolute;
    left: 150px;
    bottom: 50px;
}

.bottom-right{
    position: absolute;
    right: 150px;
    bottom: 50px;
}

</style>
