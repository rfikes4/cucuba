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
		<div class="slider-container">
			<div class="slider">
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-1.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-2.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-3.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-4.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-5.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-6.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-7.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-8.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-9.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-10.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-11.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-12.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-13.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-14.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-15.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-16.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-17.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-18.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-19.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-20.jpg" />
					<div class="s-grad"></div>
				</div>
				<div class="slide">
					<img class="s-img" src="../assets/images/bella/s1-21.jpg" />
					<div class="s-grad"></div>
				</div>
			</div>
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
				flkty: null,
				isCell: null,
				cell: null
			}
		},
		mounted() {
			console.log('bella');

			$(document).ready(function() {
			  // slick carousel
			  $('.slider').slick({
			    vertical: true,
			    slidesToShow: 3,
			    slidesToScroll: 1,
			    verticalSwiping: true,
			    arrows: false,
			    // centerMode: true,
			    initialSlide: 1,
			    focusOnSelect: true,
			    touchThreshold: 100
			  });
			});
		},
		methods: {

		}
	}
</script>