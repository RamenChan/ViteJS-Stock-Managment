import React from "react";
import { List, ListItem, ListItemText, ListItemIcon, Drawer, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 240,
                    boxSizing: "border-box",
                    backgroundColor: "#1E1E2D", 
                    color: "#fff", 
                },
            }}
        >
            <Toolbar>
                <Typography
                    variant="h5" 
                    noWrap
                    sx={{
                        textAlign: "center",
                        width: "100%",
                        fontWeight: "bold",
                        padding: "20px 0",
                    }}
                >
                   AED <br/>Stok Yönetimi
                </Typography>
            </Toolbar>
            <List>
                
                <ListItem button component={Link} to="/">
                    <ListItemIcon>
                        <DashboardIcon style={{ color: "#4DB972"}} />
                    </ListItemIcon>
                    <ListItemText
                        primary=" Dashboard"
                        primaryTypographyProps={{
                            fontSize: "1.5rem", 
                            fontWeight: "bold", 
                            color: "#4581DA"
                        }}
                    />
                </ListItem>

                <ListItem button component={Link} to="/add-product">
                    <ListItemIcon>
                        <AddBoxIcon style={{ color: "#4DB972" }} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Ürün Ekle"
                        primaryTypographyProps={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#4581DA"
                        }}
                    />
                </ListItem>

                <ListItem button component={Link} to="/product-list">
                    <ListItemIcon>
                        <ListAltIcon style={{ color: "#4DB972" }} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Ürün Listele"
                        primaryTypographyProps={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            color: "#4581DA"
                        }}
                    />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
