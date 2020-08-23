<template>
  <div class="hello">
    <p>{{ traditionalValue }} || {{ traditionalTime }}</p>
    <p>{{ karatsubaValue }} || {{ karatsubaTime }}</p>
    <button @click="multiplyButton(3, 4)">Multiply 3 * 4</button>
    <div>
      {{ traditionalRes }}
      {{ karatsubaRes }}
    </div>
  </div>
</template>

<script>

import multiply from "../../../backend/assets/timer"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function() {
    return {
      traditionalValue : 0,
      traditionalTime : 0,
      karatsubaValue : 0,
      karatsubaTime : 0,

      traditionalRes : null,
      karatsubaRes : null,
    }
  },
  methods : {
    multiplyButton : function(a, b) {
      let traditionalResult = multiply.multiplyWithTimer(a, b, 'traditional');
      let karatsubaResult = multiply.multiplyWithTimer(a, b, 'karatsuba');
      console.log('hello');

      this.traditionalRes = traditionalResult;
      this.karatsubaRes = karatsubaResult;

      this.traditionalValue = traditionalResult[0];
      this.traditionalTime = traditionalResult[1];
      this.karatsubaValue = karatsubaResult[0];
      this.karatsubaTime = karatsubaResult[1];
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
