<template>
	<div class="nav" ref="navBg">
		<div class="nav-logo" ref="navLogo">
			<svg class="nav-logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.1 318.9">
				<g id="logo-base">
					   <path d="M208,.5a90.2,90.2,0,0,1,28.5,36H380l27-36Z" transform="translate(0.1 4)" fill="white"/>
					   <path d="M208,144.5h90l27-36H236.5A90.2,90.2,0,0,1,208,144.5Z" transform="translate(0.1 4)" fill="white"/>
					   <path d="M118,144.5h36a72,72,0,1,0,0-144H-.1v36H154a36,36,0,0,1,0,72H51.6l25.9,36L181,288.5h45L128.8,158.9Z" transform="translate(0.1 4)" fill="white"/>
				</g>
			</svg>
		</div>
		<ul class="nav-item-container">
			<span class="nav-line" ref="navLine">
				<div class="nav-line-txt-container">
					<span :class="{ navLineTxtActive: navHoverProjects}" class="nav-line-txt">PROJECTS</span>
					<span :class="{ navLineTxtActive: navHoverAbout}" class="nav-line-txt ">ABOUT</span>
					<!-- <span :class="{ navLineTxtActive: navHoverContact}" class="nav-line-txt">CONTACT</span> -->
				</div>
			</span>
			<li class="nav-item nav-projects" ref="navProjects">
				<router-link to="/" active-class="navActive" class="nav-link" @mouseenter.native="navHover = '/'" @mouseleave.native="navHover = null">
					<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					  	<g id="monitor">
					    	<path id="computer-1" d="M0,0V19H24V0ZM22,17H2V2H22Zm-6.6,4L18,24H6l2.6-3Z"/>
					  	</g>
					  	<g id="screen" class="nav-hover">
					    	<rect x="3" y="3" width="18" height="13"/>
					  	</g>
					</svg>
				</router-link>
			</li>
			<li class="nav-item nav-about" ref="navAbout">
				<router-link to="/about" exact active-class="navActive" class="nav-link" @mouseenter.native="navHover = '/about'" @mouseleave.native="navHover = null">
					<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213 363">
						<g id="body">
						    <path d="M106.5,219.9c31.1,0,56.4-30.7,56.4-68.5S154.6,83,106.5,83s-56.4,30.7-56.4,68.5,25.2,68.5,56.4,68.5Zm0,0" transform="translate(0)"/>
						    <path d="M0,324.5c0-2.3,0-.6,0,0Zm0,0" transform="translate(0)"/>
						    <path d="M212.8,321.7c-1-65.9-9.6-84.6-75.5-96.5,0,0-9.3,11.8-30.9,11.8s-30.9-11.8-30.9-11.8C10.5,236.9,1.4,255.4.2,319.6c-.1,5.2-.1,5.5-.2,4.9,0,1.1,0,3.3,0,6.9,0,0,15.7,31.6,106.5,31.6s106.5-31.6,106.5-31.6c0-2.4,0-4,0-5.1a45.3,45.3,0,0,1-.1-4.6Zm0,0" transform="translate(0)"/>
						</g>
						<g id="afro" class="nav-hover">
						    <path d="M44,157S26.3,76,107,76c78.7,0,62,81,62,81,31.5-.1,76-157-61.5-157C-39,0,12.2,155.7,44,157Z" transform="translate(0)"/>
						</g>
					</svg>
				</router-link>
			</li>
			<!-- <li class="nav-item nav-contact" ref="navContact">
				<router-link to="/contact" active-class="navActive" class="nav-link" @mouseenter.native="navHover = '/contact'" @mouseleave.native="navHover = null">
					<svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 34.1">
						<g id="closed">
							<polygon points="12 22.9 0 13.1 24 13.1 12 22.9"/>
							<polygon points="6.6 21 0 15.7 0 28.2 6.6 21"/>
							<polygon points="17.4 21 24 28.2 24 15.7 17.4 21"/>
							<polygon points="15.9 22.3 12 25.4 8.1 22.3 0 31.1 24 31.1 15.9 22.3"/>
						</g>
						<g id="open">
							<polygon points="6.6 21 0 15.7 0 28.2 6.6 21"/>
							<polygon points="17.4 21 24 28.2 24 15.7 17.4 21"/>
							<polygon points="12 18 0 31.1 24 31.1 12 18"/>
							<polygon points="24 13.1 12 0 0 13.1 0 13.1 8 19.6 12 15.1 16.1 19.5 24 13.1 24 13.1"/>
						</g>
					</svg>
				</router-link>
			</li> -->
		</ul>
	</div>
</template>





