---

---
(function(exports){


$(function() {

  window.ultras = [
//liquid 
    {% for term in site.data.hao_terms %} 
      '{{ term.title }}',
    {% endfor %}
  ];

  var availableTags = window.ultras;
  console.log(availableTags)

  window.ultrasKey = [
// create list of terms with matched IDs
   {% for term in site.data.hao_terms %}
      { '{{ term.title }}' : '{{ term.ID}}' },
   {% endfor %}
 ];

console.log(window.ultrasKey)

  var $tags = $( "#tags" );


  function updateGlossaryAndSVG (term,ID) {
      console.log(term,ID)

    // glossary
    exports.glossary.showDefinition(false, ID);
    exports.glossary.update();

    // svg
    var selector = '.bodypart#' + ID;
    $(selector).addClass('opaque')
    };

  function runSearch() {

    var term = $tags.val();

    var ID =  _.find(window.ultrasKey,term)[term] 

    
    updateGlossaryAndSVG(term,ID);
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