(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    if ( 1 == 0) {
    var textJSON =
      [
        {
          sentences: [
            {
              text: 'to sie nigdy nei zmienia digital experiences should not come down to us',
              type: 'default'
            }
          ]
        },
        {
          sentences: [
            {
              text: 'to sie nigdy nei zmienia digital experiences should not come down to us',
              type: 'default'
            }
          ]
        },
        {
          sentences: [
            {
              text: 'The times are hard. But who care1 ',
              type: 'default'
            },
            {
              text: 'The times are hard. The experience is mad. The life is a hack.1 ',
              type: 'night'
            },
            {
              text: 'The times are hard. we are bastards sesign.1 ',
              type: 'day'
            }
          ]
        },
        {
          sentences: [
            {
              text: 'The times are hard. But who cares zdanie 2 ',
              type: 'default'
            },
            {
              text: 'We all need to change things for an era of disruptive connectivity.2 ',
              type: 'night'
            },
            {
              text: 'siema222 ',
              type: 'day'
            }
          ]
        },
        {
          sentences: [
            {
              text: 'to sie nigdy nei zmienia digital experiences should not come down to us',
              type: 'default'
            }
          ]
        },
        {
          sentences: [
            {
              text: 'to sie nigdy nei zmienia digital experiences should not come down to us',
              type: 'default'
            }
          ]
        },
        {
          sentences: [
            {
              text: 'The times are hard. But who cares3333 ',
              type: 'default'
            },
            {
              text: ' We think that digital experiences should not come down to useless notifications.3 ',
              type: 'night'
            },
            {
              text: 'siema333 ',
              type: 'day'
            }
          ]
        },
        {
          sentences: [
            {
              text: 'to sie nigdy nei zmienia',
              type: 'default'
            }
          ]
        },
      ];


    var MakeText = function (item, type) {
      var bioText = [];


      item.sentences.forEach(function (sent) {
        if (sent.type === 'default') {
          bioText.push(sent.text);

        }
        if (sent.type === type) {
          bioText.push(sent.text);

        }
      });
      console.log(bioText);

      return bioText;
    };
    var i = 0;
    var wrapper = document.getElementsByClassName('yolo');

    textJSON.forEach(function (item) {
      var klas = 'klasa' + i;
      i++;
      var element = document.createElement('span');
      wrapper[0].appendChild(element);
      element.classList.add(klas);
      var typed;
      typed = new Typed('.'+klas, {
        strings: MakeText(item, (Math.random() >= 0.5 ? 'night' : 'day')),
        typeSpeed: 30,
        startDelay: 0,
        backDelay: 5000 + (i*i*10*1000*Math.random()*Math.random()),
        loop: true,
        backSpeed: 20,
        showCursor: false,
      });

    });
  }
  if ($('.main-gallery').length) {
    
//   var galleryitem = $('.gallery__item');
//   var margingalleryTop = 60;
//   var margingalleryLeft = 40;
//   var animationTime = 2000;

//   if(galleryitem.length) {
//     $('html,body').animate({
//       scrollTop: galleryitem.offset().top - margingalleryTop,
//       scrollLeft: galleryitem.offset().left - margingalleryLeft
//   }, animationTime);
// }

//   galleryitem.each(function( index ) {


    
//     $( this ).on("click", function () {
      
//     if(index !== galleryitem.length - 1 && index + 1 < galleryitem.length) {

//       $('html,body').animate({
//         scrollTop: galleryitem.eq(index + 1).offset().top - margingalleryTop,
//         scrollLeft: galleryitem.eq(index + 1).offset().left - margingalleryLeft
//       }, animationTime);
//     }
//     else if (index + 1 == galleryitem.length) {
      
//       $('html,body').animate({
//         scrollTop: galleryitem.eq(0).offset().top - margingalleryTop,
//         scrollLeft: galleryitem.eq(0).offset().left - margingalleryLeft
//       }, animationTime);
//     }
//     });
//   });
var centerTop = document.documentElement.scrollHeight / 2 - ($(window).height()/2);
var centerLeft = document.documentElement.scrollWidth / 2 - ($(window).width()/2);

//setInterval(function() {
  // method to be executed;
 // console.log(document.documentElement.scrollTop, document.documentElement.scrollLeft);
document.body.scrollTop = document.documentElement.scrollTop = centerTop;
document.body.scrollLeft = document.documentElement.scrollLeft = centerLeft;
//}, 1000);


  var ee = 1;

  var eee = 1;
  var alp = 0;


  var bett = 0;
  var gamm = 0;
  var lol = 0;
  var acc = false;

  window.addEventListener('devicemotion', function(e) {

    ee +=1;
    
    if (ee % 500 == 0)  {
  
  
      //console.log(e.acceleration);
  
    }
    var value = 0.02;
  if (e.acceleration.x > value || e.acceleration.y > value || e.acceleration.z > value) {
    acc = true;
  }
  else {
    acc = false;
  }
  
   
  });


window.addEventListener('deviceorientation', function(e) {
    if (eee == 1) {
      bett = e.beta;
      gamm = e.gamma;
    }
  eee +=1;
  
  if (eee % 10 == 0)  {



  }

// lol +=1; 

// console.log(e.beta, bett, e.beta - bett);

this.console.log(acc);

if (acc) {
var roundPxChange = 50;
var speedMove = 20;
 document.body.scrollTop = document.documentElement.scrollTop = centerTop - ((Math.round((e.beta - bett)*roundPxChange)/roundPxChange) * speedMove) ;
  document.body.scrollLeft = document.documentElement.scrollLeft = centerLeft + ((Math.round((gamm - e.gamma)*roundPxChange)/roundPxChange) * speedMove);

 // document.body.scrollTop = document.documentElement.scrollTop = centerTop - ((e.beta - bett) * 20) ;
  //document.body.scrollLeft = document.documentElement.scrollLeft = centerLeft + ((gamm - e.gamma) * 20);

// $('html,body').animate({
//   scrollTop: centerTop - ((Math.round((e.beta - bett)*5)/5) * 20),
//   scrollLeft: centerLeft + ((Math.round((gamm - e.gamma)*5)/5) * 20)
// }, 1);

// $('html,body').animate({
//   scrollTop: centerTop - ((e.beta - bett) * 20),
//   scrollLeft: centerLeft + ((gamm - e.gamma) * 20)
// }, 2);

}



// if (eee % 2 == 0)  {
// $('html,body').animate({
//   scrollTop: centerTop - ((e.beta - bett) * 20),
//   scrollLeft: centerLeft + ((gamm - e.gamma) * 20)
// }, 1);

// // document.body.scrollTop = document.documentElement.scrollTop = centerTop - ((e.beta - bett) * 20) ;
// // document.body.scrollLeft = document.documentElement.scrollLeft = centerLeft + ((gamm - e.gamma) * 20);
// }

});

}

  });

})(jQuery, window, document);
