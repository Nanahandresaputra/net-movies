import * as React from "react";
import { AppBar, Box, Button, Container, FormControl, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="absolute" color="transparent">
        <Box pt="20px" />
        <Container>
          <Toolbar>
            <Typography variant="h2" component="h1" color="danger.dark" sx={{ fontFamily: "Bebas Neue", fontWeight: 300, flexGrow: 1, fontSize: { xs: 25, sm: 40, md: 50 } }}>
              N E T M O V I E S
            </Typography>

            <FormControl color="info" focused sx={{ width: { xs: "3em", sm: "12em" }, mr: { xs: "18px", sm: "30px" } }}>
              <Select
                value="1"
                onChange={(e) => handle(e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ color: "white", "& .MuiSelect-icon": { color: "white" }, width: { xs: "55px", sm: "12em" }, height: { xs: "25px", sm: "30px" } }}
              >
                <MenuItem value="1">
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="p" sx={{ mr: { xs: "27px", sm: "7px" }, fontSize: { xs: 19, sm: 20 } }}>
                      <TfiWorld />
                    </Typography>
                    <Typography fontWeight={800}>Bahasa Indonesia</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
              <Button variant="contained" color="danger" sx={{ fontWeight: 600, width: { xs: "55px", sm: "12em" }, height: { xs: "25px", sm: "30px" } }}>
                About
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
