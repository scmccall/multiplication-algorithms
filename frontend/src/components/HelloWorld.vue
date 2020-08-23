<template>
  <div class="hello">
<<<<<<< HEAD
    <p>{{ karatsubaValue }}</p>
    <p>{{ traditionalValue }}</p>
    <button @click="callMultiply(3, 4)">Multiply 3 * 4</button>
=======
    <p>{{ traditionalValue }} || {{ traditionalTime }}</p>
    <p>{{ karatsubaValue }} || {{ karatsubaTime }}</p>
    <button @click="multiplyButton(3, 4)">Multiply 3 * 4</button>
    <div>
      {{ traditionalRes }}
      {{ karatsubaRes }}
    </div>
>>>>>>> backend-timer
  </div>
</template>

<script>

<<<<<<< HEAD
import mult from "../../../backend/assets/multiplier/multiplier"
=======
import multiply from "../../../backend/assets/timer"
>>>>>>> backend-timer

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function() {
    return {
<<<<<<< HEAD
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

=======
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
>>>>>>> backend-timer
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
