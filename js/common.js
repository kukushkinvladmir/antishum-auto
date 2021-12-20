$(function() {  

  //$('.ta_left').animated('bounceInLeft', 'bounceOutLeft');
  //$('.ta_right').animated('bounceInRight', 'bounceOutRight');
  //$('.product-item-wrap h3').animated('bounceInLeft', 'bounceOutLeft');
  //$('.contact_box_wrap').animated('bounceInLeft', 'bounceOutLeft');
  //$('.form_wrap').animated('bounceInRight', 'bounceOutRight');
  //$('.s-why-item img').animated('flipInY', 'flipOutY');
  //$('.popup-gallery img').animated('zoomIn', 'zoomOut');
	
	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".main-mnu").slideToggle();
	  return false;
	});

  $(".auto_callback, .button_price, .s-product a").magnificPopup({
    type: 'inline',    
    mainClass: 'mfp-with-zoom', 
    removalDelay: 300,
  });

  $("a[href='#callback']").click(function() { 
    var dataForm = $(this).data('form');
    var dataText = $(this).data('text');
    $('.hid_form h3').text(dataText);
    $('.hid_form [name = Заголовок]').val(dataForm);
  });

  $('.button_price').click(function() {
    var dataForm = $(this).data('form');
    var dataText = $(this).data('text');
    $('.hid_form h3').text(dataText);
    $('.hid_form [name = Заголовок]').val(dataForm);
  });

  $('a[href="#popup_feedback"]').click(function() {
    var dataForm = $(this).data('form');
    var dataText = $(this).data('text');
    $('.hid_form h3').text(dataText);
    $('.hid_form [name = Заголовок]').val(dataForm);
  });


  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile mfp-no-margins mfp-with-zoom',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    zoom: {
      enabled: true,
      duration: 200 // don't foget to change the duration also in CSS
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });

  /*$(".s-adv").waypoint(function() {
    
  $({blurRadius: 5}).animate({blurRadius: 0}, {
    duration: 1200,
    easing: 'swing',
    step: function() {
      $(".s-adv-item h3 span").css({
        "-webkit-filter": "blur("+this.blurRadius+"px)",
        "filter": "blur("+this.blurRadius+"px)"
      });
    }
  });
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
  $(".s-adv-item h3 span").each(function() {
    var tcount = $(this).data("count");
    $(this).animateNumber({ number: tcount,
      easing: 'easeInQuad',
      "font-size": "1.8125em",
      numberStep: comma_separator_number_step},
      1200);
    });
    
  }, {
    offset: '70%'
  }); */

   $("#callback").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php",
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active');
      setTimeout(function() { 
      $(th).find('.success').removeClass('active');    
      th.trigger("reset");
      $.magnificPopup.close();   
      }, 2000);
      });
      return false;
    });

   $("#popup_feedback").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", 
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active');
      setTimeout(function() { 
      $(th).find('.success').removeClass('active');    
      th.trigger("reset");
      $.magnificPopup.close();   
      }, 2000); 
      });
      return false;
    });

   $("#cont_form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", 
      data: th.serialize()
    }).done(function() {
      $(th).find('.cont_success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() { 
      $(th).find('.cont_success').removeClass('active').fadeOut();    
      th.trigger("reset");
      $.magnificPopup.close();   
      }, 3000); 
      });
      return false;
    });



  
});
