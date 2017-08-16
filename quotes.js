var quotes;
$.ajax({
	url: "https://talaikis.com/api/quotes/",
	jsonp: true,
	method: "GET",
	dataType: "json",
	success: function(res) {
		quotes = res;
	}
});

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
  //alert('sdcjn');
  return color;
}

$(document).ready(function() {
	function Quote() {
		var index = Math.floor(Math.random() * 100);
		var quoteA=quotes[index].quote;
		var Author = quotes[index].author;
		$("#text").text(quoteA);
		$("#author").text(Author);
		var color = getRandomColor();
		$(".quote-author, .quote-text").css("color", color);
		$("body").css("background-color", color);
		$("button").css("background-color", color);
		$("a").css("background-color", color);
		$('.left').attr('href', 'https://twitter.com/intent/tweet?text=' + '"' + quoteA + '"' + ' --' + Author);	
	}
	$(".right").on("click", function() {
		Quote();
	});
});
