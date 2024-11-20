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
import api from "../api/axios"; // Axios API bağlantısını ekleyin

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Hata mesajı için state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      name: productName,
      category: category,
      stock: parseInt(stock, 10), // Stok miktarını sayıya çevir
    };

    try {
      await api.post("/Products", productData); // API'ye POST isteği gönder
      setProductName("");
      setCategory("");
      setStock("");
      setErrorMessage(""); // Başarılı olursa hata mesajını temizle
      alert("Ürün başarıyla eklendi!"); // Kullanıcıya geri bildirim
    } catch (error) {
      console.error("Ürün eklenirken hata oluştu:", error);
      setErrorMessage("Ürün eklenirken bir hata oluştu. Lütfen tekrar deneyin."); // Hata mesajı
    }
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

        {/* Hata Mesajı */}
        {errorMessage && (
          <Typography
            color="error"
            sx={{ textAlign: "center", marginTop: "8px" }}
          >
            {errorMessage}
          </Typography>
        )}

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
