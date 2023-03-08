import "./add-image.styles.scss";
import addImage from "../../assets/logo/addimage.png"

const AddImage = ({addImageDisplay}) =>{
	return(
		<div className={`add-image ${addImageDisplay}`}>
			<textarea id="w3review" name="w3review" rows="6" 
			cols="60" placeholder ="Details"></textarea>
			<div className="add-image__container">
				<img src={addImage} alt="add inage" className="add-image__picture"/>
				<span className="add-image__text">Add image</span>
			</div>
		</div>
	)
}

export default AddImage;