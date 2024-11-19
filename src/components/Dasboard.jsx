import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import ChairIcon from "@mui/icons-material/Chair";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ToysIcon from "@mui/icons-material/Toys";

const Dashboard = () => {
  const categories = [
    { name: "Elektronik", icon: <DevicesIcon sx={{scale:'3'}} />, stock: 400, color: "#4caf50" },
    { name: "Mobilya", icon: <ChairIcon sx={{scale:'3'}}/>, stock: 300, color: "#ff9800" },
    { name: "Giyim", icon: <CheckroomIcon sx={{scale:'3'}}/>, stock: 500, color: "#2196f3" },
    { name: "Mutfak", icon: <KitchenIcon sx={{scale:'3'}}/>, stock: 200, color: "#e91e63" },
    { name: "Spor", icon: <SportsSoccerIcon sx={{scale:'3'}}/>, stock: 150, color: "#9c27b0" },
    { name: "Market", icon: <LocalGroceryStoreIcon sx={{scale:'3'}}/>, stock: 350, color: "#3f51b5" },
    { name: "Kitap", icon: <MenuBookIcon sx={{scale:'3'}}/>, stock: 250, color: "#673ab7" },
    { name: "Oyuncak", icon: <ToysIcon sx={{scale:'3'}}/>, stock: 180, color: "#ff5722" },
  ];

  return (
    <div style={{ padding: "16px" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: "32px",
          position: "relative",
          "&:after": {
            content: '""',
            display: "block",
            width: "50%",
            height: "2px",
            backgroundColor: "#4581DA",
            margin: "8px auto 0",
          },
        }}
      >
        Genel Stok Miktarı (adet)
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                },
              }}
            >
              <div
                style={{
                  fontSize: "3.5rem",
                  color: category.color,
                  marginBottom: "8px",
                }}
              >
                {category.icon}
              </div>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ textAlign: "center" }}
                >
                  {category.name}
                </Typography>
                <Typography
                  variant="h4"
                  color="textPrimary"
                  sx={{ textAlign: "center", color: category.color }}
                >
                  {category.stock}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
