import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Home({ dark }) {
  return (
    <Box
      sx={{
        py: 4,
        minHeight: "100vh",

       
        background: dark
          ? "linear-gradient(135deg, #0f0f0f, #1a1a1a)"        
          : "linear-gradient(135deg, #d4d4d4, #8f8f8f)",    

        color: dark ? "#fff" : "#000",
        transition: "0.3s",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 4,
            textShadow: dark ? "0 0 18px rgba(255,255,255,0.8)" : "none"
          }}
        >
          Mahsulotlar katalogi
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((p) => (
            <Grid
              key={p.id}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 320,
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  background: dark ? "#222" : "#fff",
                  boxShadow: dark
                    ? "0 4px 30px rgba(255,255,255,0.07)"
                    : "0 4px 20px rgba(0,0,0,0.1)",
                  transition: ".3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: dark
                      ? "0 8px 35px rgba(255,255,255,0.15)"
                      : "0 10px 30px rgba(0,0,0,0.2)"
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={p.img}
                  alt={p.title}
                  sx={{ objectFit: "cover" }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      textShadow: dark ? "0 0 8px rgba(255,255,255,0.7)" : "none"
                    }}
                  >
                    {p.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: dark ? "#ccc" : "gray",
                      mb: 2
                    }}
                  >
                    ${p.price}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    component={Link}
                    to={`/product/${p.id}`}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      py: 1,
                      background: dark ? "#fff" : undefined,
                      color: dark ? "#000" : "#fff",
                      "&:hover": {
                        background: dark ? "#ddd" : undefined
                      }
                    }}
                  >
                    Ko‘rish
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
