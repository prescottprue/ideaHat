angular.module('ideaHat', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('menu', {
    abstract: true,
    templateUrl: "templates/menu.html"
  })
  .state('hats', {
    parent:'menu',
    url: "/hats",
    views: {
      'menuContent': {
        templateUrl: "components/hat/hat-list.html",
        controller: 'HatsCtrl'
      }
    }
  })
  .state('hat', {
    parent:'menu',
    url: "/hats/:hId",
    views: {
      'menuContent': {
        templateUrl: "components/hat/hat-detail.html",
        controller: 'HatDetailCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/hats');
});
