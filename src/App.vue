<template>
  <div id="app">
    <h3>CSRF demo</h3>
    <csrf v-if="csrf" />
    <button v-else
            @click="runCSRF">RUN</button>
  </div>
</template>

<script>

import csrf from './csrf-demo';

export default {
  components: {
    csrf,
  },
  data() {
    return {
      csrf: false,
    };
  },
  methods: {
    runCSRF() {
      this.csrf = true;
    },
  },
};

</script>

<style lang="stylus">

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  color: #1F2D3D
  margin-top: 20px

</style>
