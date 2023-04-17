import "./add-item-button.styles.scss";

const AddItemButton = ({setDisplayPopUp, setFilter}) => {

	const handlePopUp = () => {
		setDisplayPopUp("pop-up__display");
		setFilter("inventory-oral-drugs__filter");
	}

	return(
		<div className="add-item">
			<button onClick={handlePopUp} className="add-item__button">Add Item</button>
		</div>
	)
}

export default AddItemButton;