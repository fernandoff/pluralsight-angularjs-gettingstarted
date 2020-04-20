(function(){
    
    var github = function($http){
      
      var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                        .then(function(response){
                           return response.data; 
                        });
      };
      
      var getRepos = function(user){
            return $http.get(user.repos_url)  
                        .then(function(response){
                            return response.data;
                        });
      };
      
      var getRepoDetails = function(username, reponame){
          var repo;
          var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
          
          return $http.get(repoUrl)
                      .then(function(response){
                          console.log("first repo response");
                          console.log(response);

                          repo = response.data;
                          return $http.get(repoUrl + "/collaborators");
                      })
                      .then(function(response){
                          console.log("second repo response");
                          console.log(reponse);

                          repo.collaborators = response.data;
                          return repo;
                      },
                          function(error){
                            console.log("Error Collaborators: " + (error.data.message ? error.data.message : ""));
                            repo.collaborators = [];
                            return repo
                      });
      };

      return {
          getUser: getUser,
          getRepos: getRepos,
          getRepoDetails: getRepoDetails
      };
        
    };
    
    var module = angular.module("githubViewer");
    module.factory("github", github);
    
}());