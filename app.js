angular.module('portfolioApp', [])
  .controller('portfolioController', function($scope) {
    $scope.portfolio = {
      name: 'My Portfolio',
      menu: [
        { label: 'Home', url: '#' },
        { label: 'About', url: '#about' },
        { label: 'Projects', url: '#projects' },
        { label: 'Contact', url: '#contact' }
      ],
      about: 'I am a passionate web developer with experience in HTML, CSS, and AngularJS.',
      projects: [
        { name: 'Project 1', description: 'A web project built using AngularJS' },
        { name: 'Project 2', description: 'A responsive website created with HTML and CSS' },
        { name: 'Project 3', description: 'An interactive web application with AngularJS' }
      ],
      contact: {
        email: 'contact@example.com',
        phone: '123-456-7890'
      }
    };
    $scope.currentYear = new Date().getFullYear();
  });