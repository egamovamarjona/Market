import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  return (
    <AppBar
      position="static"
      sx={{
        background: dark
          ? "linear-gradient(135deg, #0d0d0d, #1b1b1b)"  // 🌙 Dark mode gradient
          : "linear-gradient(135deg, #d4d4d4, #8f8f8f)", // 🔥 Soft gray light mode
        color: dark ? "#fff" : "#000",
        boxShadow: dark
          ? "0 4px 25px rgba(255,255,255,0.08)"
          : "0 4px 25px rgba(0,0,0,0.15)",
        backdropFilter: "blur(6px)",
        transition: "0.3s",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo yoki nom */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          style={{
            textDecoration: "none",
            color: dark ? "#fff" : "#000",
          }}
          sx={{
            fontWeight: 700,
            textShadow: dark
              ? "0 0 12px rgba(255,255,255,0.8)"
              : "0 0 6px rgba(0,0,0,0.2)",  // Glow effect
          }}
        >
          Market App
        </Typography>

        {/* Switch Dark Mode */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ fontSize: 14 }}>
            {dark ? "Dark" : "Light"}
          </Typography>

          <Switch
            checked={dark}
            onChange={() => setDark(!dark)}
            color="default"
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#fff",
              },
              "& .MuiSwitch-track": {
                background: dark ? "#fff" : "#333",
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
