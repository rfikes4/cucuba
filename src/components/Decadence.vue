<template>
	<section class="projects-sub" ref="all">
		<section class="sub-wrap" ref="all1">
			<div class="sub-title">
				<h1>Decadence</h1>
				<h2 class="s-h2">Visual Package</h2>
				<div class="subT" ref="subT"></div>
			</div>
			<div class="sub-desc">
				<p>I was given the opportunity by Timmy "Domemaster" Edens to create VJ loops to be used for Decadence NYE 2015.</p>
				<aside>
					<p>December 2015<br>Colorado Convention Center<br>Denver, CO</p>
				</aside>
			</div>
			<div class="vimeo">
				<iframe src="https://player.vimeo.com/video/149925906" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</section>
		
		<section class="sub-wrap">
			<div class="sub-title">
				<h2>Creating the loops</h2>
				<div class="subT" ref="subT1"></div>
			</div>
			<p class="s-margin">All of the loops were created in After Effects, except for one which was shot with a GoPro and edited in Premiere. Most of the loops were generated with Trapcode.</p>
			<div class="s-wrap-img vimeo s4-1"></div>
			<div class="s-wrap-img vimeo s4-2"></div>
			<div class="s-wrap-img vimeo s4-3"></div>
			<div class="s-wrap-img vimeo s4-4"></div>
			<div class="s-wrap-img vimeo s4-5"></div>
			<div class="s-wrap-img vimeo s4-6"></div>
			<div class="s-wrap-img vimeo s4-7"></div>
			<div class="s-wrap-img vimeo s4-8"></div>
			<div class="s-wrap-img vimeo s4-9"></div>
			<div class="s-wrap-img vimeo s4-10"></div>
		</section>
		
		<section class="sub-dark">
			<section class="sub-wrap">
				<div class="sub-title">
					<h2>Results</h2>
					<div class="subT" ref="subT2"></div>
				</div>
				<p>The only downside to creating all these loops for the rave was not being able to see them live because I was in California at the time. Who knows? Maybe one day I'll make more visuals and get a chance to play it live. As for the loops, I've uploaded them all for free <a href="https://drive.google.com/open?id=0B1zFIRczcO3mTVhNR2VjLXp1T1E" target="_blank">here</a>.</p>
			</section>
		</section>

		<section class="next-s">
			<div class="next-title">
				<h2>Next project</h2>
				<div class="nl" ref="nL"></div>
			</div>
			<div class="sub-fixed-n s4-n">
				<div class="n-cover" ref="nCover" @mousemove="over" @mouseleave="leave"></div>
				<div class="sub-title-c">
					<div class="sub-title-n" ref="tn" @mouseenter="isEnter" @click="s1Out">
						<h1 ref="h1n">Threshold</h1>
						<h2 ref="h2n">Cross-platform Gaming</h2>
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
			this.$emit('index', 10);
			// Scroll reset
			document.body.scrollTop = 0;

			this.all1 = this.$refs.all1;
			this.all = this.$refs.all;
			this.subT = this.$refs.subT;
			this.subT1 = this.$refs.subT1;
			this.subT2 = this.$refs.subT2;
			this.subT3 = this.$refs.subT3;
			this.subT4 = this.$refs.subT4;

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
				if (this.$route.path == '/decadence') {
					this.$router.push('/threshold')
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