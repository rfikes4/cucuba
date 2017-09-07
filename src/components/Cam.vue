<template>
	<section id="leaf">
		<!-- <div class="info-container">
			<div class="info" ref="i1">
				<div id="b-richard" class="bio-pic" ref="i2"></div>
				<div class="bio-grad" ref="i3"></div>
				<div class="bio-content">
					<div class="bio-bg" ref="i4">
						<div class="bio-bg-fade"></div>
						<div class="bio-bg-block"></div>
					</div>
					<div class="bio-title" ref="i5">
						<div class="bio-line" ref="i6"></div>
						<div class="bio-name-bg">
							<h1 class="bio-name" ref="i7">Richard Strasser</h1>
						</div>
					</div>
					<div class="bio-text" ref="i8">
						<p>Richard Strasser is the new Chair of the Department of Music and Industry Entertainment Studies. He was granted tenure by the University of Colorado Board of Regents several weeks ago and comes to CU Denver from Northeastern University n Boston. Dr. Strasser is a graduate from the Australian National University with a Bachelor of Music (distinction) and a Graduate Diploma in Music. After winning both the Queen Elizabeth II Silver Jubilee Award and the Arts Council of Australia Scholarship, he continued his studies at the Manhattan School of Music, where he received a Master of Music and Doctor of Musical Arts degree. Richard Strasser also has an arts administration degree from New York University. Dr. Strasser has served as a faculty member of numerous universities including John Cabot University in Rome, Clarion University of Pennsylvania, and as Coordinator of the Music Business program at the University of Massachusetts Lowell. Dr. Strasser served on the Board of Director’s for the Music and Entertainment Industry Educators Association, the Cultural Organization of Lowell and the working group for the development for national music industry education standards for the National Association of Schools of Music. He is author of The Savvy Studio Owner published by Hal Leonard books, Music Business: The Key Concepts, and The Music Business and Recording Industry with Routledge. Richard is the recipient of the 2008 Excellence in Teaching Award at Northeastern University.</p>
						<div class="text-break">
							<div class="break-l"></div>
							<h2>AM-PM</h2>
							<div class="break-r"></div>
							<div class="text-break-bg"></div>
						</div>
						<p>Cuban music has been my favorite genre of music to study and perform for many years. As a pianist and percussionist, it has always been a beautiful blend of rhythmic and harmonic complexity while also having a groove that catches the attention of the average listener. My study and performance of Cuban music has always been outside of the island, and this last summer was my first opportunity to travel to Cuba. Even though I knew amount about the country and had seen photos and videos, it was still incredibly significant for me to see it first hand. I experienced the amazing music and kind people and also saw the poverty of the country.
						<br><br>The trip was significant for the college to establish a connection with Cuba that extended beyond music performance and into music business and recording arts, and will help to foster more connections in the future into other artistic areas of the college. For me, it was an experience that has changed my perspective and my teaching, because I can now speak about what I saw and heard myself in Havana.
</p>
					</div>
				</div>
			</div>
		</div>

		<div class="slider-container" ref="i9">
			<div class="slider">
				<div class="slide s3-1">
					<div class="s-grad"></div>
				</div>
				<div class="slide s3-2">
					<div class="s-grad"></div>
				</div>
				<div class="slide s3-3">
					<div class="s-grad"></div>
				</div>
				<div class="slide s3-4">
					<div class="s-grad"></div>
				</div>
				<div class="slide s3-5">
					<div class="s-grad"></div>
				</div>
				<div class="slide s3-6">
					<div class="s-grad"></div>
				</div>
			</div>
		</div> -->
		<div id="cam-container">
			<div class="cam-img s5-1"></div>
			<div class="cam-img s5-2"></div>
			<div class="cam-img s5-3"></div>
			<div class="cam-img s5-4"></div>
		</div>

		<div id="back" class="back" ref="i10" @click="animOut">
			<div class="b-bg">
				<div class="b-bg-inner"></div>
			</div>
			<h2 class="b-txt" ref="i11">Music</h2>
		</div>

	</section>
</template>

<script>
	// import $ from 'jquery';
	// import 'slick-carousel';
	// import 'slick-carousel/slick/slick.css';
	// import 'slick-carousel/slick/slick-theme.css';
	export default {
		data() {
			return {
				// i1: null,
				// i2: null,
				// i3: null,
				// i4: null,
				// i5: null,
				// i6: null,
				// i7: null,
				// i8: null,
				// i9: null,
				i10: null,
				i11: null
			}
		},
		mounted() {
			// this.i1 = this.$refs.i1;
			// this.i2 = this.$refs.i2;
			// this.i3 = this.$refs.i3;
			// this.i4 = this.$refs.i4;
			// this.i5 = this.$refs.i5;
			// this.i6 = this.$refs.i6;
			// this.i7 = this.$refs.i7;
			// this.i8 = this.$refs.i8;
			// this.i9 = this.$refs.i9;
			this.i10 = this.$refs.i10;
			this.i11 = this.$refs.i11;


			this.back = this.$refs.back;

			// $(document).ready(function() {
			//   // slick carousel
			//   $('.slider').slick({
			//     vertical: true,
			//     slidesToShow: 3,
			//     slidesToScroll: 1,
			//     verticalSwiping: true,
			//     arrows: false,
			//     initialSlide: 1,
			//     focusOnSelect: true,
			//     touchThreshold: 100
			//   });
			// });

			this.animIn();
		},
		methods: {
			animIn() {
				var a = new TimelineMax();
				var vh = 10 + 'vh'
				var vh1 = 2 + 'vh'
				// var widthN = 100 + '%';
				// a.to(this.i1, 0.6, {top: 0, ease: Power3.easeOut}, "0.9")
				// a.to(this.i2, 0.6, {opacity: 1, ease: Power3.easeOut}, "0.9")
				// a.to(this.i3, 0.6, {opacity: 0.9, ease: Power3.easeOut}, "0.9")
				// a.to(this.i4, 0.6, {opacity: 1, ease: Power3.easeOut}, "0.9")
				// a.to(this.i5, 0.6, { top: 0, ease: Power3.easeOut}, "0.9")
				// a.to(this.i7, 0.6, { opacity: 1, width: widthN, ease: Power3.easeOut}, "1.2")
				// a.to(this.i7, 0.6, { css:{color: '#11182e'}, ease: Power3.easeOut}, "1.5")
				// a.to(this.i6, 0.3, { width: widthN, opacity: 1, ease: Power3.easeOut}, "1.4")
				// a.to(this.i8, 0.6, { top: 0, opacity: 1, ease: Power3.easeOut}, "1.2")
				// a.to(this.i9, 0.6, { top: 0, opacity: 1, ease: Power3.easeOut}, "0.9")
				a.to(this.i10, 0.6, { bottom: vh, ease: Power3.easeOut}, "1.2")
				a.to(this.i11, 0.6, { top: vh1, opacity: 1, ease: Power3.easeOut}, "1.4")
			},
			gotoHome() {
				this.$router.push('/');
			},
			animOut() {
				var b = new TimelineMax();
				var vh = 170 + '%'
				b.to(this.i10, 0.6, { bottom: vh, scale: 6, ease: Power3.easeOut}, "0")
				b.to(this.i11, 0, { opacity: 0, ease: Power3.easeOut}, "0")
				b.add(this.gotoHome, "0.6")
			}
		}
	}
</script>