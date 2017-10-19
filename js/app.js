// checkPageYAndUpdateNav();

$('#navbar').on('click', 'a', function(e) {
	event.preventDefault();
	var id = e.target.attributes[0].textContent;
	$('a').removeClass('active');
	$('a[data-key="' + id + '"]').addClass('active');
	var locationY = $(id).offset().top - 50;
	$('html, body').animate({ scrollTop: locationY }, 500);
	// checkPageYAndUpdateNav();
});

// $(document).scroll(function(e){
// 	$('a').removeClass('active');
// });

// var top = 0;
// var services = $('#services').offset().top - 100;
// var photos = $('#photos').offset().top - 50;
// var contact = $('#contact').offset().top;

// var navChildren = $("#navbar").children();
// var aArray = [];
// for (var i = 0; i < navChildren.length; i++) {
// 	var aChild = navChildren[i];
// 	var ahref = $(aChild).attr('data-key');
// 	aArray.push(ahref);
// }
// $(window).scroll(function() {
// 	var windowPos = $(window).scrollTop();
// 	var windowHeight = $(window).height();
// 	var docHeight = $(document).height();
// 	console.log('window position', windowPos);
// 	console.log('window height', windowHeight);
// 	console.log('document height', docHeight);
// 	for (var i = 0; i < aArray.length; i++) {
// 		var theID = aArray[i];
// 		var divHeight = $(theID).parent().height() + 90;
// 		var secPosition = $(theID).offset().top + divHeight;
// 		console.log('=======================');
// 		console.log(theID);
// 		console.log('section position', secPosition);
// 		console.log('div height', divHeight);
// 		if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
// 			$("a[data-key='" + theID + "']").addClass("active");
// 		} else {
// 			$("a[data-key='" + theID + "']").removeClass("active");
// 		}
// 	}
// });

// function checkPageYAndUpdateNav(){

// var y = window.pageYOffset;

// console.log(y);

// $('a').removeClass('active');

// if (y >= contact) {
// 	$('a[data-key="#contact"]').addClass('active');
// } else if (y >= photos) {
// 	$('a[data-key="#photos"]').addClass('active');
// } else if (y >= services) {
// 	$('a[data-key="#services"]').addClass('active');
// } else {
// 	$('a[data-key="#top"]').addClass('active');
// } 

// }

// $(document).scroll(function() {

// 	console.log('top', top);
// 	console.log('services', services);
// 	console.log('photos', photos);
// 	console.log('contact', contact);

// 	// checkPageYAndUpdateNav();

// });