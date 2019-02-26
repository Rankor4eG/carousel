(function () {
	// body...
	let	gallery = document.getElementsByClassName('gallery')[0];

	let galleryContent = gallery.getElementsByClassName('gallery-contant')[0];
	//let	galleryContainer = gallery.getElementsByClassName('gallery-container')[0];
	
	let prevButton = gallery.getElementsByClassName('prev-button')[0];
	let nextButton = gallery.getElementsByClassName('next-button')[0];

	//const imgWidth = galleryContainer.clientWidth;
	let currentImgIndex = 0;
	let imgTotalCount = galleryContent.children.length;


	prevButton.addEventListener('click', function(){
		currentImgIndex--;
		galleryContent.style.transform = 'translateX(-'+ currentImgIndex+ '00%)';
		selectImg(currentImgIndex);
	})

	nextButton.addEventListener('click', function(){
		currentImgIndex++;
		 if (currentImgIndex === imgTotalCount){
		 	currentImgIndex = 0;
		 }
		// //galleryContent.style.transform = 'translateX(-'+ currentImgIndex+ '00%)';
	////	selectImg(currentImgIndex);

		let imgs = galleryContent.getElementsByTagName('img');
		galleryContent.append(imgs[currentImgIndex].cloneNode());
		currentImgIndex++;
		selectImg(currentImgIndex);
		setTimeout( function(){
			imgs[0].remove();
		},1000);
	});

		function selectImg(index){
			if (index >= imgTotalCount) {
				currentImgIndex = 0;
			}
			if (index < 0 ) {
				currentImgIndex = imgTotalCount - 1;
			}
			galleryContent.style.transform = 'translateX(-'+ currentImgIndex+ '00%)';
		}
})();