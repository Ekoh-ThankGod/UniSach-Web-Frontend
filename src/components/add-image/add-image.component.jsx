import "./add-image.styles.scss";
import upload from "../../assets/logo/upload.png"

const AddImage = ({addImageDisplay}) =>{
	return(
		<div className={`add-image ${addImageDisplay}`}>
			<textarea className="add-image__textarea" id="w3review" name="w3review" rows="6" 
			cols="60" placeholder ="Details"></textarea>
			<div className="add-image__container">
				<button className="add-image__icon"><img src={upload} alt="add inage" className="add-image__picture"/></button>
				<span className="add-image__text">Add attachent &nbsp; *docs, pdf, txt files</span>
			</div>
		</div>
	)
}

export default AddImage;