import {BrowserRouter,Routes,Route} from "react-router-dom";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sessions from "./components/Sessions";

export default function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>

      <Route path="/" element={<MainPage/>}/>
      <Route path="/sessoes/:idSessions" element={<Sessions/>}></Route>
      </Routes>      
   </BrowserRouter>

  );
}
