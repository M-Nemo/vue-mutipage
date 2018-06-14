<template>
    <div id="app">
        <img src="../../assets/logo.png">
        <HelloWorld></HelloWorld>
        <a href="../page2.html">链接到page2</a>
    </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
