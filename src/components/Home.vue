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
				<div id="l3" class="petal" ref="l3"></div>
				<div id="l2" class="petal" ref="l2"></div>
				<div id="l1" class="petal" ref="l1"></div>				
				<div id="r3" class="petal" ref="r3"></div>
				<div id="r2" class="petal" ref="r2"></div>
				<div id="r1" class="petal" ref="r1"></div>
				<div id="midi-bg">
					<div id="midi-bg-inner">
						<div id="midi-btns">
							<div id="horn1" class="midi-btn q-horn vQ" @click="toggle"></div>
							<div id="vocal2" class="midi-btn q-vocal vQ" @click="toggle"></div>
							<div id="ensb2" class="midi-btn q-ensb" @click="toggle"></div>
							<div id="drum5" class="midi-btn q-drum2" @click="toggle"></div>
							<div id="drum6" class="midi-btn q-drum2" @click="toggle"></div>
							<div id="vocal1" class="midi-btn q-voca vQ" @click="toggle"></div>
							<div id="horn2" class="midi-btn q-horn vQ" @click="toggle"></div>
							<div id="hi2" class="midi-btn q-hi" @click="toggle"></div>
							<div id="drum8" class="midi-btn q-drum2" @click="toggle"></div>
							<div id="drum7" class="midi-btn q-drum2" @click="toggle"></div>
							<div id="ensb1" class="midi-btn q-ensb" @click="toggle"></div>
							<div id="hi1" class="midi-btn q-hi" @click="toggle"></div>
							<div id="hi3" class="midi-btn q-hi" @click="toggle"></div>
							<div id="hi5" class="midi-btn q-hi" @click="toggle"></div>
							<div id="ens3" class="midi-btn q-ens" @click="toggle"></div>
							<div id="drum1" class="midi-btn q-drum1" @click="toggle"></div>
							<div id="drum2" class="midi-btn q-drum1" @click="toggle"></div>
							<div id="hi4" class="midi-btn q-hi" @click="toggle"></div>
							<div id="ens2" class="midi-btn q-ens" @click="toggle"></div>
							<div id="ens5" class="midi-btn q-ens" @click="toggle"></div>
							<div id="drum4" class="midi-btn q-drum1" @click="toggle"></div>
							<div id="drum3" class="midi-btn q-drum1" @click="toggle"></div>
							<div id="ens1" class="midi-btn q-ens" @click="toggle"></div>
							<div id="ens4" class="midi-btn q-ens" @click="toggle"></div>
							<div id="ens6" class="midi-btn q-ens" @click="toggle"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
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
				l1: null,
				l2: null,
				l3: null,
				r1: null,
				r2: null,
				r3: null,
				playing: false,
				beat: 32,
				oddBeat: null,
				playlist: {},
				tracks: [],
				queue: []
			}
		},
		watch: {

		},
		mounted() {
			this.p1 = this.$refs.p1;
			this.p2 = this.$refs.p2;
			this.p3 = this.$refs.p3;
			this.p4 = this.$refs.p4;
			this.p5 = this.$refs.p5;
			this.p6 = this.$refs.p6;
			this.p7 = this.$refs.p7;
			this.p8 = this.$refs.p8;

			this.l1 = this.$refs.l1;
			this.l2 = this.$refs.l2;
			this.l3 = this.$refs.l3;
			this.r1 = this.$refs.r1;
			this.r2 = this.$refs.r2;
			this.r3 = this.$refs.r3;

			this.playlist = {
				horn1: new Howl({src: ['static/audio/loops/horn1.mp3']}),
				horn2: new Howl({src: ['static/audio/loops/horn2.mp3']}),
				vocal1: new Howl({src: ['static/audio/loops/vocal1.mp3']}),
				vocal2: new Howl({src: ['static/audio/loops/vocal2.mp3']}),
				ensb1: new Howl({src: ['static/audio/loops/ensb1.mp3']}),
				ensb2: new Howl({src: ['static/audio/loops/ensb2.mp3']}),
				
				drum1: new Howl({src: ['static/audio/loops/drum1.mp3']}),
				drum2: new Howl({src: ['static/audio/loops/drum2.mp3']}),
				drum3: new Howl({src: ['static/audio/loops/drum3.mp3']}),
				drum4: new Howl({src: ['static/audio/loops/drum4.mp3']}),
				drum5: new Howl({src: ['static/audio/loops/drum5.mp3']}),
				drum6: new Howl({src: ['static/audio/loops/drum6.mp3']}),
				drum8: new Howl({src: ['static/audio/loops/drum8.mp3']}),
				drum7: new Howl({src: ['static/audio/loops/drum7.mp3']}),
				
				hi1: new Howl({src: ['static/audio/loops/hi1.mp3']}),
				hi2: new Howl({src: ['static/audio/loops/hi2.mp3']}),
				hi3: new Howl({src: ['static/audio/loops/hi3.mp3']}),
				hi4: new Howl({src: ['static/audio/loops/hi4.mp3']}),
				hi5: new Howl({src: ['static/audio/loops/hi5.mp3']}),
						
				ens1: new Howl({src: ['static/audio/loops/ens1.mp3']}),
				ens2: new Howl({src: ['static/audio/loops/ens2.mp3']}),
				ens3: new Howl({src: ['static/audio/loops/ens3.mp3']}),
				ens4: new Howl({src: ['static/audio/loops/ens4.mp3']}),
				ens5: new Howl({src: ['static/audio/loops/ens5.mp3']}),
				ens6: new Howl({src: ['static/audio/loops/ens6.mp3']})
			}

			// var leaf = new TimelineMax({repeat: -1, yoyo: true});
			TweenMax.to(this.l1, 4.8, {rotation: 7.5, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 0});
			TweenMax.to(this.l2, 4.8, {rotation: 7.5, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 1.2});
			TweenMax.to(this.l3, 4.8, {rotation: 7.5, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 2.4});
			TweenMax.to(this.r1, 4.8, {rotation: -7.5, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 0.6});
			TweenMax.to(this.r2, 4.8, {rotation: -7.5, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 1.8});
			TweenMax.to(this.r3, 4.8, {rotation: -7.5, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 3.0});

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
				var btn = document.getElementById(event.target.id);
				// Toggle midi btn
				if ( btn.classList.contains("midi-btn-active")) {
					btn.classList.remove("midi-btn-active", "midi-q");
						// Remove and stop track
						for ( var i = this.tracks.length - 1; i >= 0; i-- ) {
						    if ( this.tracks[i] === event.target.id ) {
						    	this.playlist[this.tracks[i]].stop();
						    	this.tracks.splice(i, 1);
						    }
						}
						// if ( this.vocalQ == event.target.id ) {
						// 	// console.log('set to null')
						// 	this.playlist[this.tracks[vocalQ]].stop();
						// 	this.vocalQ = null;
						// }
						// // Remove track from queue
						// for ( var i = this.queue.length - 1; i >= 0; i-- ) {
						//     if ( this.queue[i] === event.target.id ) {
						//     	this.queue.splice(i, 1);
						//     }
						// }
				}

				// Toggle queue
				if ( btn.classList.contains("mq")) {
					btn.classList.remove("mq", "midi-q");
					// Remove track from queue
					for ( var i = this.queue.length - 1; i >= 0; i-- ) {
					    if ( this.queue[i] === event.target.id ) {
					    	this.queue.splice(i, 1);
					    }
					}
				} else {
					btn.classList.add("mq");
					// Add track to subQ
					// if ( btn.classList.contains("q-vocal") ) {
					if ( btn.classList.contains("vQ") ) {
						// if ( event.target.id == 'vocal1' ) {
						// 	if ( this.queue.includes(event.target.id) == false ) {
						// 		this.queue.push(event.target.id);
						// 		if ( this.queue.includes('vocal2') == true ) {
						// 			var index = this.queue.indexOf('vocal2');
						// 			this.queue.splice(index, 1);
						// 			document.getElementById('vocal2').classList.remove("mq", "midi-q");
						// 		}
						// 	}
						// } else if ( event.target.id == 'vocal2' ) {
						// 	if ( this.queue.includes(event.target.id) == false ) {
						// 		this.queue.push(event.target.id);
						// 		if ( this.queue.includes('vocal1') == true ) {
						// 			var index = this.queue.indexOf('vocal1');
						// 			this.queue.splice(index, 1);
						// 			document.getElementById('vocal1').classList.remove("mq", "midi-q");
						// 		}
						// 	}
						// }
						if ( event.target.id == 'vocal1' ) {
							if ( this.queue.includes(event.target.id) == false ) {
								this.queue.push(event.target.id);
								if ( this.queue.includes('vocal2') == true ) {
									var index = this.queue.indexOf('vocal2');
									this.queue.splice(index, 1);
									document.getElementById('vocal2').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('horn1') == true ) {
									var index = this.queue.indexOf('horn1');
									this.queue.splice(index, 1);
									document.getElementById('horn1').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('horn2') == true ) {
									var index = this.queue.indexOf('horn2');
									this.queue.splice(index, 1);
									document.getElementById('horn2').classList.remove("mq", "midi-q");
								}
							}
						} else if ( event.target.id == 'vocal2' ) {
							if ( this.queue.includes(event.target.id) == false ) {
								this.queue.push(event.target.id);
								if ( this.queue.includes('vocal1') == true ) {
									var index = this.queue.indexOf('vocal1');
									this.queue.splice(index, 1);
									document.getElementById('vocal1').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('horn1') == true ) {
									var index = this.queue.indexOf('horn1');
									this.queue.splice(index, 1);
									document.getElementById('horn1').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('horn2') == true ) {
									var index = this.queue.indexOf('horn2');
									this.queue.splice(index, 1);
									document.getElementById('horn2').classList.remove("mq", "midi-q");
								}
							}
						} else if ( event.target.id == 'horn1' ) {
							if ( this.queue.includes(event.target.id) == false ) {
								this.queue.push(event.target.id);
								if ( this.queue.includes('vocal1') == true ) {
									var index = this.queue.indexOf('vocal1');
									this.queue.splice(index, 1);
									document.getElementById('vocal1').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('vocal2') == true ) {
									var index = this.queue.indexOf('vocal2');
									this.queue.splice(index, 1);
									document.getElementById('vocal2').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('horn2') == true ) {
									var index = this.queue.indexOf('horn2');
									this.queue.splice(index, 1);
									document.getElementById('horn2').classList.remove("mq", "midi-q");
								}
							}
						} else if ( event.target.id == 'horn2' ) {
							if ( this.queue.includes(event.target.id) == false ) {
								this.queue.push(event.target.id);
								if ( this.queue.includes('vocal1') == true ) {
									var index = this.queue.indexOf('vocal1');
									this.queue.splice(index, 1);
									document.getElementById('vocal1').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('vocal2') == true ) {
									var index = this.queue.indexOf('vocal2');
									this.queue.splice(index, 1);
									document.getElementById('vocal2').classList.remove("mq", "midi-q");
								}
								if ( this.queue.includes('horn1') == true ) {
									var index = this.queue.indexOf('horn1');
									this.queue.splice(index, 1);
									document.getElementById('horn1').classList.remove("mq", "midi-q");
								}
							}
						}
					} else {
						if ( this.queue.includes(event.target.id) == false ) {
							this.queue.push(event.target.id);
						}
					}
				}
				

				// Play & Stop MIDI
				if ( this.queue.length > 0 && this.playing === false ) {
					console.log('play');
					this.playing = setInterval(this.midi, 60000 / 200);
				} else if ( this.tracks.length == 0 && this.queue.length == 0 ) {
					console.log('stop');
					clearInterval(this.playing);
					this.playing = false;
					this.beat = 32;
					// Leafs anim
					TweenMax.to(this.l1, 0.6, {scale: 1, ease: Power1.easeOut});
					TweenMax.to(this.l2, 0.6, {scale: 1, ease: Power1.easeOut});
					TweenMax.to(this.l3, 0.6, {scale: 1, ease: Power1.easeOut});
					TweenMax.to(this.r1, 0.6, {scale: 1, ease: Power1.easeOut});
					TweenMax.to(this.r2, 0.6, {scale: 1, ease: Power1.easeOut});
					TweenMax.to(this.r3, 0.6, {scale: 1, ease: Power1.easeOut});
				}
			},
			midi() {
				// console.log(this.beat);
				if ( this.beat < 32 ) {
					this.beat = this.beat + 1;

					// Queue btn anim
					this.oddBeat = this.beat % 2; 
					for ( var i = this.queue.length - 1; i >= 0; i-- ) {
						if ( this.oddBeat == 1 ){
							document.getElementById(this.queue[i]).classList.add("midi-q");
						} else {
							document.getElementById(this.queue[i]).classList.remove("midi-q");
						}
					}
					// Leafs anim
					if ( this.oddBeat == 1 ){
						TweenMax.to(this.l1, 0.6, {scale: 1.02, ease: Power1.easeOut});
						TweenMax.to(this.l2, 0.6, {scale: 1.02, ease: Power1.easeOut});
						TweenMax.to(this.l3, 0.6, {scale: 1.02, ease: Power1.easeOut});
						TweenMax.to(this.r1, 0.6, {scale: 1.02, ease: Power1.easeOut});
						TweenMax.to(this.r2, 0.6, {scale: 1.02, ease: Power1.easeOut});
						TweenMax.to(this.r3, 0.6, {scale: 1.02, ease: Power1.easeOut});
					} else {
						TweenMax.to(this.l1, 0.6, {scale: 1, ease: Power1.easeOut});
						TweenMax.to(this.l2, 0.6, {scale: 1, ease: Power1.easeOut});
						TweenMax.to(this.l3, 0.6, {scale: 1, ease: Power1.easeOut});
						TweenMax.to(this.r1, 0.6, {scale: 1, ease: Power1.easeOut});
						TweenMax.to(this.r2, 0.6, {scale: 1, ease: Power1.easeOut});
						TweenMax.to(this.r3, 0.6, {scale: 1, ease: Power1.easeOut});
					}
				} else {
					this.beat = 1;

					// Leafs anim
					TweenMax.to(this.l1, 0.6, {scale: 1.02, ease: Power1.easeOut});
					TweenMax.to(this.l2, 0.6, {scale: 1.02, ease: Power1.easeOut});
					TweenMax.to(this.l3, 0.6, {scale: 1.02, ease: Power1.easeOut});
					TweenMax.to(this.r1, 0.6, {scale: 1.02, ease: Power1.easeOut});
					TweenMax.to(this.r2, 0.6, {scale: 1.02, ease: Power1.easeOut});
					TweenMax.to(this.r3, 0.6, {scale: 1.02, ease: Power1.easeOut});
					
					document.querySelectorAll(".midi-btn").forEach(function(e) {
						e.classList.remove("midi-btn-active", "midi-q");

					});

					// Add queue to tracks
					for ( var i = this.queue.length - 1; i >= 0; i-- ) {
						// if ( this.queue[i] == 'vocal1' ) {
						// 	if ( this.tracks.includes('vocal2') == true ) {
						// 		var index = this.tracks.indexOf('vocal2');
						// 		this.tracks.splice(index, 1);
						// 		document.getElementById('vocal2').classList.remove("mq");
						// 	}
						// } else if ( this.queue[i] == 'vocal2' ) {
						// 	if ( this.tracks.includes('vocal1') == true ) {
						// 		var index = this.tracks.indexOf('vocal1');
						// 		this.tracks.splice(index, 1);
						// 		document.getElementById('vocal1').classList.remove("mq");
						// 	}
						// }
						if ( this.queue[i] == 'vocal1' ) {
							if ( this.tracks.includes('vocal2') == true ) {
								var index = this.tracks.indexOf('vocal2');
								this.tracks.splice(index, 1);
								document.getElementById('vocal2').classList.remove("mq");
							}
							if ( this.tracks.includes('horn1') == true ) {
								var index = this.tracks.indexOf('horn1');
								this.tracks.splice(index, 1);
								document.getElementById('horn1').classList.remove("mq");
							}
							if ( this.tracks.includes('horn2') == true ) {
								var index = this.tracks.indexOf('horn2');
								this.tracks.splice(index, 1);
								document.getElementById('horn2').classList.remove("mq");
							}
						} else if ( this.queue[i] == 'vocal2' ) {
							if ( this.tracks.includes('vocal1') == true ) {
								var index = this.tracks.indexOf('vocal1');
								this.tracks.splice(index, 1);
								document.getElementById('vocal1').classList.remove("mq");
							}
							if ( this.tracks.includes('horn1') == true ) {
								var index = this.tracks.indexOf('horn1');
								this.tracks.splice(index, 1);
								document.getElementById('horn1').classList.remove("mq");
							}
							if ( this.tracks.includes('horn2') == true ) {
								var index = this.tracks.indexOf('horn2');
								this.tracks.splice(index, 1);
								document.getElementById('horn2').classList.remove("mq");
							}
						} else if ( this.queue[i] == 'horn1' ) {
							if ( this.tracks.includes('vocal1') == true ) {
								var index = this.tracks.indexOf('vocal1');
								this.tracks.splice(index, 1);
								document.getElementById('vocal1').classList.remove("mq");
							}
							if ( this.tracks.includes('vocal2') == true ) {
								var index = this.tracks.indexOf('vocal2');
								this.tracks.splice(index, 1);
								document.getElementById('vocal2').classList.remove("mq");
							}
							if ( this.tracks.includes('horn2') == true ) {
								var index = this.tracks.indexOf('horn2');
								this.tracks.splice(index, 1);
								document.getElementById('horn2').classList.remove("mq");
							}
						} else if ( this.queue[i] == 'horn2' ) {
							if ( this.tracks.includes('vocal1') == true ) {
								var index = this.tracks.indexOf('vocal1');
								this.tracks.splice(index, 1);
								document.getElementById('vocal1').classList.remove("mq");
							}
							if ( this.tracks.includes('horn1') == true ) {
								var index = this.tracks.indexOf('horn1');
								this.tracks.splice(index, 1);
								document.getElementById('horn1').classList.remove("mq");
							}
							if ( this.tracks.includes('horn2') == true ) {
								var index = this.tracks.indexOf('horn2');
								this.tracks.splice(index, 1);
								document.getElementById('horn2').classList.remove("mq");
							}
						}
						this.tracks.push(this.queue[i]);
					}


					// Play all tracks
					for ( var i = this.tracks.length - 1; i >= 0; i-- ) {
						// Play tracks and clear queue
						this.playlist[this.tracks[i]].play();
						this.queue = [];
						
						document.getElementById(this.tracks[i]).classList.add("midi-q", "midi-btn-active");
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