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
      text: '<img class="qtip-pic" src="./images/hoss.jpg" />',
      title:'The First Flipped Bird',
      hide:'unfocus'
      },
    position: {
        my: 'center right',  // Position my top left...
        at: 'top left', // at the bottom right of...
        target: $('.baseball') // my target
    },
        style: {
        classes: 'qtip-dark qtip-shadow qtip-rounded',
    }
  
})
  
    $('.swear').qtip({ // Grab some elements to apply the tooltip to
    content: {
      text: '<img class="qtip-pic" src="./images/swear.jpg" />',
      title:'Pinky Swear',
      hide:'unfocus'
      },
    position: {
        my: 'center right',  // Position my top left...
        at: 'top left', // at the bottom right of...
        target: $('.swear') // my target
    },
        style: {
        classes: 'qtip-dark qtip-shadow qtip-rounded',
    }
  
})
        $('.ratio').qtip({ // Grab some elements to apply the tooltip to
    content: {
      text: '<img class="qtip-pic" src="./images/ratio-pic.png" />',
      title:'The 2D:4D Ratio',
      hide:'unfocus'
      },
    position: {
        my: 'center right',  // Position my top left...
        at: 'top left', // at the bottom right of...
        target: $('.ratio') // my target
    },
        style: {
        classes: 'qtip-dark qtip-shadow qtip-rounded',
    }
  
})
        
  jQuery('.headline').fitText(0.9);
  jQuery('#subtitle').fitText(0.8);
  jQuery('#slickQuiz h1').fitText(1.1);

});

