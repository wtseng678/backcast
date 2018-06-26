var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://googleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        q: query,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
    
  },
  
  parse: function(response) {
    return response.items;
  }

});
