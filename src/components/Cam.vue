<template>
	<section id="leaf">
		<div id="cam-container">
			<div class="cam-slides" ref="i1">
				<div class="cam-img s5-1" ref="i2"></div>
				<div class="cam-img s5-2" ref="i3"></div>
				<div class="cam-img s5-3" ref="i4"></div>
				<div class="cam-img s5-4" ref="i5"></div>
				<!-- <div class="cam-img s5-1" ref="i2a"></div> -->
			</div>
			<div class="cam-info">
				<div class="bio-title" ref="i6">
					<div class="bio-name-bg">
						<h1 class="bio-name" ref="i7">Let passion drive your profession</h1>
					</div>
				</div>
				<p class="cam-txt" ref="i8">The CU Denver College of Arts & Media is where city and classroom collide. Where students learn from leaders in Denver’s thriving creative economy and hone their skills in arts, music, video and television. Because the opportunity to live what you love is more than a career, it’s a calling.
				<br><br>
				CAM graduates have been handpicked by leading firms like Apple, Pixar, AEG Live, Google, Comcast, Rolling Stone, HBO, ILM, and Disney. Our alumni are rising to the international stage as part of acts like Nathaniel Ratliff & The Night Sweats, The Fray, and Air Dubai. Our students and graduates are working for major networks, creating award-winning films and receiving national recognition. Our city is fueling opportunities for them, and then, in turn, are elevating arts and culture scenes from Denver to the coasts.
				<br><br>
				Our faculty is made up of accomplished leaders in their creative fields. We train you with the same state-of-the-art technologies and techniques used by professionals. And we provide unique internships and opportunities you won’t find anywhere else. That’s why CAM is the place to turn your passion into professional success.</p>
				<div class="cam-cu" ref="i9">
					<div class="cu-logo"></div>
					<div class="cu-txt"></div>
				</div>
			</div>
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
				i1: null,
				i2: null,
				// i2a: null,
				i3: null,
				i4: null,
				i5: null,
				i6: null,
				i7: null,
				i8: null,
				i9: null,
				i10: null,
				i11: null
			}
		},
		mounted() {
			this.i1 = this.$refs.i1;
			this.i2 = this.$refs.i2;
			// this.i2a = this.$refs.i2a;
			this.i3 = this.$refs.i3;
			this.i4 = this.$refs.i4;
			this.i5 = this.$refs.i5;
			this.i6 = this.$refs.i6;
			this.i7 = this.$refs.i7;
			this.i8 = this.$refs.i8;
			this.i9 = this.$refs.i9;
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
				var widthN = 100 + '%';
				// Slide container
				a.to(this.i1, 1.2, {y: 0, opacity: 1, ease: Power3.easeOut}, "0.9")

				// Title
				a.to(this.i6, 0.6, { top: 0, ease: Power3.easeOut}, "0.9")
				a.to(this.i7, 0.6, { opacity: 1, width: widthN, ease: Power3.easeOut}, "1.2")
				a.to(this.i7, 0.6, { css:{color: '#11182e'}, ease: Power3.easeOut}, "1.5")

				// Txt & logo
				a.to(this.i8, 0.6, { y: 0, opacity: 1, ease: Power3.easeOut}, "1.5")
				a.to(this.i9, 0.6, { y: 0, opacity: 1, ease: Power3.easeOut}, "1.7")

				// Back
				a.to(this.i10, 0.6, { bottom: vh, ease: Power3.easeOut}, "1.2")
				a.to(this.i11, 0.6, { top: vh1, opacity: 1, ease: Power3.easeOut}, "1.4")

				//Slide anim
				var b = new TimelineMax({repeat: -1});
				// b.to(this.i2, 0.6, {opacity: 1, ease: Power3.easeOut}, "0.9")
				// b.to(this.i2, 0, {opacity: 0}, "6.5")
				b.to(this.i3, 1.2, {opacity: 1, ease: Power3.easeOut}, "5.9")
				b.to(this.i3, 0, {opacity: 0}, "12.1")
				b.to(this.i4, 1.2, {opacity: 1, ease: Power3.easeOut}, "10.9")
				b.to(this.i4, 0, {opacity: 0}, "17.1")
				b.to(this.i5, 1.2, {opacity: 1, ease: Power3.easeOut},"15.9")
				b.to(this.i5, 1.2, {opacity: 0, ease: Power3.easeOut},"20.9")
				// b.to(this.i2a, 0.6, {opacity: 1, ease: Power3.easeOut}, "20.9")
				// b.to(this.i2a, 0, {opacity: 1, ease: Power3.easeOut}, "23")


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