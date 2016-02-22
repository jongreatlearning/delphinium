$(document).ready(function() {
// /components/Vanilla.php:
//$this->page['aQuiz']=$qres;//store it for twig
	//var someQuiz = {{aQuiz|raw}};// error
});

function drawnow(aQuiz) {
	
	//var someQuiz = {{aQuiz|raw}};// error
	var someQuiz = aQuiz;
	var svg = d3.select("svg");

	var rect = svg.append("rect")
		.datum("some Quiz")
		.attr({
		  width: 800,
		  height: 300,
		  x: 26,
		  y: 10
		});

	var coords = svg.append("text")
		.text("x: 0, y:0")
		.attr({
		  x: 275,
		  y: 80
		})
		
	rect.on("mousemove", function(d) {
	  var mouse = d3.mouse(this);
	  coords.text("x:" + mouse[0] + " y:" + mouse[1]);
	});

	rect.on("mouseover", function(d) {
	  d3.select(this).attr("fill", "#ae2424");
	});
	rect.on("mouseout", function(d) {
	  d3.select(this).attr("fill", "#000000");
	});
	rect.on("click", function(d) {
	  alert(d);
	})
  }
