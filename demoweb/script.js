/*
  jQuery document.ready shortcode
  all DOM nodes are loaded on page
*/
$(function(){

  /*
    definte panzoom options
    this is where we pass in the options that set defaults for the
    panzoom object and corresponding DOM node
    
    the controls are enabled with 
    controlIconsEnabled

    they can be styled to look more like the ones you had previously
  */
  var panzoomOptions = {
    zoomEnabled: true,
    dblClickZoomEnabled: false,
    mouseWheelZoomEnabled: true,
    controlIconsEnabled: false, // set this to true to enable default buttons
    fit: true,
    center: true
  }

  /*
    call svgPanZoom function on node #Layer_1
    pass in the panzoom options as the second argument
  */
  var waspPanZoom = svgPanZoom('#Layer_1', panzoomOptions);

  /*
    Custom buttons event handlers using jQuery
    'click' will also work for touch events on mobile.
  */
  $('#zoom-in').on('click', function(e){
    e.preventDefault()
    waspPanZoom.zoomIn()
  });

  $('#zoom-out').on('click', function(e){
    e.preventDefault()
    waspPanZoom.zoomOut()
  });

  $('#reset').on('click', function(e){
    e.preventDefault()
    waspPanZoom.resetZoom()
  });

  /*
    Body part helper functions
  */
  var toggleOpacity = function($elem) {
    $elem.toggleClass('opaque');
  };

  var toggleDefinition = function($elem) {
    var partId = $elem.attr('id');
    var selector = '.glossary-definition[data-definition="' + partId + '"]';

    $(selector).toggleClass('hidden');
  };

  /*
    Bodypart click handler
  */
  $('.bodypart').on('click', function(e){

    var $thisPart = $(this);

    toggleOpacity($thisPart);
    toggleDefinition($thisPart);
  });

  /*
    looks for resize events on the window and resizes the 
    svg accordingly.
  */
  $(window).resize(function(){
    waspPanZoom.resize();
    waspPanZoom.fit();
    waspPanZoom.center();
  });
  

});

