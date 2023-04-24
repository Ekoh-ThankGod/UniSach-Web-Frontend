import SignInPage from "./pages/signin-page/signin-page.jsx";
import SignUpPage from "./pages/singup-page/signup.component.jsx";
import './App.scss';
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component.jsx";
import TokenPage from "./pages/signup-token/signup-token.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
import PharmacyRegistration from "./pages/pharmacy-registration/pharmacy-registration.component.jsx";
import ForgotPassword from "./pages/forgot-password/forgot-password.component.jsx";
import ForgotConfirmEmail from "./pages/forgot-confirmemail/forgot-confirmemail.component.jsx";
import ForgotPasswordCode from "./pages/forgot-password-confirm-code/forgot-password-confirm-code.component.jsx";
import RegisterPharmacyUpload from "./pages/signup-pharmacy-upload/signup-pharmacy-upload.component.jsx";
import ProfilePage from "./pages/profile/profile.component.jsx";
import Protected from "./components/protected/protected.component.jsx";
import Inventory from "./pages/inventory/inventory.component.jsx";
import PlanPage from "./pages/plan/plan-page.component.jsx";
import InventoryOralDrugs from "./pages/inventory-oral-drugs/inventory-oral-drugs.component.jsx";
import StorePage from "./pages/store-page/store-page.component.jsx";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-spinner-loader';

function App() {

  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [displayPopUp, setDisplayPopUp] = useState("");
  const [filter, setFilter] =useState("");
//  Using the loader library to display success or failure during api calls
  const showNotificationError = (notification) => {
        toast.error(notification, {
            position: toast.POSITION.TOP_RIGHT
        });
  };

  const showNotificationSuccess = (notification) => {
      toast.success(notification, {
          position: toast.POSITION.TOP_RIGHT
      });
  };

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
         <Route path="/" element={loader ? <Loader show={loader} type = "box"/> :<HomePage setLoader={setLoader} />}/>

         <Route path="/login" element={loader ? <Loader show={loader} type = "box"/> : <SignInPage 
         setLoader={setLoader} setUserData={setUserData} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>}/>

         <Route path="/signup" element={loader ? <Loader show={loader} type = "box"/> : <SignUpPage 
         setLoader={setLoader} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>}/>

         <Route path="/signup/token" element={loader ? <Loader show={loader} type = "box"/> : <TokenPage 
         setLoader={setLoader} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess} />}/>

         <Route path="/pharmacy-registration" element={loader ? <Loader show={loader} type = "box"/> :<PharmacyRegistration setLoader={setLoader} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>}/>

         <Route path="/pharmacy-registration/upload" element={<RegisterPharmacyUpload/>} />

         <Route path="/forgot-password" element={<ForgotPassword/>} />

         <Route path="/forgot-password/confirm-email" element={loader ? <Loader show={loader} type = "box"/> : <ForgotConfirmEmail 
         setLoader={setLoader} email={email} setEmail={setEmail} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>} />

         <Route path="/forgot-password/password-reset/:token" element={loader ? <Loader show={loader} type = "box"/> : <ForgotPasswordCode 
         setLoader={setLoader} email={email} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>}/>

         <Route path="/dashboard" element={loader ? <Loader show={loader} type = "box"/> :<Protected><ProfilePage setLoader={setLoader}/></Protected>}/>

         <Route path="/inventory" element={loader ? <Loader show={loader} type = "box"/> :<Protected><Inventory filter={filter} setFilter={setFilter} displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp} setLoader={setLoader}/></Protected>}/>

          <Route path="/plan" element={loader ? <Loader show={loader} type = "box"/> :<Protected><PlanPage setLoader={setLoader}/></Protected>}/>

          <Route path="/inventory/oral-drugs" element={loader ? <Loader show={loader} type = "box"/> :<Protected><InventoryOralDrugs filter={filter} setFilter={setFilter} displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp} setLoader={setLoader}/></Protected>}/>

          <Route path="/store-profile" element={<Protected><StorePage displayPopUp={displayPopUp} filter={filter} setDisplayPopUp={setDisplayPopUp} setFilter={setFilter} /></Protected>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
