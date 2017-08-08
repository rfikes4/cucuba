<template>
	<section class="projects-sub" ref="all">
		<section class="sub-wrap" ref="all1">
			<div class="sub-title">
				<h1>Urban Lights</h1>
				<h2 class="s-h2">Interactive Street Art</h2>
				<div class="subT" ref="subT"></div>
			</div>
			<div class="sub-desc">
				<p>Urban Lights is a project that brings street art to life at night. Not only does art become animated, but it also becomes interactive allowing anyone with a smart phone to play with it.</p>
				<aside>
					<p>December 2016<br>RiNo Art District<br>Denver, CO</p>
				</aside>
			</div>
			<div class="vimeo">
				<iframe src="https://player.vimeo.com/video/195402239" width="640" height="360"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</section>

		<div class="sub-fixed s1-1"></div>

		<section class="sub-wrap">
			<div class="sub-title">
				<h2>Mapping the site</h2>
				<div class="subT" ref="subT1"></div>
			</div>
			<p class="s-margin">The RiNo Art District is known for being Denver’s art scene. Buildings and alleyways are covered with murals, and after scouting the area I selected the work of Vinne Alfonso (<a href="www.vincealfonso.com" targer="_blank">vincealfonso.com</a>). I projected Illustrator on top of the mural and traced out all the feathers in 30 degree weather, taking about a few hours to complete.</p>
			<div class="vimeo">
				<iframe src="https://player.vimeo.com/video/227681298?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</section>

		<section class="sub-dark">
			<section class="sub-wrap">
				<div class="sub-title">
					<h2>Building an interface</h2>
					<div class="subT" ref="subT2"></div>
				</div>
				<p class="s-margin">I built an interface to control the animations with web technologies because I wanted the project to be easily accessible to everyone upon learning that people would prefer to visit a URL rather than download an app for public installations.</p>
				<div class="vimeo">
					<iframe src="https://player.vimeo.com/video/227683990?autoplay=1&loop=1&autopause=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
				</div>
			</section>
		</section>

		<section class="sub-wrap">
			<div class="sub-title">
				<h2>Making it interactive</h2>
				<div class="subT" ref="subT3"></div>
			</div>
			<p class="s-margin">The Illustrator tracing was exported to .svg and animated with GSAP. I then used a portable wireless router (TP-Link TL-MR3020) and built a node.js server with Socket.io which allowed anyone on the network to connect and control the visuals. Then Syphoner was used to stream the browser to Resolume to be mapped and projected back onto the mural.</p>
			<div class="vimeo">
				<iframe src="https://player.vimeo.com/video/227681298?autoplay=1&loop=1&autopause=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</section>

		<div class="sub-fixed s1-2"></div>

		<section class="sub-wrap">
			<div class="sub-title">
				<h2>Going live</h2>
				<div class="subT" ref="subT4"></div>
			</div>
			<p class="s-margin">It was rough spending hours each night in 30 degree weather getting everything up and running. A few people dropped by and asked what I was up to. One person was able to play with the unfinished build and a group all said they would be willing to pay to see this at a festival.</p>
			<div class="s-wrap-img vimeo s1-3"></div>
		</section>
		
		<section class="sub-dark">
			<section class="sub-wrap">
				<div class="sub-title">
					<h2>Results</h2>
					<div class="subT" ref="subT5"></div>
				</div>
				<p>From this project I learned a lot about JavaScript, how to work with a generator, and all the difficulties that come with creating an outdoor installation for display and public interaction. After sharing the project on Facebook I was amazed that it reached 17,000+ from the RiNo art community sharing it on their pages.</p>
			</section>
		</section>

		<div class="sub-fixed s1-4"></div>

		<section class="next-s">
			<div class="next-title">
				<h2>Next project</h2>
				<div class="nl" ref="nL"></div>
			</div>
			<div class="sub-fixed-n s1-n">
				<div class="n-cover" ref="nCover" @mousemove="over" @mouseleave="leave"></div>
				<div class="sub-title-c">
					<div class="sub-title-n" ref="tn" @mouseenter="isEnter" @click="s1Out">
						<h1 ref="h1n">Helmet of Seizure</h1>
						<h2 ref="h2n">Reactive visuals</h2>
					</div>
				</div>
				
			</div>
		</section>

	</section>
