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

// SKROLLR

var s = skrollr.init();

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


var map;
var chart;
var chart2;
var chart3;
var legend;

var chartData = [{
	country: "Czech Republic",
	litres: 301.90
}, {
	country: "Ireland",
	litres: 201.10
}, {
	country: "Germany",
	litres: 165.80
}, {
	country: "Australia",
	litres: 139.90
}, {
	country: "Austria",
	litres: 128.30

}];

var chartData2 = [{
	column1: 1.009,
	date: "2014-03-01 07:57:57"
}, {
	column1: 1.010,
	date: "2014-03-01 07:57:58"
}, {
	column1: 1.013,
	date: "2014-03-01 07:57:59"
}, {
	column1: 1.008,
	date: "2014-03-01 07:58:00"
}, {
	column1: 1.004,
	date: "2014-03-01 07:58:01"

}];
var chartData3 = [{
	column1: 1.010,
	date: "2014-03-01 07:57:57"
}, {
	column1: 1.008,
	date: "2014-03-01 07:57:58"
}, {
	column1: 1.012,
	date: "2014-03-01 07:57:59"
}, {
	column1: 1.001,
	date: "2014-03-01 07:58:00"
}, {
	column1: 1.006,
	date: "2014-03-01 07:58:01"

}];

AmCharts.ready(function() {
	var map;
	var chart;
	var chart2;
	var chart3;
	var legend;

	// SerialCHART
	chart2 = new AmCharts.AmSerialChart();
	chart2.type = "serial";
	chart2.categoryField = "date";
	chart2.dataDateFormat = "YYYY-MM-DD HH:NN:SS";
	chart2.pathToImages = "/assets/bower/amcharts3/amcharts/images/";
	chart2.depth3D = 9;
	chart2.fontFamily = "Raleway";
	chart2.dataProvider = chartData2;
	chart2.creditsPosition = "bottom-right";
	chart2.percentPrecision = 5;

	chart2.categoryAxis = {
		"minPeriod": "ss",
		"parseDates": true
	};

	chart2.chartCursor = {
		"enabled": true,
		"categoryBalloonDateFormat": "JJ:NN:SS"
	};

	chart2.chartScrollbar = {
		"enabled": true
	};
	chart2.trendLines = [];
	chart2.guide = [];

	chart2.valueAxes = [{
		"id": "ValueAxis-1",
		"title": "DOLLAR (USD)"
	}];

	chart2.graphs = [
	{
		"bullet": "round",

		"id": "AmGraph-1",
		"title": "EUR",
		"valueField": "column1"
	}
	];
	chart2.allLabels = [];
	chart2.balloon = {};
	chart2.legend = {
		"enabled": true,
		"useGraphSettings": true
	};
	chart2.titles = [{
		"id": "Title-1",
		"size": 15,
		"text": "DOLLAR PRICE FOR 1 EURO"
	}];

	// SerialCHART
	chart3 = new AmCharts.AmSerialChart();
	chart3.type = "serial";
	chart3.categoryField = "date";
	chart3.dataDateFormat = "YYYY-MM-DD HH:NN:SS";
	chart3.pathToImages = "/assets/bower/amcharts3/amcharts/images/";
	chart3.depth3D = 9;
	chart3.fontFamily = "Raleway";
	chart3.dataProvider = chartData3;
	chart3.creditsPosition = "bottom-right";
	chart3.percentPrecision = 5;

	chart3.categoryAxis = {
		"minPeriod": "ss",
		"parseDates": true
	};

	chart3.chartCursor = {
		"enabled": true,
		"categoryBalloonDateFormat": "JJ:NN:SS"
	};

	chart3.chartScrollbar = {
		"enabled": true
	};
	chart3.trendLines = [];
	chart3.guide = [];

	chart3.valueAxes = [{
		"id": "ValueAxis-1",
		"title": "EURO (EUR)"
	}];

	chart3.graphs = [
	{
		"bullet": "round",

		"id": "AmGraph-1",
		"title": "USD",
		"valueField": "column1"
	}
	];
	chart3.allLabels = [];
	chart3.balloon = {};
	chart3.legend = {
		"enabled": true,
		"useGraphSettings": true
	};
	chart3.titles = [{
		"id": "Title-1",
		"size": 15,
		"text": "EURO PRICE FOR 1 DOLLAR"
	}];






	// PIE CHART
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = chartData;
	chart.creditsPosition = "bottom-right";
	chart.color = "#fff";
	chart.titleField = "country";
	chart.valueField = "litres";
	chart.outlineColor = "#FFFFFF";
	chart.outlineAlpha = 0.8;
	chart.outlineThickness = 2;
	chart.color = '#000';
	chart.balloonText = "[[value]]";
	chart.fontFamily ="Raleway";
	chart.fontSize = 18;
	chart.type = "pie";
	chart.innerRadius = "20%";
	chart.colors = ["#49453D", "#514F48", "#86847D", "#A7A397", "#CDC4B8"];

	chart.balloon = {

		color: "#D86847",
		fillColor: "#FFFFFF",
		drop: true,
		textAlign: 'middle',
		shadowColor: '#000',
		fontSize: 18,
		shadowAlpha: 0.9


	};

	chart.export = {
		enabled: true
	};

	chart.responsive = {
		enabled: true
	};
	chart2.responsive = {
		enabled: true
	};
	chart3.responsive = {
		enabled: true
	};
    // LEGEND
    legend = new AmCharts.AmLegend();
    legend.align = "center";
    legend.markerType = "circle";
    chart.addLegend(legend);


	// MAP
	map = new AmCharts.AmMap();
	map.dragMap = true;
	map.color = "#fff";
	map.creditsPosition = "top-right";
	map.fontFamily ="Raleway";
	map.language = "de";
	map.zoomOnDoubleClick = true;
	map.showBalloonOnSelectedObject = false,
	map.showDescriptionOnHover = false,







	map.areasSettings = {

		balloonText : "[[title]]<br><span style='font-size:14px'><b>[[description]]</b></span>",
		autoZoom: true,
		rollOverOutlineColor: "#FFFFFF",
		selectedColor: "#D86847",
		rollOverColor: "#968578",
		outlineAlpha: 0,
		outlineColor: "#3C3C45",
		outlineThickness: 0,
		color: "#FFCC00",
		bringForwardOnHover:true

	};
	map.balloon = {

		color: "#D86847",
		fillColor: "#FFFFFF",
		drop: true,
		textAlign: 'middle',
		shadowColor: '#000',
		fontSize: 18,
		shadowAlpha: 0.9,
		disableMouseEvents: true

	};




	map.dataProvider = {
		mapVar: AmCharts.maps.continentsHigh,

		areas: [{
			"id": "africa",
			"title": "Africa",
			"description": "<a href='http://comwrap.com'>U.S Dollar (USD)</a>",
			"url": "http://comwrap.com",
			"pattern": {
				"url": "/assets/images/ammap/pattern.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "asia",
			"title": "Asia",
			"description": "USD <a href='http://comwrap.com'>http://comwrap.com</a>",
			"pattern": {
				"url": "/assets/images/ammap/pattern.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "australia",
			"title": "Australia",
			"description": "USD <a href='http://comwrap.com'>http://comwrap.com</a>",
			"pattern": {
				"url": "/assets/images/ammap/pattern.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "europe",
			"title": "Europe",
			"description": "USD <a href='http://comwrap.com'>http://comwrap.com</a>",
			"pattern": {
				"url": "/assets/images/ammap/pattern.png",
				width: 4,
				height: 4
			}
		}, {

			"id": "north_america",
			"title": "North America",
			"description": "USD <a href='http://comwrap.com'>http://comwrap.com</a>",
			// "url": "http://comwrap.com",
			"pattern": {
				"url": "/assets/images/ammap/pattern.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "south_america",
			"title": "South America",
			"description": "USD <a href='http://comwrap.com'>http://comwrap.com</a>",
			"pattern": {
				"url": "/assets/images/ammap/pattern.png",
				width: 4,
				height: 4
			}
		}],
	};

	map.responsive = {
		enabled: true
	};


	// let's say we want a small map to be displayed, so let's create it
	map.smallMap = new AmCharts.SmallMap();

	var zoomControl = map.zoomControl;
	zoomControl.panControlEnabled = true;
	zoomControl.zoomControlEnabled = true;

	// WRITE
	chart.write("chartdiv");
	chart2.write("chartdiv2");
	chart3.write("chartdiv3");
	map.write("mapdiv");

});

