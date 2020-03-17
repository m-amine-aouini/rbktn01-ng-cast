angular.module('video-player')
  .controller('video-Player', function ($scope, $window) {
    let data = $window.videos[0];
    $scope.videoLink = 'https://www.youtube.com/embed/' + data.id.videoId;
    $scope.title = data.snippet.title;
    $scope.description = data.snippet.description;
  })

  .component('videoPlayer', {
    // TODO
    controller: 'video-Player',
    templateUrl: 'src/templates/videoPlayer.html'
  });
