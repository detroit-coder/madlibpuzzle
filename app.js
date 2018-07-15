var app = angular.module('madLibApp', ["ngRoute"]);
app.config (function ($routeProvider){
  $routeProvider
    .when ('/', {
      template: '<h1 class="error">Click the input button to get started!</h1>'
  })  
    .when('/Input',{
      templateUrl:'Input.html',
      controller:'InputCtrl'
      
  })
    .when('/Submit', {
      templateUrl:'Submit.html',
      controller: 'SubmitCtrl'
  })
    .otherwise ({
      template: '<h1 class="error"> nope nope nope</h1>'
  });
});
            