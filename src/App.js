import { Route, Routes } from "react-router";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./pages/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Example3 from "./pages/Example3";
import Example from "./pages/Example";
// import Example2 from "./components/Example2";
import Example4 from "./pages/Example4";
import Datepicker from "./pages/Datepicker";
// import { NavLink } from "react-router-dom";



function App() {
 
  const light = {
    colors : {
      Primary : "#fff8ef",
      Secondary : "#102C57",
      BgColor : "#f0f4f8",
      Color : "black",
      ContentBg : "#fff"
      
  
    }
  }
  const dark ={
    colors : {
      Primary : "#102C57",
      Secondary : "#fff8ef",
      BgColor : "#333",
      Color : "#fff8ef",
      ContentBg : "#424242",
      SelectBg : "#707173"
  
    }
  } 
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = () =>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }

  
  return (
    <>
      <ThemeProvider theme={DarkMode}>
        {/* 반드시 최상단에 위치해야 함 */}
      <GlobalStyle/>
     {/* <ul>
      <li><NavLink to="/">홈</NavLink></li>
      <li><NavLink to="/detail">디테일</NavLink></li>
     </ul> */}
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/ex" element={<Example/>}></Route>
        {/* <Route path="/ex2" element={<Example2/>}></Route> */}
        <Route path="/ex3" element={<Example3/>}></Route>
        <Route path="/ex4" element={<Example4/>}></Route>
        <Route path="/detail/:seq" element={<Detail/>}></Route>
        <Route path="/datepicker" element={<Datepicker/>}></Route>
      </Routes>
      <Aside ThemeSelect={ThemeSelect}  themeConfig={themeConfig}/>

      </ThemeProvider>
    </>
  );
}

export default App;
