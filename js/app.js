$('#navbar').on('click', 'a', function(e) {
	event.preventDefault();
	var id = e.target.attributes[0].textContent;
	$('a').removeClass('active');
	$('a[data-key="' + id + '"]').addClass('active');
	var locationY = $(id).offset().top - 45;
	$('html, body').animate({ scrollTop: locationY }, 500);
});