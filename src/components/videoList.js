

angular.module('video-player')
  .controller('VideoList', function ($scope) {
    $scope.dummyData = exampleVideoData;
  })
  .component('videoList', {
    // TODO
    templateUrl: 'src/templates/videoList.html'
  });
