import {BrowserRouter,Routes,Route} from "react-router-dom";
//import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sessions from "./components/SessionPage/Sessions"
import Seats from "./components/SeatsPage/Seats"
import Success from "./components/Success";

export default function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>

      <Route path="/" element={<MainPage/>}/>
      <Route path="/sessoes/:idSessions" element={<Sessions/>}></Route>
      <Route path="/assentos/:idSessions" element={<Seats/>}></Route>
      <Route path="/sucesso" element={<Success/>}> </Route>
      </Routes>      
   </BrowserRouter>

  );
}