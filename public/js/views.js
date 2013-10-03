var IndexView = Backbone.View.extend({
  render: function() {
     $('#page_container').html(JST['index']()).trigger('create');
     console.log("backbone");
      return this;

  }
});