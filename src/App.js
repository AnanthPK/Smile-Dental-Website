import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Book from './Book';



function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Book" element={<Book/>}></Route>
        
      </Routes>   

      

{/* last */}
  </div> 
  );
}

export default App;