</template>

<script>
	export default {
		data() {
			return {
				all1: null,
				all: null,
				subT: null,
				subT1: null,
				subT1x: 0,
				subT2: null,
				subT2x: 0,
				subT3: null,
				subT3x: 0,
				subT4: null,
				subT4x: 0,
				subT5: null,
				subT5x: 0,
				scroll: 0,
				nL: null,
				nLx: 0,
				nCover: null,
				nView: null,
				nHeight: null,
				tn: null,
				tnx: 0,
				h1n: null,
				h1ntxt: null,
				h2n: null,
				h2ntxt: null,
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
		mounted() {
			// Page leave time
			this.$emit('leave', 1000);
			// Route setup
			this.$emit('index', 7);
			// Scroll reset
			document.body.scrollTop = 0;

			this.all1 = this.$refs.all1;
			this.all = this.$refs.all;
			this.subT = this.$refs.subT;
			this.subT1 = this.$refs.subT1;
			this.subT2 = this.$refs.subT2;
			this.subT3 = this.$refs.subT3;
			this.subT4 = this.$refs.subT4;
			this.subT5 = this.$refs.subT5;

			this.nL = this.$refs.nL;
			this.nCover = this.$refs.nCover;
			this.tn = this.$refs.tn;
			this.h1n = this.$refs.h1n;
			this.h2n = this.$refs.h2n;

			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				// return
			} else {
				// h1 txt
				//this.h1text = this.isCell.getElementsByTagName('h1')[0];
				var h1 = this.h1n.textContent;
				h1 = h1.split('');
				this.h1n.innerHTML = "<span>" + h1.join("</span><span>") + "</span>";
				this.h1ntxt = this.h1n.children;

				// h2 txt
				//this.h2text = this.isCell.getElementsByTagName('h2')[0];
				var h2 = this.h2n.textContent;
				h2 = h2.split('');
				this.h2n.innerHTML = "<span>" + h2.join("</span><span>") + "</span>";
				this.h2ntxt = this.h2n.children;
			}

			// Scroll pos on route change
			window.addEventListener("scroll", this.scrolled);

			this.s1In();
		},
		beforeDestroy: function() {
			TweenLite.to(window, 0, {scrollTo: this.scroll});
	        this.s1Out();
	    },
		methods: {
			s1In() {
				var s1In = new TimelineMax();
				s1In.to(this.all1, 0, { opacity: 0, y: -40}, "0")
				s1In.to(this.all1, 1, { opacity: 1, y: 0, ease: Power4.easeOut}, "0")

				s1In.to(this.subT, .5, { scaleX: 1, ease: Power4.easeOut}, ".5")
			},
			s1Out() {
				var s1Out = new TimelineMax({onComplete: this.next});
				s1Out.to(this.all, 1, { opacity: 0, y: 40, ease: Power4.easeIn})
			},
			scrolled() {
				// Set scroll
				this.scroll = document.body.scrollTop;

				// Next scroll anim
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					if ( this.checkEnd(this.subT1) == true ) {
						if ( this.subT1x == 0 ){
							TweenMax.to(this.subT1, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT1x = 1;
					}
					if ( this.checkEnd(this.subT2) == true ) {
						if ( this.subT2x == 0 ){
							TweenMax.to(this.subT2, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT2x = 1;
					}
					if ( this.checkEnd(this.subT3) == true ) {
						if ( this.subT3x == 0 ){
							TweenMax.to(this.subT3, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT3x = 1;
					}
					if ( this.checkEnd(this.subT4) == true ) {
						if ( this.subT4x == 0 ){
							TweenMax.to(this.subT4, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT4x = 1;
					}
					if ( this.checkEnd(this.subT5) == true ) {
						if ( this.subT5x == 0 ){
							TweenMax.to(this.subT5, .5, { scaleX: 1, ease: Power4.easeIn });
						}
						this.subT5x = 1;
					}
					if ( this.checkEnd(this.nL) == true ) {
						if ( this.nLx == 0 ){
							TweenMax.to(this.nL, .5, { scaleY: 1, ease: Power4.easeIn });
						}
						this.nLx = 1;
					}
					if ( this.checkEnd(this.tn) == true ) {
						if ( this.tnx == 0 ){
							TweenMax.to(this.h1n, 1, { left: 0, opacity: 1, ease: Power4.easeOut });
							TweenMax.to(this.h2n, 1, { left: 0, opacity: 1, ease: Power4.easeOut });
						}
						this.tnx = 1;
					}
					if ( this.checkEnd(this.nCover) == true ) {
						// Bg
						this.nView = Math.max(document.documentElement.clientHeight, window.innerHeight);
						this.nHeight = document.body.clientHeight;
						var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
						var y = (this.nHeight - top - this.nView) / this.nView;
						TweenMax.to(this.nCover, 0, { opacity: y });

						// Title
						// var y2 = (this.nHeight - document.body.scrollTop - (this.nView * 2)) / this.nView;
						// var y3 = (y2 * this.nView) + this.nView;
						// TweenMax.to(this.tn, 0, { y: y3 });
						
					}
				}

			},
			checkEnd(elm) {
				var rect = elm.getBoundingClientRect();
				var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
				return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
			},
			isEnter() {
				// Split txt
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					var delay1 = 0.02 // seconds
					var delay2 = 0.04 // seconds
					// h1
					for (var i = 0; i < this.h1ntxt.length; i++) {
						var d1 = delay1 * (i + 1);
						var d2 = delay2 * (i + 1);
						TweenMax.to(this.h1ntxt[i], .2, { css:{opacity: .3}, delay: d1, ease: Power2.easeOut });
						TweenMax.to(this.h1ntxt[i], .2, { css:{opacity: 1}, delay: d2, ease: Power2.easeOut });
					}
					// h2
					for (var i = 0; i < this.h2ntxt.length; i++) {
						var d1 = delay1 * (i + 1);
						var d2 = delay2 * (i + 1);
						TweenMax.to(this.h2ntxt[i], .2, { css:{opacity: .3}, delay: d1, ease: Power2.easeOut });
						TweenMax.to(this.h2ntxt[i], .2, { css:{opacity: 1}, delay: d2, ease: Power2.easeOut });
					}
				}
			},
			next() {
				var next = this.$route.path;
				if (this.$route.path == '/urban') {
					this.$router.push('/seizure')
				}
			},
			over(e) {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					this.mouseX = e.clientX;
					this.mouseY = e.clientY;

					this.dx = this.mouseX - this.cx;
					this.dy = this.mouseY - this.cy;
					
					this.tiltx = -(this.dy / this.cy);
					this.tilty =  (this.dx / this.cx);

					this.radius = Math.sqrt(Math.pow(this.tiltx,2) + Math.pow(this.tilty,2));
					this.degree = (this.radius * 20);

					TweenLite.to(this.tn, .5, {transform:'rotate3d(' + this.tiltx + ', ' + this.tilty + ', 0, ' + this.degree + 'deg)', ease:Power2.easeOut});				
				}
			},
			leave() {
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					//return;
				} else {
					TweenLite.to(this.tn, 1.5, {transform:'rotate3d(' + 0 + ', ' + 0 + ', 0, ' + 0 + 'deg)', ease:Elastic.easeOut});
				}
			}
		}
	}
</script>