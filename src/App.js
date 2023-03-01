import Navigation from "./components/navigation/navigation.component.jsx";
import SignInPage from "./pages/signin-page/signin-page.jsx";
import Footer from "./components/footer/footer.component.jsx";
import SignUpPage from "./pages/singup-page/signup.component.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
     <Navigation/>
     {/*<SignInPage/>*/}
     <SignUpPage/>
     <Footer/>
    </div>
  );
}

export default App;
