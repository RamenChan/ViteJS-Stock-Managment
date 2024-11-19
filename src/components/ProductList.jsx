import React, { useState } from "react";
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

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Telefon", category: "Elektronik", stock: 100 },
    { id: 2, name: "Bilgisayar", category: "Elektronik", stock: 100 },
    { id: 3, name: "Tablet", category: "Elektronik", stock: 50 },
    { id: 4, name: "Klavye + Mouse Seti", category: "Elektronik", stock: 50 },
    { id: 5, name: "Soğutucu", category: "Elektronik", stock: 100 },
    { id: 6, name: "OEM Parça", category: "Elektronik", stock: 100 },
    { id: 7, name: "Koltuk Takımı", category: "Mobilya", stock: 300 },
    { id: 8, name: "Pantolon + T-shirt", category: "Giyim", stock: 500 },
    { id: 9, name: "Kesme Tahtası", category: "Mutfak", stock: 200 },
    { id: 10, name: "Futbol Topu", category: "Spor", stock: 150 },
    { id: 11, name: "Kedi Maması", category: "Market", stock: 350 },
    { id: 12, name: "insan 2.0", category: "Kitap", stock: 250 },
    { id: 13, name: "Beyblade", category: "Oyuncak", stock: 180 },

  ]);

  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentProduct(null);
  };

  const handleSave = () => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === currentProduct.id ? currentProduct : p
      )
    );
    handleClose();
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
                    onClick={() => handleDeleteClick()}
                    sx={{ marginRight: "8px" }}
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
