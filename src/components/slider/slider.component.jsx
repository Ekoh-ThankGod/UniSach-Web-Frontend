import "./slider.styles.scss";
import {useState} from "react";


const Slider = () => {

	const slides = [{id: 1, text: "1 ok I have been using Unisach for a period of time now", number: 0},
		{id: 2, text: "2 hello I have been using Unisach for a period of time now", number: 100},
		{id: 3, text: "3 hi I have been using Unisach for a period of time now", number: 200},
		{id: 4, text: "4 how I have been using Unisach for a period of time now", number: 300},
		{id: 5, text: "5 far I have been using Unisach for a period of time now", number: 400}]

	let  [currentSlide, setCurrentSlide] = useState(1);
	const [newSlides, setNewSlides] = useState(slides);

	const maxSlide = slides.length;
	
	const goToSlide = (slide) => {
		slides.map((el, i) => {
			let newNumber = el.number = 100 * (i-slide);
			setNewSlides(slides);
			return newNumber;
		});
	}


	const nextSlide = ()=>{

		if(currentSlide === maxSlide - 1){
			setCurrentSlide(0);
		}
		else{
			setCurrentSlide(currentSlide + 1);
		}
		goToSlide(currentSlide);
	}

	// const previousSlide = () =>{
		
	// 	if(currentSlide === 0){
	// 		setCurrentSlide(maxSlide-1)
	// 	}

	// 	else{
	// 		setCurrentSlide(currentSlide - 1);
	// 	}
	// 	goToSlide(currentSlide);
	// }


	return(
		<div className="slider">
			{
				newSlides.map(slide => {
					const {id, text, number} = slide;
					return(
						<div key ={id} className="slider__slide" style={{transform: `translateX(${number}%)`}} >
							<div className="slider__testimonial">
								<blockquote className="slider__text">{text}</blockquote>
							</div>
						</div>
					)
				})
			}
			{/*<button onClick={(e) =>previousSlide(e)} className="slider__button slider__button-left">&larr;</button>*/}
			<button onClick={(e) =>nextSlide(e)} className="slider__button slider__button-right">&rarr;</button>
		</div>
	)
}

export default Slider;