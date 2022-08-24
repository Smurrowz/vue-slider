// console.log('slider')
let slideGo
const slides = [
	{
		url: './img/01.jpg',
		title: 'Svezia ',
	},

	{
		url: './img/02.jpg',
		title: 'Perù ',
	},

	{
		url: './img/03.jpg',
		title: 'Chile ',
	},
	{
		url: './img/04.jpg',
		title: 'Argentina ',
	},
	{
		url: './img/05.jpg',
		title: 'Colombia ',
	},
]
const app = new Vue({
	el: '#root',
	data: {
		slides,
		slideCounter: 0,
		classes: {
			slideClasses: 'slide active',
			wrapperClasses: 'slides-wrapper',
			sliderClasses: 'slider',
			containerClasses: 'container',
			arrowClasses: 'arrows',
			prevClasses : 'arrow-prev',
			nextClasses : 'arrow-next',
			chevronLeftClasses:'fa-solid fa-chevron-left',
			chevronRightClasses:'fa-solid fa-chevron-right',

		}
	},
	mounted: function(){
		this.autoplay()
	},
	methods: {
		slideNext() {
			if (this.slideCounter < this.slides.length - 1) {
				this.slideCounter += 1;
			} else {
				this.slideCounter = 0;
			}
		},
		slidePrev() {
			if (this.slideCounter === 0) {
				this.slideCounter = this.slides.length - 1;
			} else {
				this.slideCounter -= 1;
			}
		},
		autoplay() {
			slideGo = setInterval(this.slideNext, 3000)
			console.log('speed up')
		},
		stopAutoplay() {
			clearInterval(slideGo)
			console.log('stop')
		},
		
	},

})

