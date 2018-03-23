// POPUP
(() => {
    $('.participiant__card').on('click', () => {
      $('#right-panel').css('display', 'block');
    });

    $('.right-panel__close').on('click', () => {
      $('#right-panel').css('display', 'none');
    });


// menu open
    $('.bootcamp-name').on('click', (event) => {
      let bootName = document.querySelector('.selectric .label').textContent;

      document.querySelector('.del-boot__title').textContent = 'Удалить ' + bootName + ' ?';
      if($('.menu__popup').hasClass('show')) {
        $('.menu__popup').removeClass('show');
      } else {
        if ($(event.target).hasClass('menu-icon__svg-more')) {
          event.stopPropagation();
          $(event.currentTarget).find('.menu__popup').addClass('show');
        }
      }
    });

    $(window).on('click', () => {
      if($('.menu__popup').hasClass('show')) {
        $('.menu__popup').removeClass('show');
      }
    });

// select open
    $('select').selectric({
      arrowButtonMarkup: '<b style="display: none" class="button"></b>'
    });
})();
