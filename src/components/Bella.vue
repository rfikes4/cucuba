<template>
	<section id="leaf">
		<div class="info-container">
			<div class="info" ref="i1">
				<div id="b-bella" class="bio-pic" ref="i2"></div>
				<div class="bio-grad" ref="i3"></div>
				<div class="bio-content">
					<div class="bio-bg" ref="i4">
						<div class="bio-bg-fade"></div>
						<div class="bio-bg-block"></div>
					</div>
					<div class="bio-title" ref="i5">
						<div class="bio-line" ref="i6"></div>
						<div class="bio-name-bg">
							<h1 class="bio-name" ref="i7">Isabella Sandoval</h1>
						</div>
					</div>
					<div class="bio-text" ref="i8">
						<p>Hello! I’m Isabella Sandoval and I’m currently in my last semester in the MEIS Department at CU Denver. As a lover of live music I hope to start my own business within the concert industry to continue to uplift music cities such as our own in Denver, Colorado. I enjoy riding my bike and being surrounded by witty people.</p>
						<div class="text-break">
							<div class="break-l"></div>
							<h2>Studying in Cuba</h2>
							<div class="break-r"></div>
							<div class="text-break-bg"></div>
						</div>
						<p>Prior to visiting Havana, I had no idea what to expect from the Cuban music scene but after having the opportunity of attending music conference AM-PM I was able to see what goes on inside of their recording studios and learn directly from the people that spend their lives uplifting the Cuban music industry. Music is a huge part of their entire culture and that very obviously shines through with every step of their creation process in the studio.
						<br><br>Upon arrival, it didn’t take long to be greeted with big hugs from the very enthusiastic organizers of AM-PM, feeling welcomed would be an understatement.<br><br>Most of the conference was held in the famous Fabrica de Arte Cubano- once an abandoned oil factory that has since been transformed into a breath-taking contemporary cultural center for films, art exhibitions, nightlife and live shows.<br><br>With workshops on how to properly utilize artist’s Youtube channels it is obvious that they are at a different technological stage in the industry than we are. However, what they may lack in resources is made up by with their passion for music, as it continues to inspire them to build up their ever-growing success of Cuban musicians.<br><br>As music professionals in a developing country, these people face completely different obstacles than our Denver talent. However, it is very obvious that their strong drive and love of music doesn’t let their limited resources discourage their art.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="slider-container" ref="i9">
			<div class="slider">
				<div class="slide s1-1">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-2">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-3">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-4">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-5">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-6">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-7">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-8">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-9">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-10">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-11">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-12">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-13">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-14">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-15">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-16">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-17">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-18">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-19">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-20">
					<div class="s-grad"></div>
				</div>
				<div class="slide s1-21">
					<div class="s-grad"></div>
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
	import $ from 'jquery';
	import 'slick-carousel';
	import 'slick-carousel/slick/slick.css';
	import 'slick-carousel/slick/slick-theme.css';
	export default {
		data() {
			return {
				i1: null,
				i2: null,
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

			$(document).ready(function() {
			  // slick carousel
			  $('.slider').slick({
			    vertical: true,
			    slidesToShow: 3,
			    slidesToScroll: 1,
			    verticalSwiping: true,
			    arrows: false,
			    initialSlide: 1,
			    focusOnSelect: true,
			    touchThreshold: 100
			  });
			});

			this.animIn();
		},
		methods: {
			animIn() {
				var a = new TimelineMax();
				var vh = 10 + 'vh'
				var vh1 = 2 + 'vh'
				var widthN = 100 + '%';
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
				// a.to(this.i10, 0.6, { bottom: vh, ease: Power3.easeOut}, "1.2")
				// a.to(this.i11, 0.6, { top: vh1, opacity: 1, ease: Power3.easeOut}, "1.4")
				a.to(this.i1, 1.2, {top: 0, ease: Power3.easeOut}, "0.9")

				// Pic
				a.to(this.i2, 0.6, {opacity: 1, ease: Power3.easeOut}, "0.9")
				a.to(this.i3, 0.6, {opacity: 0.9, ease: Power3.easeOut}, "0.9")

				// Fade
				a.to(this.i4, 0.6, {opacity: 1, ease: Power3.easeOut}, "0.9")

				// Title
				a.to(this.i5, 0.6, { top: 0, ease: Power3.easeOut}, "1.2")
				a.to(this.i7, 0.6, { opacity: 1, width: widthN, ease: Power3.easeOut}, "1.5")
				a.to(this.i7, 0.6, { css:{color: '#11182e'}, ease: Power3.easeOut}, "1.8")
				a.to(this.i6, 0.3, { width: widthN, opacity: 1, ease: Power3.easeOut}, "1.7")

				// Txt
				a.to(this.i8, 0.6, { top: 0, opacity: 1, ease: Power3.easeOut}, "1.5")

				// Slider
				a.to(this.i9, 1.2, { top: 0, opacity: 1, ease: Power3.easeOut}, "0.9")

				// Back
				a.to(this.i10, 0.6, { bottom: vh, ease: Power3.easeOut}, "1.5")
				a.to(this.i11, 0.6, { top: vh1, opacity: 1, ease: Power3.easeOut}, "1.7")
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