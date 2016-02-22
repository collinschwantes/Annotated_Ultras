---

---
(function(exports){


$(function() {

  window.ultras = [

    {% for term in site.data.terms %}
      '{{ term.title }}',
    {% endfor %}
  ];

  var availableTags = window.ultras;

  var $tags = $( "#tags" );

  function updateGlossaryAndSVG (term) {
    // glossary
    exports.glossary.showDefinition(false, term);
    exports.glossary.update();

    // svg
    var selector = '.bodypart#' + term;
    $(selector).addClass('opaque')
    };

  function runSearch() {

    var term = $tags.val();
    
    updateGlossaryAndSVG(term);
  }


  $tags.autocomplete({
    source: availableTags
  });

  $tags.keypress(function (e) {
    if (e.which == 13) {

      runSearch();
      return false;
    }
  });


  $("#tags-search").on("click", function () {
    runSearch();
  });
});

})(this);