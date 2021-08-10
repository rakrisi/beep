'use strict';

var app = new Vue({
  el: '#app',
  data:
  {
    ques:'0',
 q:'10',
 t:'420000',

  },
  methods: {
    play: function (event) {
      this.$refs.audioElm.play();
    },
    start: function (event) {
    
      
      for (let i = 0; i <= app.q ; i++){  
      
        setTimeout(() => {
          this.ques=i+1,
       this.play(),
          console.log("hello")
          
      }, i * app.t);

      }
    
    
      
    },
    
   
  }
})
//alert(app.question) // valueA
