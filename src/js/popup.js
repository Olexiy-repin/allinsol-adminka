// POPUP
(() => {
    // $('participiats__cards-container').on('click', (event) => {
    //   // $('.#right-panel').css('display', 'none');
    //   if ($(event.target).hasClass('participiant__card')) {
    //     event.stopPropagation();
    //     $('#right-panel').css('display', 'block');
    //   }
    // });

    // $(window).on('click', () => {
    //   $('.more-block').removeClass("show");
    // })

    // $(window).on('click', () => {
    //   if($('.menu__popup').css('display', 'flex')) {
    //     $('.menu__popup').css('display', 'none');
    //   }
    // });

    // let popup = $('.menu__popup');
    // $('.menu-icon__more').on('click', () => {
    //   popup.css('display', 'flex');
    // });

    $('.participiant__card').on('click', () => {
      $('#right-panel').css('display', 'block');
      // $('participiant__card').removeClass('active-participiant');
      // $('participiant__card').addClass('active-participiant');
    });

    $('.right-panel__close').on('click', () => {
      $('#right-panel').css('display', 'none');
    });

    $('select').selectric({
      arrowButtonMarkup: '<b style="display: none" class="button"></b>'
    });
})();
