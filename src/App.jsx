import SignInPage from "./pages/signin-page/signin-page.jsx";
import SignUpPage from "./pages/singup-page/signup.component.jsx";
import './App.scss';
import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component.jsx";
import TokenPage from "./pages/signup-token/signup-token.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
import PharmacyRegistration from "./pages/pharmacy-registration/pharmacy-registration.component.jsx";
import ForgotPassword from "./pages/forgot-password/forgot-password.component.jsx";
import ForgotConfirmEmail from "./pages/forgot-confirmemail/forgot-confirmemail.component.jsx";
import ForgotPasswordCode from "./pages/forgot-password-confirm-code/forgot-password-confirm-code.component.jsx";
import RegisterPharmacyUpload from "./pages/signup-pharmacy-upload/signup-pharmacy-upload.component.jsx";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-spinner-loader';

function App() {

  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
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

// getting a token from google for signin to the backend (authentication with google)
  // const handleGoogleResponse = async(response) =>{
  //   console.log(response.credential);
  //   axios.post("https://unisach-dev.onrender.com/api/users/auth/signin/google",{
  //     token: response.credential,
  //     role: "Pharmacist"
  //     })
  //   .then(response =>{
  //     console.log(response)
  //   })
  //   .catch(err => {
  //     showNotificationError("unable to signin with google")
  //   })
  // }

  // useEffect(() => {
  //   /* global google */
  //   if (window.google) {
      
  //     google.accounts.id.initialize({
  //       client_id: "489301692725-h01d26m3t87bho4rfeq7rddkj9b4pha0.apps.googleusercontent.com",
  //       callback: handleGoogleResponse,
  //     });

  //     google.accounts.id.renderButton(document.getElementById("google-btn"), {
  //       type: "standard",
  //       text: "continue_with",
  //       theme:"outline"
  //     });
  //   }
  // }, []);




  return (
    <div className="App">
      <ToastContainer />
      <Routes>
         <Route path="/" element={<HomePage/>}/>

         <Route path="/login" element={loader ? <Loader show={loader} type = "box"/> : <SignInPage 
         setLoader={setLoader} setUserData={setUserData} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>}/>

         <Route path="/signup" element={loader ? <Loader show={loader} type = "box"/> : <SignUpPage 
         setLoader={setLoader} email={email} setEmail={setEmail} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>}/>

         <Route path="/signup/token" element={loader ? <Loader show={loader} type = "box"/> : <TokenPage 
         setLoader={setLoader} email={email} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess} />}/>

         <Route path="/pharmacy-registration" element={<PharmacyRegistration/>}/>

         <Route path="/pharmacy-registration/upload" element={<RegisterPharmacyUpload/>} />

         <Route path="/forgot-password" element={<ForgotPassword/>} />

         <Route path="/forgot-password/confirm-email" element={loader ? <Loader show={loader} type = "box"/> : <ForgotConfirmEmail 
         setLoader={setLoader} email={email} setEmail={setEmail} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>} />

         <Route path="/forgot-password/password-reset/:token" element={loader ? <Loader show={loader} type = "box"/> : <ForgotPasswordCode 
         setLoader={setLoader} email={email} showNotificationError={showNotificationError} showNotificationSuccess={showNotificationSuccess}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
