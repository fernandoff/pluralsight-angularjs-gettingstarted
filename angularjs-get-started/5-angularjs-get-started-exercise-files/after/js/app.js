(function(){
    
    var app = angular.module("githubViewer", ["ngRoute"]);
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "./js/templates/main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "./js/templates/user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame", {
                templateUrl: "./js/templates/repo.html",
                controller: "RepoController"
            })
            .otherwise({redirectTo:"/main"});
    });
    
}());