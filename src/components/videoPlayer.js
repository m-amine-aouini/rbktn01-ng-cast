angular.module('video-player')
  .controller('video-Player', function ($scope) {
    $scope.data = exampleVideoData[0];
    $scope.videoLink = "https://www.youtube.com/embed/" + $scope.data.id.videoId;
    $scope.title = $scope.data.snippet.title;
    $scope.description = $scope.data.snippet.description;
  })

  .component('videoPlayer', {
    // TODO
    controller: 'video-Player',
    templateUrl: 'src/templates/videoPlayer.html'
  });
