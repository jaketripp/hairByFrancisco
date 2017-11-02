$('#navbar').on('click', 'a', function(e) {
	e.preventDefault();
	var id = e.target.hash;
	$('a').removeClass('active');
	$('a[href="' + id + '"]').addClass('active');
	var locationY = $(id).offset().top - 45;
	$('html, body').animate({ scrollTop: locationY }, 500);
});