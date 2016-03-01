app.controller('MainController', function() {
  var vm = this;

  vm.name = "John";
  vm.quotes = [
  {'quote': "Just Keep Swimming", 'author': "Dory from Nemo"},
  {'quote': "Change does not roll in on the wheels of inevitability, but comes through continuous struggle.", 'author': "Martin Luther King, Jr."},
  {'quote': "I think you need the failures to get the success. You learn more from that.", 'author': "Kevin Spacey"},
  {'quote': "If two wrongs don't make a right, try three.", 'author': "Laurence J. Peter"},
  {'quote': "It takes considerable knowledge just to realize the extent of your own ignorance.", 'author': "Thomas Sowell" },
  {'quote': "Procrastination is the art of keeping up with yesterday.", 'author': "Don Marquis"},
  {'quote': "Get your facts first, then you can distort them as you please.", 'author': "Mark Twain"},
  {'quote': "Be yourself; everyone else is already taken.", 'author': "Oscar Wilde"},
  {'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 'author': "Albert Einstein"},
  {'quote': "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", 'author': "Dr. Seuss"},
  {'quote': "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", 'author': "J.K. Rowling"}
  ];

  vm.quote;
  vm.author;

  vm.randomQuote = function() {
    vm.random = Math.floor(Math.random() * vm.quotes.length)
    console.log(vm.random)
    for (var i = 0; i < 1; i++) {
      vm.quote = vm.quotes[vm.random].quote;
      vm.author = vm.quotes[vm.random].author;
    };
  }
  vm.randomQuote();

})
