import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productName, category, stock });
    setProductName("");
    setCategory("");
    setStock("");
  };

  return (
    <Box
      sx={{
        maxWidth: "500px",
        margin: "auto",
        padding: "16px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Ürün Ekle
      </Typography>
      <form onSubmit={handleSubmit}>
        
        <TextField
          label="Ürün Adı"
          variant="outlined"
          fullWidth
          margin="normal"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Kategori</InputLabel>
          <Select
            labelId="category-label"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Kategori"
          >
            <MenuItem value="Elektronik">Elektronik</MenuItem>
            <MenuItem value="Mobilya">Mobilya</MenuItem>
            <MenuItem value="Giyim">Giyim</MenuItem>
            <MenuItem value="Mutfak">Mutfak</MenuItem>
            <MenuItem value="Spor">Spor</MenuItem>
            <MenuItem value="Market">Market</MenuItem>
            <MenuItem value="Kitap">Kitap</MenuItem>
            <MenuItem value="Oyuncak">Oyuncak</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Stok Miktarı"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
 
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "16px" }}
        >
          Kaydet
        </Button>
      </form>
    </Box>
  );
};

export default AddProduct;
