angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.setting', {
    url: '/setting',
    views: {
      'tab3': {
        templateUrl: 'templates/setting.html',
        controller: 'settingCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.onePlace', {
    url: '/OnePlace',
    views: {
      'tab1': {
        templateUrl: 'templates/onePlace.html',
        controller: 'onePlaceCtrl'
      }
    }
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.tabsControllerSuccess', {
    url: '/success',
    views: {
      'tab2': {
        templateUrl: 'templates/tabsControllerSuccess.html',
        controller: 'tabsControllerSuccessCtrl'
      }
    }
  })

  .state('tabsController.suggestions', {
    url: '/suggestions',
    views: {
      'tab1': {
        templateUrl: 'templates/suggestions.html',
        controller: 'suggestionsCtrl'
      }
    }
  })

  .state('tabsController.discover', {
    url: '/discover',
    views: {
      'tab2': {
        templateUrl: 'templates/discover.html',
        controller: 'discoverCtrl'
      }
    }
  })

  .state('food', {
    url: '/food',
    templateUrl: 'templates/food.html',
    controller: 'foodCtrl'
  })

  .state('tabsController.reviews', {
    url: '/Reviews',
    views: {
      'tab1': {
        templateUrl: 'templates/reviews.html',
        controller: 'reviewsCtrl'
      }
    }
  })

  .state('tabsController.qRCodeForPayment', {
    url: '/qrcode',
    views: {
      'tab1': {
        templateUrl: 'templates/qRCodeForPayment.html',
        controller: 'qRCodeForPaymentCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page8')


});