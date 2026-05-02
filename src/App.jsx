import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";

const App = () => {
  return ( 
    <Router>
    <div className="App">
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/import" element={<Home2/>}/>
        <Route path="/switch" element={<Home3/>}/>
        <Route path="/home" element={<Home4/>}/>
        <Route path="/continue" element={<Home5/>}/>
      </Routes>
      
    </div>
    </Router>
   );
}
 
export default App;