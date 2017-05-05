<template>
  <div id="app">
    <readme />
    <h3>CSRF demo</h3>
    <test v-if="test" />
    <button v-else
            @click="runTest">RUN</button>
  </div>
</template>

<script>

import Readme from '../README.md';
import Test from './test';

export default {
  components: {
    Readme,
    Test,
  },
  data() {
    return {
      test: false,
    };
  },
  methods: {
    runTest() {
      this.test = true;
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
