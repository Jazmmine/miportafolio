/*particlesJS("particles-js", {"particles":{"number":{"value":400,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
*/
$(document).ready(function(){
	 cargarFondo(".geo","rgb(46,101,106)");
	 cargarFondo("#slide-portfile","rgb(37, 80, 84)");
	 cargarFondo("#slide-skills","rgb(32, 72, 76)");
	 cargarFondo("#slide-contact","rgb(21, 52, 56)");

	$('.button-collapse').sideNav({
		menuWidth: 300, // Default is 240
		edge: 'left', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
		}
	);
        	 
/*	if ($("#title-design").hasClass("title-design")) {
		$("#title-design").removeClass("title-design");		
	}else{
		$("#title-design").addClass("title-design");
	}
*/
	$("#logo").click(function(e){
		e.preventDefault();
		moverSlide1();
	});

	$(".btn-click-information").click(function(e){
		e.preventDefault();
	//	$("#main").slideUp();
		if ($("#js-info-left").hasClass("js-info-left")) {
			$("#js-info-left").removeClass("js-info-left");
			$("#js-info-left").addClass("js-info-left-click");		
		}

		if ($("#js-info-right").hasClass("js-info-right")) {
			$("#js-info-right").removeClass("js-info-right");
			$("#js-info-right").addClass("js-info-right-click");		
		}

	});

	$("#close").click(function(e){
		e.preventDefault();
		//$("#js-info-left").slideUp();
		$("#js-info-left").removeClass("js-info-left-click");
		$("#js-info-left").addClass("js-info-left");	
		//$("#js-info-right").slideUp();
		$("#js-info-right").removeClass("js-info-right-click");
		$("#js-info-right").addClass("js-info-right");	
		//$("#slide-home").show("slow");
	});

	/*navbar*/
	$(".cnt-new-design-life").click(function(e){
		e.preventDefault();
		moverSlide1();
	});

	$(".cnt-portfolio").click(function(e){
		e.preventDefault();
		moverSlide2();	
	});

	$(".cnt-skills").click(function(e){
		e.preventDefault();
		moverSlide3();
		loadSkills(); 			
	});

	$(".cnt-contact-me").click(function(e){
		e.preventDefault();
		moverSlide4();	
	});


/*btn-scroll-dow*/

    $("#first-scroll").click(function(){
        moverSlide2();
    });	 
	
    $("#second-scroll").click(function(){
        moverSlide3();
		loadSkills();
    });	 

    $("#thirt-scroll").click(function(){
       moverSlide4();
    });	 


	/*skills*/
	$("#cnt-skills").click(function(){
     	loadSkills();     	     		
	});

	initPage();
});

function initPage(){
	
	setTimeout(function() {
		//cuando carga, se oculta el icono de carga y el texto de loading
		$("#progressInit").hide();
		$("#progressInitTexto").hide();
	
		$(".loader-init").slideUp(1000);
		setTimeout(function() {
			animarParrafo();
			animarNombre();	
			animarScroll();
		}, 1000);
	}, 1000);
}

function loadSkills(){
		$("#html-circle").empty();
	    $("#html-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 85,
	        iconColor: '#3498DB',
	        text: 'HTML5',
	        iconSize: '50',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });

	    $("#css3-circle").empty();
	    $("#css3-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 78,
	        iconColor: '#3498DB',
	        text: 'SASS',
	        iconSize: '45',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });	

	    $("#js-circle").empty();
	    $("#js-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 50,
	        iconColor: '#3498DB',
	        text: 'Javascript',
	        iconSize: '50',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });	

	    $("#jq-circle").empty();
	    $("#jq-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 40,
	        iconColor: '#3498DB',
	        text: 'jQuery',
	        iconSize: '50',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });	

	    $("#subtext-circle").empty();
	    $("#subtext-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 50,
	        iconColor: '#3498DB',
	        text: 'Sublime Text3',
	        iconSize: '75',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });	

	    $("#git-circle").empty();
	    $("#git-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 40,
	        iconColor: '#3498DB',
	        text: 'GitHub',
	        iconSize: '65',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });	
	    $("#visual-circle").empty();
	    $("#visual-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 40,
	        iconColor: '#3498DB',
	        text: 'Visual Studio',
	        iconSize: '40',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });
	    $("#linux-circle").empty();
	    $("#linux-circle").circliful({
	        animation: 1,
	        animationStep: 6,
	        foregroundBorderWidth: 5,
	        backgroundBorderWidth: 1,
	        percent: 40,
	        iconColor: '#3498DB',
	        text: 'Linux',
	        iconSize: '40',
	        iconPosition: 'middle',
			textColor:'#ffffff'
	     });
}

function animarNombre(){
	var name = $("#title-name");
	if(name.is(":hidden")){
		name.slideDown(1000);
	}
}
function animarParrafo(){
	var parrafo = $("#title-description1"); 
		setTimeout(function() {
			if(parrafo.is(":hidden")){
				parrafo.fadeIn();
			}
		}, 1000);

}

