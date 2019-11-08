$(document).ready(function() {

	$('#toggle').click(function () {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
		$('body').toggleClass('stop');
		return false;
	});

	$('body, .overlay-menu ul li a').click(function () {
		$('#overlay').removeClass('open');
		$('#toggle').removeClass('active');
		$('body').removeClass('stop');
	});













//button up
$("body").append('<div class="button-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
//button up hide
$("body").on("click", ".button-top", function() {
	$("html, body").animate({scrollTop: 0}, "slow");
});
// //button up hide if customer on header
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
	$(".button-top").addClass("active");
} else
{  	$(".button-top").removeClass("active");
}
});

$(".top-menu ul li a, .overlay-menu ul li a, .block-letme-batton a, .calling-me ul li a").mPageScroll2id({
	 layout:"auto",
	 offset:".top-line",
	scrollEasing: "linear",
	highlightByNextTarget: true,
	keepHighlightUntilNext: true,
	 autoScrollSpeed: true,
	scrollSpeed : 1000,
	highlightSelector: ".top-menu ul li a"
});

// form in popup
$("a[href='#call-back']").magnificPopup ({
	mainClass:'my-mfp-zoom-in',
	removalDelay:400,
	type:'inline',
		fixedContentPos : false,
	fixedBgPos      : false,
		tLoading: 'Загрузка...',
	tClose: 'Закрыть (Esc)',

});
/* popup form optionдуальный заголовок */
$("a[href='#call-back']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".form-callback h4").text(dataText);
	$(".form-callback [name=admin-data]").val(dataForm);
});

//Аякс отправка форм Документация: http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-calldecor .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-calldecor .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 1000);
		});
		return false;
	});

});
