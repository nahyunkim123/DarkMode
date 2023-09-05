import { Route, Routes } from "react-router";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./pages/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import Example3 from "./pages/Example3";
// import { NavLink } from "react-router-dom";



function App() {
 
  const light = {
    colors : {
      Primary : "#fff8ef",
      Secondary : "#102C57"
  
    }
  }
  const dark ={
    colors : {
      Primary : "#102C57",
      Secondary : "#fff8ef"
  
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
        {/* <Route path="/" element={<Example3/>}></Route> */}
        <Route path="/detail" element={<Detail/>}></Route>
      </Routes>
      <Aside ThemeSelect={ThemeSelect}  themeConfig={themeConfig}/>

      </ThemeProvider>
    </>
  );
}

export default App;
