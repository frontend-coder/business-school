document.addEventListener('DOMContentLoaded', () => {
  $('#toggle').on('click', () => {
    $('.top-menu').toggleClass('active');
    $('.menu-top').toggleClass('menu-top-click');
    $('.menu-middle').toggleClass('menu-middle-click');
    $('.menu-bottom').toggleClass('menu-bottom-click');
  });
  // common js
  $('#tel').mask('+7(000)000-00-00', {
    selectOnFocus: true,
    placeholder: '+7(___)___-__-__',
    clearIfNotMatch: !0,
  });

  /* чтобы в формах был индивидуальный заголовок */
  $("a[href='#call-back']").click(function () {
    const dataForm = $(this).data('form');
    const dataYandex = $(this).data('yandex');
    const dataTitle = $(this).data('title');
    $('form.forms-call').attr('onsubmit', dataYandex);
    $('.form-callback [name=admin-data]').val(dataForm);
    $('.get__title').text(dataTitle);
  });

  const validateForms = function (selector, rules, messages) {
    // eslint-disable-next-line no-new
    new window.JustValidate(selector, {
      rules,
      messages,
      submitHandler(form) {
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const MassPopup = "<div class='success'><p>Спасибо за заявку</p></div>";
              // $('.contact-form').append(MassPopup);
              $('#contact-form__send').html(MassPopup);
            }
          }
        };
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        form.reset();
        setTimeout(() => {
          $('#contact-form__send').html();
          $.magnificPopup.close();
        }, 1000);
      },
    });
  };

  validateForms(
    '.forms-call',
    {
      famely: {
        required: true,
        minLength: 5,
        maxLength: 38,
      },
      tel: {
        required: true,
      },
      checkbox: {
        required: true,
      },
    },
    {
      famely: {
        required: 'Поле обязально к заполнению!',
        minLength: 'Введите не менее 5 символов',
        maxLength: 'Введите не более 38 символов',
      },
      tel: {
        required: 'Поле обязательно к заполнению',
      },
      theme: {
        required: 'Поле обязательно к заполнению',
        minLength: 'Введите не менее 10 символов',
        maxLength: 'Введите не более 100 символов',
      },
      mesage: {
        required: 'Поле обязательно к заполнению',
        minLength: 'Введите не менее 15 символов',
        maxLength: 'Введите не более 380 символов',
      },
      checkbox: {
        required: 'Поле обязателено к заполнению',
      },
    },
  );

  $('body').append('<div class="button-top active"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
  // console.log('kjkjkj');
  // Заставляет прятаться кнопку, если посетитель на хедере
  $(window).scroll(() => {
    // if ($(window).scrollTop() > 300) {
    //   $('.top-line').addClass('active');
    // } else {
    //   $('.top-line').removeClass('active');
    // }

    // begin code
    if ($(window).scrollTop() > $(window).height()) {
      $('.button-top').addClass('active');
    } else {
      $('.button-top').removeClass('active');
    }
  });
  $('body').on('click', '.button-top', () => {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });

  function scrollMenu() {
    const objToStick = $('.top-line'); // Получаем нужный объект
    if ($(window).scrollTop() > 150) {
      $(objToStick).addClass('active');
    } else {
      $(objToStick).removeClass('active');
    }

    if ($(window).scrollTop() > 700) {
      $(objToStick).addClass('visible');
    } else {
      $(objToStick).removeClass('visible');
    }
  }
  window.addEventListener('scroll', () => {
    scrollMenu();
  });

  // навигация
  $('.top-menu ul li a, .block-letme-batton a, .calling-me ul li a').mPageScroll2id({
    layout: 'auto',
    offset: '.top-line-box',
    scrollEasing: 'linear',
    highlightByNextTarget: true,
    keepHighlightUntilNext: true,
    autoScrollSpeed: true,
    scrollSpeed: 1000,
    highlightSelector: '.top-menu ul li a',
  });
  // конец навигации

  // начало формы

  // всплывающие окна обратной связи позвонить мне
  $("a[href='#call-back']").magnificPopup({
    mainClass: 'my-mfp-zoom-in',
    tClose: 'Закрыть (Esc)',
    removalDelay: 400,
    fixedContentPos: false,
    fixedBgPos: false,
    type: 'inline',
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const line = document.querySelector('.progress-line__item');

  const progressAnimation = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const siteHeight = document.documentElement.scrollHeight;
    const percentageProgress = Math.floor((scrollTop / (siteHeight - windowHeight)) * 100);
    line.style.width = `${percentageProgress}%`;
  };

  window.addEventListener('scroll', () => {
    progressAnimation();
  });
});
