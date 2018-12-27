var vm = new Vue({
  el: '#exercise',
  data: {
    effect: false,
    secondDivColour: 'green',
    secondDivSize: 'divSize',
    thirdDiv: 'green',
    fourthDivClass: 'green',
    fourthDivClassActive: false,
    fifth: {
      width: '100px',
      height: '100px',
      backgroundColor: 'green'
    },
    progressBar: {
      backgroundColor: 'blue',
      width: '0px',
    }
  },
  methods: {
    startEffect: function() {
      setInterval(() => this.effect = !this.effect, 2000);
    },
    startProgress: function() {
    	var vm = this;
      var width = 0;
     
    var progressBarInterval = setInterval(function() {
        width = width + 10;
        if (width >= 100) {
          clearInterval(progressBarInterval);
        }
      	vm.progressBar.width = width + 'px';
      }, 250);
    }
  },
});
