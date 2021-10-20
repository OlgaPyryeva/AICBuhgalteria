import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../navbar/Logo";
import "./NavBar.css";

export default function ButtonAppBar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className={scroll ? "bg-color" : "bg-white"}>
      <AppBar>
        <Toolbar>
          <Logo />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Как это работает
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Почему AIC
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Наши преимущества
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            О нас пишут
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Тарифы
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Новости
          </Typography>
          <Button color="inherit">Подключиться</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
