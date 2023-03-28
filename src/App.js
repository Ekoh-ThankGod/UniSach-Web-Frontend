import SignInPage from "./pages/signin-page/signin-page.jsx";
import SignUpPage from "./pages/singup-page/signup.component.jsx";
import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/signin" element={<SignInPage/>}/>
         <Route path="/signup" element={<SignUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
