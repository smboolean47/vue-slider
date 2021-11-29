const app = new Vue({
	el: '#root',
	data: {
		images: [
			{
				src: "https://i0.wp.com/www.meganerd.it/wp-content/uploads/2021/10/squid-game-1-1-e1633733959751.jpg?fit=1280%2C899&ssl=1",
				title: "Titolo Slide 1",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ok-squidgame-season1-episode1-00-44-44-16-1634548372.jpg",
				title: "Titolo Slide 2",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://www.lascimmiapensa.com/wp-content/uploads/2021/10/squid-game-10.jpg",
				title: "Titolo Slide 3",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://st.ilfattoquotidiano.it/wp-content/uploads/2021/10/21/squidgame0011200.jpg",
				title: "Titolo Slide 4",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			},
			{
				src: "https://www.rollingstone.it/wp-content/uploads/2021/11/0_Seong-Gi-Hun-Squid-Game-1178x765.jpg",
				title: "Titolo Slide 5",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum non voluptates eligendi unde obcaecati minima, aut, blanditiis voluptatibus laborum delectus dignissimos necessitatibus earum explicabo ut voluptatum. Doloribus, perferendis in."
			}
		],
		currentImg: 0,
		autoplayID: null
	},
	methods: {
		nextImage: function() {
			if( this.currentImg == this.images.length - 1 ) {
				this.currentImg = 0;
			} else {
				this.currentImg++;
			}
		},
		prevImage: function() {
			if ( this.currentImg == 0 ) {
				this.currentImg = this.images.length - 1;
			} else {
				this.currentImg--;
			}
		},
		selectImg: function(index) {
			this.currentImg = index;
		},
		stopAutoplay: function() {
			clearInterval(this.autoplayID);
		},
		startAutoplay: function() {
			this.autoplayID = setInterval(() => {
				this.nextImage();
			}, 3000);
		}
		// setActiveClass: function(index) {
		// 	if(index == this.currentImg) {
		// 		return 'active';
		// 	} else {
		// 		return '';
		// 	}
		// }
	},
	mounted() {
		// const self = this;

		// setInterval(function(){ 
		// 	self.nextImage();
		// }, 3000);
		this.startAutoplay();
	}
});