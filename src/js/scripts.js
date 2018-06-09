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
    
  var galleryitem = $('.gallery__item');
  var margingalleryTop = 60;
  var margingalleryLeft = 40;
  var animationTime = 2000;

  if(galleryitem.length) {
    $('html,body').animate({
      scrollTop: galleryitem.offset().top - margingalleryTop,
      scrollLeft: galleryitem.offset().left - margingalleryLeft
  }, animationTime);
}

  galleryitem.each(function( index ) {


    
    $( this ).on("click", function () {
      
    if(index !== galleryitem.length - 1 && index + 1 < galleryitem.length) {

      $('html,body').animate({
        scrollTop: galleryitem.eq(index + 1).offset().top - margingalleryTop,
        scrollLeft: galleryitem.eq(index + 1).offset().left - margingalleryLeft
      }, animationTime);
    }
    else if (index + 1 == galleryitem.length) {
      
      $('html,body').animate({
        scrollTop: galleryitem.eq(0).offset().top - margingalleryTop,
        scrollLeft: galleryitem.eq(0).offset().left - margingalleryLeft
      }, animationTime);
    }
    });
  });
}

  });

})(jQuery, window, document);
