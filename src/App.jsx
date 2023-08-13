import React from "react";
import ThemeProvider from "./ThemeProvider.jsx";
import Page from "./Page.jsx"



function App() {

  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}

export default App;
