angular.module('video-player', [])
  .service('youTube', function ($http, $log, $window) {
    this.search = function (searchCategory, cb) {
      $http.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: 'snippet',
          q: searchCategory,
          maxResults: 5,
          type: 'video',
          key: YOUTUBE_API_KEY
        }

      })
        .then((res) => {
          cb(res);
        })
        .catch((err) => {
          $log.info(err);
        });
    };
  });

// angular.injector().annotate('youTube')
