

angular.module('video-player')
  .controller('VideoList', function ($scope) {
    $scope.dummyData = exampleVideoData;
    $scope.onClick = function (src, title, description) {
      let videoT = document.getElementById('videoTarget');
      let titleT = document.getElementById('titleTarget');
      let descriptionT = document.getElementById('descriptionTarget');
      let source = 'https://www.youtube.com/embed/' + src;

      videoT.innerHTML = `<iframe class="embed-responsive-item" src=${source} allowFullscreen></iframe>`;
      titleT.innerHTML = title;
      descriptionT.innerHTML = description;
    };
  })
  .component('videoList', {
    // TODO
    bindings: {
      onClick: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
