<template>
  <div id="app">
    <Erc />
  </div>
</template>

<script>
import Erc from './components/Erc.vue'

export default {
  name: 'App',
  components: {
    Erc
  }
  
  
}
</script>

<style>
:root {
  --primary-color: #5fbaa7;
} 
* {
  box-sizing: border-box;
}

</style>
