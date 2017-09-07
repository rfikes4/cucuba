<template>
	<section id="leaf">
		<div class="info-container">
			<div class="info" ref="i1">
				<div id="b-x" class="bio-pic" ref="i2"></div>
				<div class="bio-grad" ref="i3"></div>
				<div class="bio-content">
					<div class="bio-bg" ref="i4">
						<div class="bio-bg-fade"></div>
						<div class="bio-bg-block"></div>
					</div>
					<div class="bio-title" ref="i5">
						<div class="bio-line" ref="i6"></div>
						<div class="bio-name-bg">
							<h1 class="bio-name" ref="i7">X Alfonoso</h1>
						</div>
					</div>
					<div class="bio-text" ref="i8">
						<p>The hippest place to be in Havana is an old olive oil factory once known as El Cocinero. Reincarnated this February as the Fábrica de Arte Cubano (Cuban Art Factory—FAC), it is the brainchild of Cuban rocker, rapper and filmmaker Equis Alfonso (“X”) and is already taking the Cuban arts scene by storm.
						<br><br>Part Miami Art Basel, part Williamsburg warehouse party, the FAC hosts viewings, performances and exhibitions of cinema, theatre, dance, music, literature, fashion, architecture, graphic design, photography, and the visual arts. Every evening, Havana hipsters—wearing Zara tops, TOMS shoes purchased in Miami, and talking on iPhones—form a line around the block to enter. For a 2 CUC fee ($2, or 50 Cuban pesos) to enter the former factory space, they can sit on and among artistic installations, walk past walls of photographs and paintings, watch documentaries, and dance to some of Cuba’s hottest music.
						<br><br>FAC opened on February 13, 2014, with a mission to tear down the walls between different artistic mediums, shed art world pretension and bring together the entire community. It was inaugurated with a bang: X himself performed among the works of 33 other Cuban artists.
						<br><br>No one on the island is better suited to promote the FAC’s unique blend of mixed media than X. Now 41, he was raised in a world of artistic fusion, studying classical piano from the age of seven, playing in the jazz group Estado de Ánimo, and—upon completing his conservatory training—joining his parents Carlos Alfonso and Ele Valdés in their Afro-Cuban symphonic rock group, Síntesis, where he contributed percussion and vocals.
						<br><br>“I have always been surrounded by different art forms, and this felt like the moment to bring them together in the same space, knowing how much their unification has contributed to me, both as a person and an artist,” he says.
						<br><br>By the time his first solo album, Mundo Real (Real World), appeared in 2000, X was already known across the island for his mastery of different genres—from funk and hip-hop to rock, reggae and rumba—and for the diverse audiences that gathered to hear him play. His concerts themselves are works of artistic experimentation, often including painters, rappers and dancers on stage with videos playing on the surrounding walls.
						<br><br>The emerging creativity of Cuba’s art scene inspired X’s original vision of bringing together Cuban musicians, dancers, stage actors, and visual artists under the same roof.
						<br><br>In mid-2010, he and a group of collaborators secured support from the Ministry of Culture and the Instituto Cubano de la Música (Cuban Institute of Music) to hold artistic events and performances at the PABEXPO Exhibition Center in Havana. After searching for several years, the team finally found a more permanent home in El Cocinero.
						<br><br>X insists on playing down his own role in turning FAC into a thriving artistic community, even though his growing international prominence has helped ensure the organization’s success. He received a 2000 Coral Award from Havana’s Festival Internacional del Nuevo Cine Latinoamericano (International Festival of New Latin American Cinema) for co-composing the score of Cuban film María Antonia and garnered Latin Grammy nominations for his music in 2001 and 2002. In 2005, he was honored with Spain’s Goya Award for best original music in the film Habana Blues.
						<br><br>“The future of the FAC is in the hands of the artists and their imaginations,” X says. “The most important thing is that it has already created the possibility of creating and living together.”</p>
						<!-- <div class="text-break">
							<div class="break-l"></div>
							<h2>AM-PM</h2>
							<div class="break-r"></div>
							<div class="text-break-bg"></div>
						</div>
						<p>Cuban music has been my favorite genre of music to study and perform for many years. As a pianist and percussionist, it has always been a beautiful blend of rhythmic and harmonic complexity while also having a groove that catches the attention of the average listener. My study and performance of Cuban music has always been outside of the island, and this last summer was my first opportunity to travel to Cuba. Even though I knew amount about the country and had seen photos and videos, it was still incredibly significant for me to see it first hand. I experienced the amazing music and kind people and also saw the poverty of the country.
						<br><br>The trip was significant for the college to establish a connection with Cuba that extended beyond music performance and into music business and recording arts, and will help to foster more connections in the future into other artistic areas of the college. For me, it was an experience that has changed my perspective and my teaching, because I can now speak about what I saw and heard myself in Havana.
</p> -->
					</div>
				</div>
			</div>
		</div>

		<div class="slider-container" ref="i9">
			<div class="slider">
				<div class="slide s6-1">
					<div class="s-grad"></div>
				</div>
				<div class="slide s6-2">
					<div class="s-grad"></div>
				</div>
				<div class="slide s6-3">
					<div class="s-grad"></div>
				</div>
				<div class="slide s6-4">
					<div class="s-grad"></div>
				</div>
				<div class="slide s6-5">
					<div class="s-grad"></div>
				</div>
				<div class="slide s6-6">
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
			    initialSlide: 3,
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
				a.to(this.i1, 0.6, {top: 0, ease: Power3.easeOut}, "0.9")
				a.to(this.i2, 0.6, {opacity: 1, ease: Power3.easeOut}, "0.9")
				a.to(this.i3, 0.6, {opacity: 0.9, ease: Power3.easeOut}, "0.9")
				a.to(this.i4, 0.6, {opacity: 1, ease: Power3.easeOut}, "0.9")
				a.to(this.i5, 0.6, { top: 0, ease: Power3.easeOut}, "0.9")
				a.to(this.i7, 0.6, { opacity: 1, width: widthN, ease: Power3.easeOut}, "1.2")
				a.to(this.i7, 0.6, { css:{color: '#11182e'}, ease: Power3.easeOut}, "1.5")
				a.to(this.i6, 0.3, { width: widthN, opacity: 1, ease: Power3.easeOut}, "1.4")
				a.to(this.i8, 0.6, { top: 0, opacity: 1, ease: Power3.easeOut}, "1.2")
				a.to(this.i9, 0.6, { top: 0, opacity: 1, ease: Power3.easeOut}, "0.9")
				a.to(this.i10, 0.6, { bottom: vh, ease: Power3.easeOut}, "1.2")
				a.to(this.i11, 0.6, { top: vh1, opacity: 1, ease: Power3.easeOut}, "1.4")
			},
			gotoHome() {
				console.log('asd');
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