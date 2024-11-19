import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from './components/Navbar'
import Dashboard from './components/Dasboard';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

const theme = createTheme({
  palette: {
    primary: {
      main: "#29367B", 
    },
    secondary: {
      main: "#FF5722", 
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ display: "flex" }}>
          <Navbar />
          <div style={{ flexGrow: 1, marginLeft: 10, padding: "16px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/product-list" element={<ProductList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};


export default App;