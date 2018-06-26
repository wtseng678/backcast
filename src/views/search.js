var SearchView = Backbone.View.extend({

  events: {
    'click button': 'doSearch',
    'keyup input': 'handleKeyUp'
  },
  
  handleKeyUp: function(e) {
    this.doSearch();
    // if (e.keyCode === 13) {
    //   this.doSearch();
    // }
  },
  
  doSearch: function() {
    setInterval(this.collection.search(this.$('input').val().trim()), 100);
    //this.$('input').val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
