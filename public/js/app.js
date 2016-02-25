var app = angular.module('Website', ['ui.router'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("homePage", {
      url: "/",
      templateUrl: "views/pages/main.html",
      controller: "MainController",
      controllerAs: 'main'
    })
    .state("aboutPage", {
      url: "/about",
      templateUrl: "views/pages/about.html"
    })
    .state("contactPage", {
      url: "/contact",
      templateUrl: "views/pages/contact.html"
    })
    .state("portPage", {
      url: "/portfolio",
      templateUrl: "views/pages/port.html"
    })

    $urlRouterProvider.otherwise('/')

}

// <!-- navbar -->
// <div id="main-header">
//   <div id="signup">
//     <a href="/" class="nav-bar">Home</a>
//     <a href="/users/signup" class="nav-bar">Portfolio</a>
//     <a href="/#/about" class="nav-bar">About</a>
//     <a href="/users/signup" class="nav-bar">Resume</a>
//     <a href="/#/contact" id="desc-index">Contact</a>
//   </div>
// </div>
// <!--  -->
// <div class="container-background">
//   <div class="background">
//   </div>
// </div>
