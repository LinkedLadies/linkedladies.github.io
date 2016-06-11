'use strict';

angular.module('linkedLadiesApp', [])
  .controller('HomeController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    $scope.home = homeFactory.getHome();
  }])
  .controller('IntroController', ['$scope', 'introFactory', function($scope, introFactory) {
    $scope.intro = introFactory.getIntro(0);
  }])
  .controller('ProjectsController', ['$scope', 'projectsFactory', function($scope, projectsFactory) {
    $scope.title = 'Recent Projects';
    $scope.projects = projectsFactory.getProjects();
  }])
  .controller('TeamController', ['$scope', 'teamFactory', function($scope, teamFactory) {
    $scope.title = 'Team';
    $scope.members = teamFactory.getMembers();
  }]);
