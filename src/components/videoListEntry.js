angular.module('video-player')
  .controller('video-list-entry', function ($scope) {
    // console.log($ctrl)
  })

  .component('videoListEntry', {
    controller: 'video-list-entry',

    bindings: {
      data: '<'

    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
