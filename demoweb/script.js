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
  var waspPanZoom = window.waspPanZoom = svgPanZoom('#Layer_1', panzoomOptions);


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
    looks for resize events on the window and resizes the 
    svg accordingly.
  */
  $(window).resize(function(){
    waspPanZoom.resize();
    waspPanZoom.fit();
    waspPanZoom.center();
  });
  
  /*change opacity with click on svg*/
  
  var count = 0;
  /*
 $("#whead").click(function() {
   count++;
   if(count % 2 === 0) {
   $(this).attr("class", "transparent"); 
     
   } else { $(this).attr("class", "opaque"); 
   }
   //return(count);
});
*/

$(".bodypart").each(function() {
  var $thisPart = $(this);
  $thisPart.click(function() {
   count++;
   if(count % 2 === 0) {
   $thisPart.attr("class", "bodypart transparent"); 
     
   } else { $thisPart.attr("class", "bodypart opaque"); 
   }
   //return(count);
      });
  });



  
  /* display part name or abbreviation */ 
  $("")
    
    $("#whead").dblclick(function() {
      $("p").toggle();
});
  

  /*get information from HAO into side panel*/
  
  
  
});


