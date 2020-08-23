<template>
  <div class="hello">
    <p>{{ karatsubaValue }}</p>
    <p>{{ traditionalValue }}</p>
    <button @click="callMultiply(3, 4)">Multiply 3 * 4</button>
  </div>
</template>

<script>

import mult from "../../../backend/assets/multiplier/multiplier"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function() {
    return {
      karatsubaValue : 0,
      karatsubaTime : 0,
      traditionalValue: 0,
      traditionalTime: 0,
      
    }
  },
  methods : {
    callMultiply : function(a, b) {
      this.karatsubaValue = mult.multiplyWithMethod(a, b, 'karatsuba');
      this.traditionalValue = mult.multiplyWithMethod(a, b, 'traditional');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
