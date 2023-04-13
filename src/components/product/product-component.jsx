import "./product.styles.scss";

const Product = () =>  {
	return(
		<div className="product">
			<ul className="product-list">
				<li className="product-list__header">Product</li>
				<li className="product-list__text">About us</li>
				<li className="product-list__text">Career</li>
				<li className="product-list__text">Blog</li>
			</ul>
			<ul className="product-list">
				<li className="product-list__header">Product</li>
				<li className="product-list__text">Shop</li>
				<li className="product-list__text">Our offering</li>
				<li className="product-list__text">Become a partner</li>
				<li className="product-list__text">FAQs</li>
			</ul>
			<ul className="product-list">
				<li className="product-list__header">Product</li>
				<li className="product-list__text">Cookie policy</li>
				<li className="product-list__text">Cookie policy</li>
				<li className="product-list__text">Terms and conditions</li>
			</ul>
		</div>
	)
}

export default Product;