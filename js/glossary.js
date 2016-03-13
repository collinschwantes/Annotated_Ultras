(function (exports) {
  'require strict';
  /*
    Glossary contstructor
  */
// creates and obj that is also a function that can be called
// when called 
  exports.Glossary = function Glossary() {
    this.definitionCount = 0;
    this.prevCount = 0;
    this.$root = $('.glossary');
    this.$list = $('.glossary-list')
  }

  /*
    Glossary prototype methods - functions specific to func obj
  */
  exports.Glossary.prototype = {
    isFull: function() {
      return (this.definitionCount > 0);
    },
    increaseCount: function() {
      this.prevCount = this.definitionCount;
      this.definitionCount ++;
    },
    decreaseCount: function() {
      this.prevCount = this.definitionCount;
      this.definitionCount --;
    },
    showDefinition: function($elem, id) {
      var partId = $elem ? $elem.attr('id') : id;
      

      var selector = '.glossary-definition[data-definition="' + partId + '"]';
      var $selector = $(selector);
      var willIncrease = $selector.hasClass('hidden');
      if (willIncrease) {
        this.increaseCount();
        $(selector).removeClass('hidden');
      } 
    },
    toggleDefinition: function($elem, id) {
      var partId = $elem ? $elem.attr('id') : id;
      console.log(partId)
      var selector = '.glossary-definition[data-definition="' + partId + '"]';
      var $selector = $(selector);
      var willIncrease = $selector.hasClass('hidden');
      if (willIncrease) {
        this.increaseCount();
        $(selector).removeClass('hidden');
      } else {
        this.decreaseCount();
        $(selector).addClass('hidden');
      } 
    },
    update: function() {
      if (this.isFull()) {
        this.$root.show()
      } else {
        this.$root.hide();
      }
    }
  }

})(this);