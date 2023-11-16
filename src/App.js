import { Route, Routes } from "react-router";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./pages/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";





function App() {
 
  const light = {
    colors : {
      Primary : "#fff8ef",
      Secondary : "#102C57",
      BgColor : "#fff",
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
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/detail/:seq" element={<Detail/>}></Route>
        </Routes>
        <Aside ThemeSelect={ThemeSelect}  themeConfig={themeConfig}/>

      </ThemeProvider>
    </>
  );
}

export default App;
