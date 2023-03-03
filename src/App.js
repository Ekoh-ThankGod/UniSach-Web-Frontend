import Navigation from "./components/navigation/navigation.component.jsx";
import SignInPage from "./pages/signin-page/signin-page.jsx";
import Footer from "./components/footer/footer.component.jsx";
import SignUpPage from "./pages/singup-page/signup.component.jsx";
import './App.css';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
         <Route path="/" element={<SignInPage/>}/>
         <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
