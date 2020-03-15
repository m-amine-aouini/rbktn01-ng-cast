angular.module('video-player')
  .service('youTube', function ($http, $log) {
    this.search = function (searchCategory, cb) {
      $http.get("https://www.googleapis.com/youtube/v3", {
        q: searchCategory,
        maxResults: 5,
        type: 'video'

      })
        .then((res) => {
          cb(res);
        })
        .catch((err) => {
          $log.info(err);
        });
    };
  });
