var app = angular.module('Website', ['ui.router'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("homePage", {
      url: "/",
      templateUrl: "views/pages/main.html"
    })
    .state("aboutPage", {
      url: "/about",
      templateUrl: "views/pages/about.html"
    })
    .state("contactPage", {
      url: "/contact",
      templateUrl: "views/pages/contact.html"
    })

    $urlRouterProvider.otherwise('/')

}
