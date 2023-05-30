// import FileQuery from "./components/pages/FileQuery";
import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import { createTheme } from "@mui/material";


function App() {



  const light = createTheme({
    palette: {
      primary: {
        main: "#628902",
      },
      secondary: {
        main: "#000000",
      },
    },
    typography: {
      fontFamily: "Work+Sans",
      fontWeightLight: 100,
      fontWeightRegular: 300,
      fontWeightMedium: 300,
      fontWeightBold: 400,
    },
  });


  return (
    <>
    <ThemeProvider theme={light}>
    <NavBar/>
    <Home/> 
    </ThemeProvider>
    </>
  );
}



export default App;
