<template>
	<section id="projects"  @mousemove="over" @mouseleave="leave">

		<div class="carousel" @click="clear">
			<div class="carousel-cell">
				<div class="slide-title">
					<!-- <img src="../images/s4-main.jpg" class="s-img-t s4"> -->
					<h1>Decadence</h1>
					<h2>Visual Package</h2>
				</div>
				<div class="slide">
					<img class="s-img s4" src="../assets/images/s4-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#VJ Loops</p>
					<p>#Animation</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Threshold</h1>
					<h2>Cross-Platform Gaming</h2>
				</div>
				<div class="slide">
					<img class="s-img s5" src="../assets/images/s5-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Virtual Reality</p>
					<p>#Mobile</p>
				</div>
			</div>

			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Urban Lights</h1>
					<h2>Interactive Street Art</h2>
				</div>
			    <div class="slide">
					<img class="s-img s1" src="../assets/images/s1-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Helmet of Seizure</h1>
					<h2>Reactive Visuals</h2>
				</div>
				<div class="slide">
					<img class="s-img s2" src="../assets/images/s2-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Explosion</h1>
					<h2>Interactive Poster</h2>
				</div>
				<div class="slide">
					<img class="s-img s3" src="../assets/images/s3-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#MIDI</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Decadence</h1>
					<h2>Visual Package</h2>
				</div>
				<div class="slide">
					<img class="s-img s4" src="../assets/images/s4-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#VJ Loops</p>
					<p>#Animation</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Threshold</h1>
					<h2>Cross-Platform Gaming</h2>
				</div>
				<div class="slide">
					<img class="s-img s5" src="../assets/images/s5-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Virtual Reality</p>
					<p>#Mobile</p>
				</div>
			</div>

			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Urban Lights</h1>
					<h2>Interactive Street Art</h2>
				</div>
			    <div class="slide">
					<img class="s-img s1" src="../assets/images/s1-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Helmet of Seizure</h1>
					<h2>Reactive Visuals</h2>
				</div>
				<div class="slide">
					<img class="s-img s2" src="../assets/images/s2-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Explosion</h1>
					<h2>Interactive Poster</h2>
				</div>
				<div class="slide">
					<img class="s-img s3" src="../assets/images/s3-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#MIDI</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Decadence</h1>
					<h2>Visual Package</h2>
				</div>
				<div class="slide">
					<img class="s-img s4" src="../assets/images/s4-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#VJ Loops</p>
					<p>#Animation</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Threshold</h1>
					<h2>Cross-Platform Gaming</h2>
				</div>
				<div class="slide">
					<img class="s-img s5" src="../assets/images/s5-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Virtual Reality</p>
					<p>#Mobile</p>
				</div>
			</div>

			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Urban Lights</h1>
					<h2>Interactive Street Art</h2>
				</div>
			    <div class="slide">
					<img class="s-img s1" src="../assets/images/s1-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Helmet of Seizure</h1>
					<h2>Reactive Visuals</h2>
				</div>
				<div class="slide">
					<img class="s-img s2" src="../assets/images/s2-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Explosion</h1>
					<h2>Interactive Poster</h2>
				</div>
				<div class="slide">
					<img class="s-img s3" src="../assets/images/s3-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#MIDI</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Decadence</h1>
					<h2>Visual Package</h2>
				</div>
				<div class="slide">
					<img class="s-img s4" src="../assets/images/s4-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#VJ Loops</p>
					<p>#Animation</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Threshold</h1>
					<h2>Cross-Platform Gaming</h2>
				</div>
				<div class="slide">
					<img class="s-img s5" src="../assets/images/s5-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Virtual Reality</p>
					<p>#Mobile</p>
				</div>
			</div>

			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Urban Lights</h1>
					<h2>Interactive Street Art</h2>
				</div>
			    <div class="slide">
					<img class="s-img s1" src="../assets/images/s1-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>
			<div @click="sub" class="carousel-cell">
				<div class="slide-title">
					<h1>Helmet of Seizure</h1>
					<h2>Reactive Visuals</h2>
				</div>
				<div class="slide">
					<img class="s-img s2" src="../assets/images/s2-main.jpg" />
				</div>
				<div class="hashtags">
					<p>#Projection Mapping</p>
					<p>#Web Application</p>
				</div>
			</div>

		</div>

		<div class="scroller" ref="scroller">
			<div class="scl" ref="scl"></div>
			<div class="scroll-page" ref="nums">
				<p>0</p>
				<ul class="scroll-num" ref="num">
					<li>5</li>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>1</li>
				</ul>
			</div>
			<div class="scr" ref="scr"></div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['indexX'],
		data() {
			return {
				scroll: 0,
				scrollTime: 0,
				flkty: null,
				isCell: null,
				cell: null,
				h1text: null,
				h1txt: null,
				h2text: null,
				h2txt: null,
				scroller: null,
				scl: null,
				scr: null,
				nums: null,
				num: null,
				y: -19,
				index: 7,
				mouseX: 0,
				mouseY: 0,
				cx: window.innerWidth / 2,
				cy: window.innerHeight / 2,
				dx: null,
				dy: null,
				tiltx: null,
				tilty: null,
				degree: null,
				radius: null
			}
		},
		watch: {
			scroll() {
				this.isCell.onmouseenter=function() {};
				if ( this.scroll == -1 && this.scrollTime == 0 ) {
					this.flkty.next();
				} else if ( this.scroll == 1 && this.scrollTime == 0 ) {
					this.flkty.previous();
				}
				this.scroll = 0;
				this.scrollTime = 1;

				this.isCell = document.getElementsByClassName('is-selected')[0];

				this.isCell.onmouseenter=function() {
			        this.isEnter();
			    }.bind(this);
			},
			isCell() {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					// h1 txt
					this.h1text = this.isCell.getElementsByTagName('h1')[0];
					var h1 = this.h1text.textContent;
					h1 = h1.split('');
					this.h1text.innerHTML = "<span>" + h1.join("</span><span>") + "</span>";
					this.h1txt = this.h1text.children;

					// h2 txt
					this.h2text = this.isCell.getElementsByTagName('h2')[0];
					var h2 = this.h2text.textContent;
					h2 = h2.split('');
					this.h2text.innerHTML = "<span>" + h2.join("</span><span>") + "</span>";
					this.h2txt = this.h2text.children;

					// Scroller
					if( this.flkty.selectedIndex == 1 || this.flkty.selectedIndex == 6 || this.flkty.selectedIndex == 11 || this.flkty.selectedIndex == 16 ){
						var x = 24 + '%';
						TweenMax.to(this.scroller, 1, { left: x, ease: Power4.easeOut });
						if ( this.y == -19 ){
							this.y = 0;
							TweenMax.to(this.num, .7, { top: this.y, ease: Power4.easeInOut });
							this.y = -95;
							TweenMax.to(this.num, 0, { top: this.y, delay: 0.7});
						} else if ( this.y == -76 ){
							this.y = -95;
							TweenMax.to(this.num, .7, { top: this.y, ease: Power4.easeInOut });
						}
						TweenMax.to(this.scroller, 1, { left: x, ease: Power4.easeOut });
					} else if( this.flkty.selectedIndex == 2 || this.flkty.selectedIndex == 7 || this.flkty.selectedIndex == 12 || this.flkty.selectedIndex == 17 ){
						var x = -24 + '%';
						if ( this.y == -95 ){
							this.y = -114;
							TweenMax.to(this.num, .7, { top: this.y, ease: Power4.easeInOut });
							this.y = -19;
							TweenMax.to(this.num, 0, { top: this.y, delay: 0.7});
						} else if ( this.y == -38 ){
							this.y = -19;
							TweenMax.to(this.num, .7, { top: this.y, ease: Power4.easeInOut });
						}
						TweenMax.to(this.scroller, 1, { left: x, ease: Power4.easeOut });
					} else if( this.flkty.selectedIndex == 3 || this.flkty.selectedIndex == 8 || this.flkty.selectedIndex == 13 ){
						var x = -12 + '%';
						this.y = -38;
						TweenMax.to(this.scroller, 1, { left: x, ease: Power4.easeOut });
						TweenMax.to(this.num, .7, { top: this.y, ease: Power4.easeInOut });
					} else if( this.flkty.selectedIndex == 4 || this.flkty.selectedIndex == 9 || this.flkty.selectedIndex == 14 ){
						var x = 0 + '%';
						this.y = -57;
						TweenMax.to(this.scroller, 1, { left: x, ease: Power4.easeOut });
						TweenMax.to(this.num, .7, { top: this.y, ease: Power4.easeInOut });
					} else if( this.flkty.selectedIndex == 5 || this.flkty.selectedIndex == 10 || this.flkty.selectedIndex == 15 ){
						var x = 12 + '%';
						this.y = -76;
						TweenMax.to(this.scroller, 1, { left: x, ease: Power4.easeOut });
						TweenMax.to(this.num, .7, { top: this.y, ease: Power4.easeInOut });
					}
					
				}
			}
		},
		mounted() {
			// Page leave time
			this.$emit('leave', 1000);

			this.scroller = this.$refs.scroller;
			this.nums = this.$refs.nums;
			this.num = this.$refs.num;
			this.scl = this.$refs.scl;
			this.scr = this.$refs.scr;
			this.index = this.indexX;


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
			var imgs = carousel.querySelectorAll('.carousel-cell .slide .s-img');
			//var imgsT = carousel.querySelectorAll('.carousel-cell .slide-title .s-img-t');
			var docStyle = document.documentElement.style;
			var transformProp = typeof docStyle.transform == 'string' ?
			  	'transform' : 'WebkitTransform';

			flkty.on( 'scroll', function(progress) {
			  	flkty.slides.forEach( function( slide, i ) {
			    	var img = imgs[i];
			    	//var imgT = imgsT[i];
			    	var x = ( slide.target + flkty.x ) * -1/3;
			    	img.style[ transformProp ] = 'translateX(' + x  + 'px)';
			    	//imgT.style[ transformProp ] = 'translateX(' + x  + 'px)';
			  	});
			  	if (flkty.selectedIndex == 1 ) {
			  		window.setTimeout(() => {
						flkty.select( 16, false, true );
						flkty.selectedElement.classList.add('force-selected');
						window.setTimeout(() => {
							flkty.selectedElement.classList.remove('force-selected');
						},1000);		
					}, 1000);
			  		
			  	} else if (flkty.selectedIndex == 17 ) {
			  		window.setTimeout(() => {
						flkty.select( 2, false, true );
						flkty.selectedElement.classList.add('force-selected');
						window.setTimeout(() => {
							flkty.selectedElement.classList.remove('force-selected');
						},1000);
					}, 1000);
			  	}
			}.bind(this));
			// For Chrome
			window.addEventListener('mousewheel', this.mouseWheelEvent);
			// For Firefox
			window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);
			window. setInterval(() => {
				this.scrollTime = 0;
			}, 1000);

			// Flickity click
			flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
				this.click(event, pointer, cellElement, cellIndex);
			}.bind(this));

			// Flickity drag
			flkty.on( 'dragStart', function( event, pointer ) {
				this.dragging();
			}.bind(this));
			flkty.on( 'dragEnd', function( event, pointer ) {
				this.dragged();
			}.bind(this));
			

			this.flkty = flkty;
			this.isCell = document.getElementsByClassName('is-selected')[0];
			this.cell = document.getElementsByClassName('carousel-cell');

			document.getElementsByClassName('is-selected')[0].classList.add("link");
			
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				// Anim in
				this.projectsInM();
			} else {
				this.isCell.onmouseenter=function() {
			        this.isEnter();
			    }.bind(this);
			    // Anim in
				this.projectsIn();
			}		
		},
		beforeDestroy: function() {
	        this.projectsOut();
	    },
		methods: {
			projectsIn() {
				var projectsIn = new TimelineMax();
				projectsIn.set(this.isCell, {className:"+=in-selected"}, "0")
				projectsIn.to(this.cell, 1, { y : 0, opacity : 1, ease: Power4.easeOut }, "0")
				projectsIn.set(this.isCell, {className:"-=in-selected"}, "0.3")

				projectsIn.to(this.scl, 1, { scaleX: 1, ease: Power4.easeOut }, "0")
				projectsIn.to(this.scr, 1, { scaleX: 1, ease: Power4.easeOut}, "0")
				projectsIn.to(this.nums, .5, { opacity: 1, ease: Power4.easeIn}, ".5")
			},
			projectsInM() {
				var projectsInM = new TimelineMax();
				projectsInM.set(this.isCell, {className:"+=in-selected"}, "0")
				projectsInM.to(this.cell, 1, { y : 0, opacity : 1, ease: Power4.easeOut }, "0")
				projectsInM.set(this.isCell, {className:"-=in-selected"}, "0.3")
				projectsInM.to(this.cell, 3, { y : 0, opacity : 1, ease: Power4.easeOut }, "0")
			},
			projectsOut() {
				var projectsOut = new TimelineMax();
				projectsOut.set(this.isCell, {className:"-=is-selected"}, "0.3")

				projectsOut.to(this.cell, 1, { y : -40, opacity : 0, ease: Power4.easeIn }, "0")
				projectsOut.to(this.isCell, 1, { y : 40, opacity : 0, ease: Power4.easeIn }, "0")

				projectsOut.to(this.scl, 1, { scaleX: 0, ease: Power4.easeIn }, "0")
				projectsOut.to(this.scr, 1, { scaleX: 0, ease: Power4.easeIn}, "0")
				projectsOut.to(this.nums, .5, { opacity: 0, ease: Power4.easeIn}, "0")
			},
			clear() {
				var s = document.getElementsByClassName('carousel-cell');
				for (var i = 0, len = s.length; i < len; i++) {
				    s[i].classList.remove("link");
				}
				document.getElementsByClassName('is-selected')[0].classList.add("link");
			},
			sub(event) {
				// Route setup
				var index;
				if( this.flkty.selectedIndex == 1 || this.flkty.selectedIndex == 6 || this.flkty.selectedIndex == 11 || this.flkty.selectedIndex == 16 ){
					//this.$emit('index', 6);
					index = 'threshold';
				}
				if( this.flkty.selectedIndex == 2 || this.flkty.selectedIndex == 7 || this.flkty.selectedIndex == 12 || this.flkty.selectedIndex == 17 ){
					//this.$emit('index', 7);
					index = 'urban';
				}
				if( this.flkty.selectedIndex == 3 || this.flkty.selectedIndex == 8 || this.flkty.selectedIndex == 13 ){
					//this.$emit('index', 8);
					index = 'seizure';
				}
				if( this.flkty.selectedIndex == 4 || this.flkty.selectedIndex == 9 || this.flkty.selectedIndex == 14 ){
					//this.$emit('index', 9);
					index = 'explosion';
				}
				if( this.flkty.selectedIndex == 5 || this.flkty.selectedIndex == 10 || this.flkty.selectedIndex == 15 ){
					//this.$emit('index', 10);
					index = 'decadence';
				}

				// Route push
				if ( event.target.tagName == "IMG" ){
					if (event.target.parentNode.parentNode.classList.contains("link")){
						this.$router.push('/' + index);
					}
				} else if ( event.target.className == "slide-title" ) {
					if (event.target.parentNode.classList.contains("link")){
						this.$router.push('/' + index);
					}
				} else if ( event.target.tagName == "SPAN" ) {
					if (event.target.parentNode.parentNode.parentNode.classList.contains("link")){
						this.$router.push('/' + index);
					}
				} else if ( event.target.tagName == "P" ) {
					if (event.target.parentNode.parentNode.classList.contains("link")){
						this.$router.push('/' + index);
					}
				} else if ( event.target.tagName == "H1" || event.target.tagName == "H2") {
					if (event.target.parentNode.parentNode.classList.contains("link")){
						this.$router.push('/' + index);
					}
				}
			},
			mouseWheelEvent(e) {
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				this.scroll = delta;				
			},
			click(event, pointer, cellElement, cellIndex) {
				if ( !cellElement ) {
				    return;
				}
				if ( this.scrollTime == 0 ) {
					this.isCell.onmouseenter=function() {};
					if ( cellIndex == 1 ) {
						this.flkty.select( cellIndex, false, false );
						window.setTimeout(() => {
							this.flkty.select( 16, false, true );
							this.flkty.selectedElement.classList.add('force-selected');
							window.setTimeout(() => {
								this.flkty.selectedElement.classList.remove('force-selected');
							},1000);		
						}, 1000);
					} else if ( cellIndex == 17 ) {
						this.flkty.select( cellIndex, false, false );
						window.setTimeout(() => {
							this.flkty.select( 2, false, true );
							this.flkty.selectedElement.classList.add('force-selected');
							window.setTimeout(() => {
								this.flkty.selectedElement.classList.remove('force-selected');
							},1000);
						}, 1000);
					} else {
						this.flkty.select( cellIndex, false, false );
					}
				}
				this.isCell = document.getElementsByClassName('is-selected')[0];
				this.scrollTime = 1;
				this.isCell.onmouseenter=function() {
			        this.isEnter();
			    }.bind(this);
			},
			dragging() {
				this.isCell.onmouseenter=function() {};
			},
			dragged() {
				this.isCell = document.getElementsByClassName('is-selected')[0];
				this.isCell.onmouseenter=function() {
			        this.isEnter();
			    }.bind(this);
			},
			isEnter() {
				// Split txt
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					var delay1 = 0.02 // seconds
					var delay2 = 0.04 // seconds
					// h1
					for (var i = 0; i < this.h1txt.length; i++) {
						var d1 = delay1 * (i + 1);
						var d2 = delay2 * (i + 1);
						TweenMax.to(this.h1txt[i], .2, { css:{opacity: .3}, delay: d1, ease: Power2.easeOut });
						TweenMax.to(this.h1txt[i], .2, { css:{opacity: 1}, delay: d2, ease: Power2.easeOut });
					}
					// h2
					for (var i = 0; i < this.h2txt.length; i++) {
						var d1 = delay1 * (i + 1);
						var d2 = delay2 * (i + 1);
						TweenMax.to(this.h2txt[i], .2, { css:{opacity: .3}, delay: d1, ease: Power2.easeOut });
						TweenMax.to(this.h2txt[i], .2, { css:{opacity: 1}, delay: d2, ease: Power2.easeOut });
					}
				}
			},
			over(e) {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					this.mouseX = e.pageX;
					this.mouseY = e.pageY;

					this.dx = this.mouseX - this.cx;
					this.dy = this.mouseY - this.cy;
					
					this.tiltx = -(this.dy / this.cy);
					this.tilty =  (this.dx / this.cx);

					this.radius = Math.sqrt(Math.pow(this.tiltx,2) + Math.pow(this.tilty,2));
					this.degree = (this.radius * 20);

					TweenLite.to(this.isCell, .5, {transform:'rotate3d(' + this.tiltx + ', ' + this.tilty + ', 0, ' + this.degree + 'deg)', ease:Power2.easeOut});
				}
			},
			leave() {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					TweenLite.to(this.isCell, 1.5, {transform:'rotate3d(' + 0 + ', ' + 0 + ', 0, ' + 0 + 'deg)', ease:Elastic.easeOut});
				}
			},
		}
	}
</script>