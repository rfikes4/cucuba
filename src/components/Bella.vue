<template>
	<section id="bella">
		<div class="info">
			<div class="bio-pic"></div>
			<div class="bio-grad"></div>
			<div class="bio-content">
				<div class="bio-bg">
					<div class="bio-bg-fade"></div>
					<div class="bio-bg-block"></div>
				</div>
				<div class="bio-title">
					<div class="bio-line"></div>
					<h1 class="bio-name">Isabella Sandoval</h1>
				</div>
				<div class="bio-text">
					<p>Hello! I’m Isabella Sandoval and I’m currently in my last semester in the MEIS Department at CU Denver. As a lover of live music I hope to start my own business within the concert industry to continue to uplift music cities such as our own in Denver, Colorado. I enjoy riding my bike and being surrounded by witty people.</p>
					<div class="text-break">
						<h2>Studying in Cuba</h2>
						<div class="text-break-bg"></div>
					</div>
					<p>Prior to visiting Havana, I had no idea what to expect from the Cuban music scene but after having the opportunity of attending music conference AM-PM I was able to see what goes on inside of their recording studios and learn directly from the people that spend their lives uplifting the Cuban music industry. Music is a huge part of their entire culture and that very obviously shines through with every step of their creation process in the studio.
					<br><br>Upon arrival, it didn’t take long to be greeted with big hugs from the very enthusiastic organizers of AM-PM, feeling welcomed would be an understatement.<br><br>Most of the conference was held in the famous Fabrica de Arte Cubano- once an abandoned oil factory that has since been transformed into a breath-taking contemporary cultural center for films, art exhibitions, nightlife and live shows.<br><br>With workshops on how to properly utilize artist’s Youtube channels it is obvious that they are at a different technological stage in the industry than we are. However, what they may lack in resources is made up by with their passion for music, as it continues to inspire them to build up their ever-growing success of Cuban musicians.<br><br>As music professionals in a developing country, these people face completely different obstacles than our Denver talent. However, it is very obvious that their strong drive and love of music doesn’t let their limited resources discourage their art.</p>
				</div>
			</div>
		</div>
		<div class="slider">
			<div class="carousel">
				<div class="carousel-cell">
					<img class="s-img" src="../assets/images/bella/s1-1.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="carousel-cell">
					<img class="s-img" src="../assets/images/bella/s1-2.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="carousel-cell">
					<img class="s-img" src="../assets/images/bella/s1-3.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="carousel-cell">
					<img class="s-img" src="../assets/images/bella/s1-4.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="carousel-cell">
					<img class="s-img" src="../assets/images/bella/s1-5.jpg" />
					<div class="s-grad"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Flickity from 'flickity'
	export default {
		data() {
			return {
				flkty: null,
				isCell: null,
				cell: null
			}
		},
		mounted() {
			console.log('bella');
			// Flickity
			//var carousel = document.querySelector('.carousel');
			var carousel = document.getElementsByClassName('carousel')[0];
			var flkty = new Flickity( carousel, {
				initialIndex: this.index,
			  	imagesLoaded: true,
			  	percentPosition: false,
			  	wrapAround: true,
			  	prevNextButtons: false,
			  	pageDots: false,
			  	selectedAttraction: 0.018,
				friction: 0.19,
				accessibility: false,
				//watchCSS: true
			});

			// Flickity scroll
			// var imgs = carousel.querySelectorAll('.carousel-cell .slide .s-img');
			//var imgsT = carousel.querySelectorAll('.carousel-cell .slide-title .s-img-t');
			// var docStyle = document.documentElement.style;
			// var transformProp = typeof docStyle.transform == 'string' ?
			  	// 'transform' : 'WebkitTransform';

			// flkty.on( 'scroll', function(progress) {
			  // 	flkty.slides.forEach( function( slide, i ) {
			  //   	var img = imgs[i];
			  //   	//var imgT = imgsT[i];
			  //   	var x = ( slide.target + flkty.x ) * -1/3;
			  //   	img.style[ transformProp ] = 'translateX(' + x  + 'px)';
			  //   	//imgT.style[ transformProp ] = 'translateX(' + x  + 'px)';
			  // 	});
			  // 	if (flkty.selectedIndex == 1 ) {
			  // 		window.setTimeout(() => {
					// 	flkty.select( 16, false, true );
					// 	flkty.selectedElement.classList.add('force-selected');
					// 	window.setTimeout(() => {
					// 		flkty.selectedElement.classList.remove('force-selected');
					// 	},1000);		
					// }, 1000);
			  		
			  // 	} else if (flkty.selectedIndex == 17 ) {
			  // 		window.setTimeout(() => {
					// 	flkty.select( 2, false, true );
					// 	flkty.selectedElement.classList.add('force-selected');
					// 	window.setTimeout(() => {
					// 		flkty.selectedElement.classList.remove('force-selected');
					// 	},1000);
					// }, 1000);
			  // 	}
			// }.bind(this));
			// For Chrome
			// window.addEventListener('mousewheel', this.mouseWheelEvent);
			// // For Firefox
			// window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);
			// window. setInterval(() => {
			// 	this.scrollTime = 0;
			// }, 1000);

			// Flickity click
			// flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
			// 	this.click(event, pointer, cellElement, cellIndex);
			// }.bind(this));

			// Flickity drag
			// flkty.on( 'dragStart', function( event, pointer ) {
			// 	this.dragging();
			// }.bind(this));
			// flkty.on( 'dragEnd', function( event, pointer ) {
			// 	this.dragged();
			// }.bind(this));
			

			// this.flkty = flkty;
			// this.isCell = document.getElementsByClassName('is-selected')[0];
			// this.cell = document.getElementsByClassName('carousel-cell');

		},
		methods: {

		}
	}
</script>