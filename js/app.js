/*particlesJS("particles-js", {"particles":{"number":{"value":400,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
*/
$(document).ready(function(){

	$(".js-load-container").Geometryangle({

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
	  ambient: 'rgba(59, 59, 59, 1)',
	  diffuse: 'rgba(255, 255, 255, 1)',
	  background: 'rgb(59, 59, 59)',
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

	  ambient: 'rgba(255,0,102, 1)',
	  diffuse: 'rgba(255,136,0, 1)',
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
	    Math.randomInRange(0.2, 1.0),
	    Math.randomInRange(0.2, 1.0),
	    Math.randomInRange(0.2, 1.0)
	  )

	},

	// specify the thickness, color, stroke, etc. 
	line: {

	  fill: "rgba(0, 0, 0, 0)",
	  thickness: 1,
	  fluctuationIntensity: 0,
	  fluctuationSpeed: 0.5,
	  draw: false

	}, 

	// Set the point attributes for the vertex. 
	vertex: {

	  // Radius of vertice circle.
	  radius: 0,

	  fill: "rgba(0, 0, 0, 0)",

	  // Fluctuates opacity of vertex.
	  fluctuationSpeed: 0.5,

	  fluctuationIntensity: 0,
	  strokeWidth: 0,
	  strokeColor: "rgba(0, 0, 0, 0)",

	  // Instead of setting alpha channel to zero
	  // Set draw to false to avoid computing.
	  draw: false

	}

	});

	$("#information").click(function(e){
		e.preventDefault();
		$("#ctn").slideUp();
		$("#infos").show("slow");
	});

	$("#close").click(function(e){
		e.preventDefault();
		$("#infos").slideUp();
		$("#ctn").show("slow");
	});

	/*navbar*/
	$("#cnt-new-design-life").click(function(e){
		e.preventDefault();
		$("#particles-js").slideUp();	
		$("#portfiles").slideUp();
		$("#contact-me").slideUp();			
		$("#ctn").show("slow");	
	});

	$("#cnt-portfolio").click(function(e){
		e.preventDefault();
		$("#ctn").slideUp();
		$("#particles-js").slideUp();
		$("#contact-me").slideUp();	
		$("#portfiles").show("slow");	
	});

	$("#cnt-skills").click(function(e){
		e.preventDefault();
		$("#ctn").slideUp();
		$("#portfiles").slideUp();
		$("#contact-me").slideUp();	
		$("#particles-js").show("slow");			
	});

	$("#cnt-contact-me").click(function(e){
		e.preventDefault();
		$("#ctn").slideUp();	
		$("#portfiles").slideUp();	
		$("#particles-js").slideUp();	
		$("#contact-me").show("slow");		
	});

	/*"scroll"*/
	$("#scroll-drow-a").click(function(e){
		e.preventDefault();
		$("#ctn").slideUp();
		$("#particles-js").slideUp();
		$("#contact-me").slideUp();	
		$("#portfiles").show("slow");
	});

	$("#scroll-drow-b").click(function(e){
		e.preventDefault();
		$("#ctn").slideUp();
		$("#portfiles").slideUp();
		$("#contact-me").slideUp();	
		$("#particles-js").show("slow");	
	});

	$("#scroll-drow-c").click(function(e){
		e.preventDefault();
		$("#ctn").slideUp();	
		$("#portfiles").slideUp();	
		$("#particles-js").slideUp();	
		$("#contact-me").show("slow");
	});

	/*btn footer*/
	$("#btn-linkendin").click(function mostrarLinken(){
		var cuadroMensaje = $("#mensaje-linkendin");
			cuadroMensaje.removeClass("ocultar");
			cuadroMensaje.addClass("mostrar");
	});

/*	$("#btn-linkendin").focusout(function ocultarLinken(){
		var cuadroMensaje = $("#mensaje-linkendin");
			cuadroMensaje.removeClass("mostrar");
			cuadroMensaje.addClass("ocultar");
	});*/

	$("#btn-git").click(function mostrarGit(){
		var cuadroMensaje = $("#mensaje-git");
			cuadroMensaje.removeClass("ocultar");
			cuadroMensaje.addClass("mostrar");
	});
	$("#btn-gmail").click(function mostrarGmail(){
		var cuadroMensaje = $("#mensaje-gmail");
			cuadroMensaje.removeClass("ocultar");
			cuadroMensaje.addClass("mostrar");
	});
		$("#btn-phone").click(function mostrarPhone(){
		var cuadroMensaje = $("#mensaje-phone");
			cuadroMensaje.removeClass("ocultar");
			cuadroMensaje.addClass("mostrar");
	});

});
