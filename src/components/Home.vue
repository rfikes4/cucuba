<template>
	<section class="home">
		<div id="content"></div>
		<div id="midi-container">
			<div id="home-bg">
				<div id="p1" class="midi-pattern" ref="p1"></div>
				<div id="p2" class="midi-pattern" ref="p2"></div>
				<div id="p3" class="midi-pattern" ref="p3"></div>
				<div id="p4" class="midi-pattern" ref="p4"></div>
				<div id="p5" class="midi-pattern" ref="p5"></div>
				<div id="p6" class="midi-pattern" ref="p6"></div>
				<div id="p7" class="midi-pattern" ref="p7"></div>
				<div id="p8" class="midi-pattern" ref="p8"></div>
			</div>
			<div id="midi">
				<div id="l3" class="petal"></div>
				<div id="l2" class="petal"></div>
				<div id="l1" class="petal"></div>				
				<div id="r3" class="petal"></div>
				<div id="r2" class="petal"></div>
				<div id="r1" class="petal"></div>
				<div id="midi-bg">
					<div id="midi-bg-inner">
						<div id="midi-btns">
							<div id="horn1" class="midi-btn" @click="toggle"></div>
							<div id="vocal2" class="midi-btn" @click="toggle"></div>
							<div id="ensb2" class="midi-btn" @click="toggle"></div>
							<div id="drum5" class="midi-btn" @click="toggle"></div>
							<div id="drum6" class="midi-btn" @click="toggle"></div>
							<div id="vocal1" class="midi-btn" @click="toggle"></div>
							<div id="horn2" class="midi-btn" @click="toggle"></div>
							<div id="hi2" class="midi-btn" @click="toggle"></div>
							<div id="drum8" class="midi-btn" @click="toggle"></div>
							<div id="drum7" class="midi-btn" @click="toggle"></div>
							<div id="ensb1" class="midi-btn" @click="toggle"></div>
							<div id="hi1" class="midi-btn" @click="toggle"></div>
							<div id="hi3" class="midi-btn" @click="toggle"></div>
							<div id="hi5" class="midi-btn" @click="toggle"></div>
							<div id="ens3" class="midi-btn" @click="toggle"></div>
							<div id="drum1" class="midi-btn" @click="toggle"></div>
							<div id="drum2" class="midi-btn" @click="toggle"></div>
							<div id="hi4" class="midi-btn" @click="toggle"></div>
							<div id="ens2" class="midi-btn" @click="toggle"></div>
							<div id="ens5" class="midi-btn" @click="toggle"></div>
							<div id="drum4" class="midi-btn" @click="toggle"></div>
							<div id="drum3" class="midi-btn" @click="toggle"></div>
							<div id="ens1" class="midi-btn" @click="toggle"></div>
							<div id="ens4" class="midi-btn" @click="toggle"></div>
							<div id="ens6" class="midi-btn" @click="toggle"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
