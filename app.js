'use strict';

var app = new Vue({
  el: '#app',
  data:
  {
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
       this.play()
          console.log("hello")
      }, i * app.t);

      }
    
    
      
    },
    
   
  }
})
//alert(app.question) // valueA