<script>
	export default {
		data() {
			return {
				navBg: null,
				navLogo: null,
				navAbout: null,
				navHoverAbout: null,
				navProjects: null,
				navHoverProjects: null,
				//navContact :null,
				// navHoverContact: null,
				navLine: null,
				navHover: null,
				navActive: null
			}
		},
		mounted() {
			// Animation setup
			this.navBg = this.$refs.navBg;
			this.navLogo = this.$refs.navLogo;
			this.navAbout = this.$refs.navAbout;
			this.navProjects = this.$refs.navProjects;
			//this.navContact = this.$refs.navContact;
			this.navLine = this.$refs.navLine;

			// Begin animation
			this.navIn();

			// Set nav line position
			this.updateActive();

			// Refresh nav on screen size change
			window.addEventListener('resize', () => {
				var mq = window.matchMedia( "(max-width: 768px)" )
				var elem = document.getElementsByClassName("nav")[0];
				if (elem.currentStyle) {
				    var displayStyle1 = elem.currentStyle.width;
				    var displayStyle2 = elem.currentStyle.height;
				} else if (window.getComputedStyle) {
				    var displayStyle1 = window.getComputedStyle(elem, null).getPropertyValue("width");
				    var displayStyle2 = window.getComputedStyle(elem, null).getPropertyValue("height");
				}
				//var check = window.getComputedStyle(elem, null).getPropertyValue("display");
				if (mq.matches) {
					this.$emit('mobile', true);
					if (displayStyle1 == "60px"){
						this.reloadNav();
					}
				} else {
					this.$emit('mobile', false);
					if (displayStyle2 == "60px"){
						this.reloadNav();
					}
				}
			});
			var mq = window.matchMedia( "(max-width: 768px)" )
			if (mq.matches) {
				this.$emit('mobile', true);
			} else {
				this.$emit('mobile', false);
			}
			window.addEventListener('orientationchange', () => {
				this.reloadNav();
			});

			// Remove touch device hover
			window.addEventListener('touchstart', () => {
				document.getElementsByClassName('nav-line-txt-container')[0].style.display = "none";
			});
		},
		watch: {
			'$route' (to, from) {
		        // Set nav line position
		        this.updateActive();
		    },
		    navHover() {
		    	if (this.navHover == '/'){
		    		this.navHoverAbout = false;
		    		this.navHoverProjects = true;
		    		//this.navHoverContact = false;
					TweenMax.to(this.navLine, .5, { y:  0, ease: Power4.easeInOut });
				} else if (this.navHover == '/about'){
					this.navHoverAbout = true;
		    		this.navHoverProjects = false;
		    		//this.navHoverContact = false;
					TweenMax.to(this.navLine, .5, { y:  60, ease: Power4.easeInOut });
				// } else if (this.navHover == '/contact'){
				// 	this.navHoverAbout = false;
		  //   		this.navHoverProjects = false;
		  //   		this.navHoverContact = true;
				// 	TweenMax.to(this.navLine, .5, { y:  120, ease: Power4.easeInOut });
				} else {
					this.navHoverAbout = false;
		    		this.navHoverProjects = false;
		    		this.navHoverContact = false;
					TweenMax.to(this.navLine, .5, { y:  this.navActive, ease: Power4.easeInOut });
				}
		    }
		},
		methods: {
			navIn() {
				// Animate in
				var navIn = new TimelineMax();
				var mq = window.matchMedia( "(max-width: 768px)" );
				if (mq.matches) {
				    // Window width < 768px
				    navIn.to(this.navBg, 1, { height: 60, ease: Power4.easeInOut }, "0")
					navIn.to(this.navAbout, 1, { opacity: 1 }, ".7")
					navIn.to(this.navProjects, 1, { opacity: 1 }, ".9")
					//navIn.to(this.navContact, 1, { opacity: 1 }, "1.1")
					navIn.add(this.loaded, "1")
				}
				else {
				    // Window width > 768px
				    navIn.to(this.navBg, 1, { width: 60, ease: Power4.easeInOut }, "0")
					navIn.to(this.navLogo, 1, { opacity: 1 }, ".5")
					navIn.to(this.navAbout, 1, { opacity: 1 }, ".7")
					navIn.to(this.navProjects, 1, { opacity: 1 }, ".9")
					//navIn.to(this.navContact, 1, { opacity: 1 }, "1.1")
					navIn.to(this.navLine, .5, { scaleY: 1 }, "1.1")
					navIn.add(this.loaded, "1")
				}
			},
			updateActive() {
				if (this.$route.path == '/about') {
					this.navActive = 60;
					//console.log('asdasd');
					if(document.getElementsByClassName('nav-link')[0].classList.contains("navActive")){
						window.setTimeout(() => {
							document.getElementsByClassName('nav-link')[0].classList.add("navDisable");
						},1);	
					}
					//document.getElementsByClassName('nav-link')[0].classList.add("navDisable");
				} else if (this.$route.path == '/' || this.$route.path == '/threshold' || this.$route.path == '/urban' || this.$route.path == '/seizure' || this.$route.path == '/explosion' || this.$route.path == '/decadence') {
					this.navActive = 0;
					//document.getElementsByClassName('nav-link')[0].classList.remove("navDisable");
				// } else if (this.$route.path == '/contact') {
				// 	this.navActive = 120;
				}
				TweenMax.to(this.navLine, .5, { y:  this.navActive, ease: Power4.easeInOut });
			},
			loaded() {
				this.$emit('loaded', true);
			},
			reloadNav() {
				TweenLite.set(this.navBg, {clearProps:"all"});
				TweenLite.set(this.navLogo, {clearProps:"all"});
				TweenLite.set(this.navAbout, {clearProps:"all"});
				TweenLite.set(this.navProjects, {clearProps:"all"});
				//TweenLite.set(this.navContact, {clearProps:"all"});
				TweenLite.set(this.navLine, {clearProps:"all"});
				this.updateActive();
				this.navIn();
			}
		},
	}
</script>