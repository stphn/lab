// global selector declarations

var elementExists = document.getElementById("slideshow");
var borderSwitch  = document.getElementById("borderSwitch");
var body          = document.body;

var circles       = document.getElementsByClassName("diagram__circle");
var cheap  = document.getElementById("cheap");
var fast  = document.getElementById("fast");
var good  = document.getElementById("good");

var crappy = document.getElementById("crappy");
var slow = document.getElementById("slow");
var expensive = document.getElementById("expensive");
var moreasthree = document.getElementById("moreasthree");


// Tilt Slider
if( elementExists ) new TiltSlider( elementExists );

// Border Switch
if( borderSwitch ) {
	borderSwitch.onclick = function() {
		body.classList.toggle("borders--active");
		this.classList.toggle("borders--active");
	}
}

// Diagram
// if( circles ) {
// 	for (var i = circles.length - 1; i >= 0; i--) {
// 		circles[i].onclick = function() {
// 			var circlesactive  = document.getElementsByClassName("diagram__circle--active");
// 			if (circlesactive.length >= 2) {
// 				// alert(1)
// 				for (var i = circlesactive.length - 1; i >= 0; i--) {
// 					circlesactive[i].classList.remove("diagram__circle--active");
// 				}
// 			}
// 			this.classList.add("diagram__circle--active");
// 			if (cheap.classList.contains('diagram__circle--active') && fast.classList.contains('diagram__circle--active') ) {
// 				crappy.classList.add("diagram__text--between--active");
// 			} else {
// 				crappy.classList.remove("diagram__text--between--active");
// 			};
// 			if (fast.classList.contains('diagram__circle--active') && good.classList.contains('diagram__circle--active') ) {
// 				expensive.classList.add("diagram__text--between--active");
// 			} else {
// 				expensive.classList.remove("diagram__text--between--active");
// 			};
// 			if (good.classList.contains('diagram__circle--active') && cheap.classList.contains('diagram__circle--active') ) {
// 				slow.classList.add("diagram__text--between--active");
// 			} else {
// 				slow.classList.remove("diagram__text--between--active");
// 			};
// 		}
// 	};
// }

// Diagram
if( circles ) {
	for (var i = circles.length - 1; i >= 0; i--) {
		circles[i].onclick = function() {


			this.classList.toggle("diagram__circle--active");

			if (cheap.classList.contains('diagram__circle--active') && fast.classList.contains('diagram__circle--active') ) {
				crappy.classList.add("diagram__text--between--active");
			}
			else {
				crappy.classList.remove("diagram__text--between--active");

			}
			if (fast.classList.contains('diagram__circle--active') && good.classList.contains('diagram__circle--active') ) {
				expensive.classList.add("diagram__text--between--active");
			}
			else {
				expensive.classList.remove("diagram__text--between--active");
			}
			if (good.classList.contains('diagram__circle--active') && cheap.classList.contains('diagram__circle--active') ) {
				slow.classList.add("diagram__text--between--active");
			}
			else {
				slow.classList.remove("diagram__text--between--active");
			};
			if (good.classList.contains('diagram__circle--active') && cheap.classList.contains('diagram__circle--active') && fast.classList.contains('diagram__circle--active') ) {
				moreasthree.classList.add("diagram__text--between--active");
				slow.classList.remove("diagram__text--between--active");
				expensive.classList.remove("diagram__text--between--active");
				crappy.classList.remove("diagram__text--between--active");
			}
			else {

				moreasthree.classList.remove("diagram__text--between--active");

			};

		}
	};
}

