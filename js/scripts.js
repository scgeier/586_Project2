console.info("scripts.js is loaded");


$(document).ready(function(){
  $('.single-item').slick({
      dots:true,
  });
  
  $('#slickQuiz').slickQuiz({
        // options
    });
  
  $('img[usemap]').rwdImageMaps();
  
  $('.baseball').qtip({ // Grab some elements to apply the tooltip to
    content: {
      text: '<img src="../images/hoss.jpg" />',
      title:'The First Flipped Bird'
      },
    position: {
        my: 'top right',  // Position my top left...
        at: 'bottom left', // at the bottom right of...
        target: $('.baseball') // my target
    },
        style: {
        classes: 'qtip-blue qtip-shadow qtip-rounded'
    }
    
})

});

