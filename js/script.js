$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
		} else {
		$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function()
		{
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
		});
	$(document).on("click", "nav a", function(e) 
	{
		e.preventDefault();
		var id  = $(this).attr('href');
		var top = $(id).offset().top; // получаем координаты блока
		$('body, html').animate({scrollTop: top -100}, 800); // плавно переходим к блоку
	});

	  AOS.init();

});