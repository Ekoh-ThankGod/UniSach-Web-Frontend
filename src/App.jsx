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

import Loader from 'react-spinner-loader';

function App() {

  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/login" element={loader ? <Loader show={loader} type = "box"/> : <SignInPage setLoader={setLoader} setUserData={setUserData}/>}/>
         <Route path="/signup" element={loader ? <Loader show={loader} type = "box"/> : <SignUpPage setLoader={setLoader} email={email} setEmail={setEmail}/>}/>
         <Route path="/signup/token" element={loader ? <Loader show={loader} type = "box"/> : <TokenPage setLoader={setLoader} email={email} />}/>
         <Route path="/pharmacy-registration" element={<PharmacyRegistration/>}/>
         <Route path="/pharmacy-registration/upload" element={<RegisterPharmacyUpload/>} />
         <Route path="/forgot-password" element={<ForgotPassword/>} />
         <Route path="/forgot-password/confirm-email" element={loader ? <Loader show={loader} type = "box"/> : <ForgotConfirmEmail setLoader={setLoader} email={email} setEmail={setEmail}/>} />
         <Route path="/forgot-password/password-reset/:token" element={loader ? <Loader show={loader} type = "box"/> : <ForgotPasswordCode setLoader={setLoader} email={email}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
