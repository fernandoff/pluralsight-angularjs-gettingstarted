(function() {

    var module = angular.module("githubViewer");

    var RepoController = function($scope, $routeParams, github) {

        var onRepo = function(data){
          console.log("repo ok");
          $scope.repo = data;  
        };
        
        var onError = function(reason){
          console.log("repo error");
          console.log(reason);
          $scope.error = reason;  
        };


        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
              .then(onRepo, onError);
    };


    module.controller("RepoController", RepoController);
}());