(function() {
  var parentView, childView, childViews;
  var get = Ember.get;

  module('tests/views/view/child_views_tests.js', {
    setup: function() {
      parentView = Ember.View.create({
        render: function(buffer) {
          buffer.push('Em');
          this.appendChild(childView);
        }
      });

      childView = Ember.View.create({
        template: function() { return 'ber'; }
      });
    },

    teardown: function() {
      Ember.run(function(){
        parentView.destroy();
            childView.destroy();
      });

      childViews = null;
    }
  });

  // no parent element, buffer, no element
  // parent element

  // no parent element, no buffer, no element
  test("should render an inserted child view when the child is inserted before a DOM element is created", function() {
    Ember.run(function() {
      parentView.append();
    });

    equal(parentView.$().text(), 'Ember', 'renders the child view after the parent view');
  });

})();
