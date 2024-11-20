import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import api from "../api/axios"; // Axios API bağlantısını buradan alın

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Verileri API'den çek
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/Products"); // API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error("Veriler çekilirken hata oluştu:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProduct(null);
  };

  const handleSave = async () => {
    try {
      await api.put(`/Products/${currentProduct.id}`, currentProduct); // Veritabanında güncelle
      setProducts((prev) =>
        prev.map((p) => (p.id === currentProduct.id ? currentProduct : p))
      );
      handleClose();
    } catch (error) {
      console.error("Ürün güncellenirken hata oluştu:", error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await api.delete(`/Products/${id}`); // API'den sil
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Ürün silinirken hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Ürün Adı</TableCell>
              <TableCell>Kategori</TableCell>
              <TableCell>Stok</TableCell>
              <TableCell>İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(product)}
                    sx={{ marginRight: "8px" }}
                  >
                    Düzenle
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteClick(product.id)}
                  >
                    Sil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Düzenleme Pop-up */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ürün Düzenle</DialogTitle>
        <DialogContent>
          {currentProduct && (
            <>
              <TextField
                label="Ürün Adı"
                name="name"
                value={currentProduct.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Kategori"
                name="category"
                value={currentProduct.category}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Stok"
                name="stock"
                type="number"
                value={currentProduct.stock}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            İptal
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductList;