function animarScroll(){
	var scroll = $("#content-scroll");
	setTimeout(function() {
		if(scroll.is(":hidden")){
			scroll.slideDown(1000);
		}
	}, 2000);

}

var numSlide = 1;
/**
 * 1= slide1
 * 2=slide2
 * 3=slide3
 * 4=slide4
 */

function moverSlide1(){ //home
	// $("#slide-portfile").show();
	if(numSlide>1){//bajan todos(se muestran todos)
		//se muestra el que esta encima de todos (home)
		$("#slide-home").slideDown(2000);
		$("#slide-portfile").slideDown(2000);	
		$("#slide-skills").slideDown(2000);	
		$("#slide-contact").slideDown(2000);
	}
	numSlide=1;
}
function moverSlide2(){//portafolio
	// $("#slide-portfile").show();
	if(numSlide>2){//bajan todos hasta porta

		$("#slide-portfile").slideDown(2000);	
		$("#slide-skills").slideDown(2000);	
		$("#slide-contact").slideDown(2000);
		
	}else{ //suben hasta antes de portafolio(2)
		// $("#slide-portfile").show();
		// $("#slide-skills").show();
		// $("#slide-contact").show();
		$("#slide-home").slideUp(2000);
	}
	numSlide=2;
}
function moverSlide3(){//skills
	// $("#slide-portfile").show();
	if(numSlide>3){//bajan todos hasta skills
			
		$("#slide-skills").slideDown(2000);	
		$("#slide-contact").slideDown(2000);
	}else{//suben hasta antes de skills(3)
		$("#slide-home").slideUp(2000);
		$("#slide-portfile").slideUp(2000);
	}
	numSlide=3;
}
function moverSlide4(){//contact
	// $("#slide-portfile").show();
	if(numSlide>4){//bajan todos hasta contact
		$("#slide-contact").slideDown(2000);
		numSlide=4;
	}else{//suben hasta antes de contact(4)
		$("#slide-home").slideUp(2000);
		$("#slide-portfile").slideUp(2000);
		$("#slide-skills").slideUp(2000);
		//$("#slide-contact").slideUp(2000);
	}
	numSlide=4;
}


function cargarFondo(elemento,colorrgb){
	$(elemento).Geometryangle({

	// handle transparent colors
	mesh:{

	  width: 1.2,
	  height: 1.2,

	  // How far should the mesh vary into z-space.
	  depth: 10,

	  // Number of columns for the mesh.
	  columns: undefined,

	  columns_auto: true,

	  // Number of rows for the mesh.
	  rows: undefined,

	  rows_auto: true,
	  zoom: 1,
	  xRange: 0.8,
	  yRange: 0.1,
	  zRange: 1.0,
	  ambient: 'rgb(0, 0, 0)',
	  diffuse: 'rgba(0, 0, 0, 0.1)',
	  background: colorrgb,
	  speed: 0.0002,
	  fluctuationSpeed: 0.5,
	  fluctuationIntensity: 0,
	  onRender: function () {
	  },
	  floorPosition: false,
	  draw: true

	}, 


	lights: {

	  // How many light sources belong to this light.
	  count: 1,

	  xyScalar: 1,

	  // Position of light source.
	  zOffset: 100,

	  ambient: 'rgba(255,255,255, 0.2)',
	  diffuse: 'rgba(255,255,255, 0.2)',
	  speed: 0.010,
	  gravity: 1200,

	  // Dampening of light's movements.
	  dampening: 0.95,

	  minLimit: 10,
	  maxLimit: null,
	  minDistance: 20,
	  maxDistance: 400,
	  autopilot: false,
	  draw: false, //show circle
	  bounds: FSS.Vector3.create(),
	  step: FSS.Vector3.create(
	    Math.randomInRange(0.9, 1.0),
	    Math.randomInRange(0.9, 1.0),
	    Math.randomInRange(0.9, 1.0)
	  )

	},

	// specify the thickness, color, stroke, etc. 
	line: {

	  fill: "rgba(255, 255, 255, 1)",
	  thickness: 1,
	  fluctuationIntensity: 0,
	  fluctuationSpeed: 0.5,
	  draw: false

	}, 

	// Set the point attributes for the vertex. 
	vertex: {

	  // Radius of vertice circle.
	  radius: 0,

	  fill: "rgba(255, 255, 255, 1)",

	  // Fluctuates opacity of vertex.
	  fluctuationSpeed: 0.5,

	  fluctuationIntensity: 0,
	  strokeWidth: 0,
	  strokeColor: "rgba(255, 255, 255, 1)",

	  // Instead of setting alpha channel to zero
	  // Set draw to false to avoid computing.
	  draw: false

	}

	});
}