// import p5 from 'p5'
// var pixi = require('pixi');
// // var Sprite = require('pixi/display/Sprite');
// var Stage = require('pixi/display/Stage');
// var Texture = require('pixi/textures/Texture');
// var WebGLRenderer = require('pixi/renderers/webgl/WebGLRenderer');
// import PIXI from 'pixi'
// import {Container} from 'pixi'
// import {Sprite} from 'pixi'
// import PIXI from 'pixi'
// import root from './_root'
	export default {
		data() {
			return {
				p1: null,
				p2: null,
				p3: null,
				p4: null,
				p5: null,
				p6: null,
				p7: null,
				p8: null,
				playing: false,
				beat: 16,
				tracks: [],
				m0: null,
				m1: null,
				m2: null,
				m3: null,
				m4: null,
				m5: null,
				m6: null,
				m7: null,
				m8: null,
				m9: null,
				m10: null,
				m11: null,
				m12: null,
				m11: null,
				m14: null,
				m15: null,
				m16: null,
				m17: null,
				m18: null,
				m19: null,
				m20: null,
				m21: null,
				m22: null,
				m23: null,
				m24: null,
			}
		},
		mounted() {
			//this.fps();
			// this.playing = true;
			// this.tracks.push('hi3');
			// this.beat = 16;
			// this.play();

			this.p1 = this.$refs.p1;
			this.p2 = this.$refs.p2;
			this.p3 = this.$refs.p3;
			this.p4 = this.$refs.p4;
			this.p5 = this.$refs.p5;
			this.p6 = this.$refs.p6;
			this.p7 = this.$refs.p7;
			this.p8 = this.$refs.p8;

			var bg = new TimelineMax();
			// bg.to(this.p1, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "0")
			// bg.to(this.p2, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "8")
			// bg.to(this.p3, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "16")
			// bg.to(this.p4, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "24")
			// bg.to(this.p5, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "32")
			// bg.to(this.p6, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "40")
			// bg.to(this.p7, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "48")
			// bg.to(this.p8, 16, {width: 4000, height: 4000, ease: Power1.easeIn}, "56")

			// bg.to(this.p1, 19.2, {scale: 6, ease: Power4.easeOut}, "0")
			// bg.to(this.p1, 0, {scale: 1}, "9.6")
			// bg.to(this.p2, 19.2, {scale: 6, ease: Power4.easeOut}, "2.4")
			// bg.to(this.p2, 0, {scale: 1}, "9.6")
			// bg.to(this.p3, 19.2, {scale: 6, ease: Power4.easeOut}, "4.8")
			// bg.to(this.p3, 0, {scale: 1}, "12")
			// bg.to(this.p4, 19.2, {scale: 6, ease: Power4.easeOut}, "7.2")
			// bg.to(this.p4, 0, {scale: 1}, "14.4")
			// bg.to(this.p5, 19.2, {scale: 6, ease: Power4.easeOut}, "9.6")
			// bg.to(this.p5, 0, {scale: 1}, "16.8")
			// bg.to(this.p6, 19.2, {scale: 6, ease: Power4.easeOut}, "12")
			// bg.to(this.p6, 0, {scale: 1}, "19.2")
			// bg.to(this.p7, 19.2, {scale: 6, ease: Power4.easeOut}, "14.4")
			// bg.to(this.p7, 0, {scale: 1}, "21.6")
			// bg.to(this.p8, 19.2, {scale: 6, ease: Power4.easeOut}, "16.8")
			// bg.to(this.p8, 0, {scale: 1}, "24")
			
		},
		beforeDestroy: function() {
	        //this.aboutOut();
	    },
		methods: {
			toggle() {
				// Toggle midi btn
				if ( document.getElementById(event.target.id).classList.contains("midi-btn-active")) {
					document.getElementById(event.target.id).classList.remove("midi-btn-active");
					for ( var i = this.tracks.length - 1; i >= 0; i-- ) {
					    if ( this.tracks[i] === event.target.id ) {
					       this.tracks.splice(i, 1);
					    }
					}
					console.log(this.tracks);
				} else {
					document.getElementById(event.target.id).classList.add("midi-btn-active");
					this.tracks.push(event.target.id);
					console.log(this.tracks);
				}
				
				// if ( this.playing === false ) {
				// 	this.play();
				// }

				if ( this.tracks.length > 0 && this.playing === false ) {
					console.log('play');
					this.play();
					//this.playing === false;
				} else if ( this.tracks.length == 0 ) {
					console.log('stop');
					this.stop();
					//this.playing = true;
				}

			
			},
			play() {
				//console.log('play');
				this.playing = setInterval(this.midi, 60000 / 100);
			},
			stop() {
				clearInterval(this.playing);
				this.playing = false;
				// this.beat = 16;
			},
			midi() {
				console.log(this.beat);
				if ( this.beat < 16 ) {
					this.beat = this.beat + 1;
				} else {
					this.beat = 1;
					for(var i = this.tracks.length - 1; i >= 0; i--) {
						// console.log(this.tracks[i]);
						var m = 'm' + i;
						this.m = null;
						this.m = new Audio('static/audio/loops/' + this.tracks[i] + '.mp3');
						this.m.play();
					}
				}
			},
			fps() {
				window.countFPS = (function () {
					var lastLoop = (new Date()).getMilliseconds();
					var count = 1;
					var fps = 0;

					return function () {
					    var currentLoop = (new Date()).getMilliseconds();
					    if (lastLoop > currentLoop) {
						    fps = count;
					    	count = 1;
					    } else {
					    	count += 1;
					    }
					    lastLoop = currentLoop;
					    return fps;
					};
				}());

				(function loop() {
				    requestAnimationFrame(function () {
				    	console.log(countFPS());
				    	loop();
				    });
				}());
			}
		}
	}
</script>