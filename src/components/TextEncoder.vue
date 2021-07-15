<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="sendWorkerMessage">Send message</button>
    <pre>{{ JSON.stringify(output) }}</pre>
  </div>
</template>

<script>
const worker = new Worker('../workers/textEncoder.js', { type: 'module' });

export default {
  name: 'TextEncoder',
  props: {
    msg: String
  },
  data: () => ({
    output: '',
  }),
  created() {
    worker.onmessage = this.messageReceivedCallback;
  },
  methods: {
    sendWorkerMessage() {
      const object = { object: 'with values '};

      const encoder = new TextEncoder();
      const array = encoder.encode(JSON.stringify(object));

      worker.postMessage(array, [array.buffer]);
    },
    messageReceivedCallback(response) {
      this.output = response.data;
    },
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
