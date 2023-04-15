import "./mobile-app.styles.scss";
import mobile from "../../assets/logo/mobile-app.png"

const MobileApp =() => {
	return(

		<div className="mobile-app">
			<img className="mobile-app__pix" src={mobile} alt="mobile app" />
			<div className="mobile-app__wrapper">
				<h2 className="mobile-app__h2">Mobile app availability</h2>
				<p className="mobile-app__p">
					Access medication health tips, medical reports,
					<br/> reminders, interaction checkers and many other<br/>
					user friendly experience within the app
				</p>
			</div>
		</div>
	)
}

export default MobileApp;