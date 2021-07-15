<template>
  <div id="app">
    <div class="d-flex">
      <Default msg="Default Workers are cool 😎"/>
      <TextEncoder msg="Workers with Transferrables and TextEncoder are cooler 😜"/>
      <Protobuf msg="Workers with Protobuf are the best 👑"/>
    </div>
  </div>
</template>

<script>
import Default from './components/Default.vue';
import TextEncoder from './components/TextEncoder.vue';
import Protobuf from './components/Protobuf.vue';

export default {
  name: 'App',
  components: {
    Default,
    TextEncoder,
    Protobuf,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.d-flex { 
  display: flex;
}

.d-flex div {
  width: 33.33%;
}
</style>
