angular.module('video-player')
  .controller('App', function (youTube, $window) {
    youTube.search('pizza', function (result) {
      // console.log(result)
      if (!!result) {
        $window.videos = result.data.items;
      }

    });

  })
  .component('app', {
    // TODO

    controller: 'App',

    templateUrl: 'src/templates/app.html'
  });


