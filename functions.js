

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var currentDate = new Date();
var pastDate = new Date(date); // Assuming 'date' is a valid date string or Date object

// Calculate the difference in milliseconds
var differenceInMilliseconds = currentDate - pastDate;

// Convert milliseconds to days, hours, minutes, and seconds
var days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
var hours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

// Format the time difference with leading zeros
hours = hours < 10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
	var result =  "<span style='font-size:60px'>"+days+"</span>" + "Days <span class=\"digit\">" + hours + "</span> Hours <span class=\"digit\">" + minutes + "</span> Minutes <span class=\"digit\">"; 
	$("#clock").html(result);

	var text = "THE world got luckier since : ";
	$("#message-box").html(text);

}
