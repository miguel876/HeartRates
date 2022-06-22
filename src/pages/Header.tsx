import { IconButton, Drawer, Link, MenuItem, Stack, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button, DrawerContainer, Logo, Toolbar, ButtonsMenu } from "../styles/header";
import properties from '../properties.json'

const headersData = [
  {
    label: "Chart",
    href: "/chart",
  },
  {
    label: "Table",
    href: "/table",
  },
];

export const Header = () => {
  const [ state, setState ] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar>
        {logo}
        <ButtonsMenu>{getMenuButtons()}</ButtonsMenu>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <DrawerContainer>{getDrawerChoices()}</DrawerContainer>
        </Drawer>

        <div>{logo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const logo = (
    <Link 
    {...{
      component: RouterLink,
      to: '/',
      style: { textDecoration: "none" },
    }}
    >
      <Logo variant="h6">
        { properties.name }
      </Logo>
    </Link>
    
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            style: { textTransform: 'capitalize' },
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
      <AppBar elevation={0}>
        <Container fixed>
          <Stack direction="row" justifyContent="space-between">
        {mobileView ? displayMobile() : displayDesktop()}
          </Stack>
        </Container>
      </AppBar>
  );
}