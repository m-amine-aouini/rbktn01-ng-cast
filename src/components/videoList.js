

angular.module('video-player')
  .controller('VideoList', function ($scope) {
    $scope.dummyData = exampleVideoData;
    // $scope.onClick = function(){

    // }
  })
  .component('videoList', {
    // TODO
    templateUrl: 'src/templates/videoList.html'
  });
