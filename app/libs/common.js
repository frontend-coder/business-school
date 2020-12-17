document.addEventListener('DOMContentLoaded', () => {
  // common js
  $('#tel').mask('+7(000)000-00-00', {
    selectOnFocus: true,
    placeholder: '+7(___)___-__-__',
    clearIfNotMatch: !0,
  });

  // <a href="#call-back" data-form="с кнопки в фиксированном топ лайне" data-text="Получить доступ к урокам">
  //   получить доступ data-yandex
  // </a>;

  /* чтобы в формах был индивидуальный заголовок */
  $("a[href='#call-back']").click(function () {
    const dataForm = $(this).data('form');
    const dataYandex = $(this).data('yandex');
    const dataTitle = $(this).data('title');
    console.log(dataTitle);
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
              console.log('Отправлено');
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
    }
  );

  $('body').append('<div class="button-top active"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
  // console.log('kjkjkj');
  // Заставляет прятаться кнопку, если посетитель на хедере
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $('.button-top').addClass('active');
    } else {
      $('.button-top').removeClass('active');
    }
  });
  $('body').on('click', '.button-top', () => {
    $('html, body').animate({ scrollTop: 0 }, 1000);
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

// document.addEventListener('DOMContentLoaded', () => {
//   function myFunction() {
//     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrolled = (winScroll / height) * 100;
//     //  console.info(scrolled);
//     document.getElementById('myBar').style.width = `${scrolled}%`;
//   }
//   window.onscroll = () => {
//     myFunction();
//   };
// });

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
