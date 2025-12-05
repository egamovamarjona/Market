import { useParams, Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
import products from "../data/products";

export default function ProductPage({ dark }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <Container
      sx={{
        py: 4,
        textAlign: "center",
        color: dark ? "#fff" : "#000",
      }}
    >
      {product ? (
        <>
       
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={product.img}
              alt={product.title}
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: 12,
                marginBottom: "20px",
                boxShadow: dark
                  ? "0 0 15px rgba(255,255,255,0.3)"
                  : "0 4px 12px rgba(0,0,0,0.2)",
              }}
            />
          </Box>

         
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              textShadow: dark ? "0 0 12px rgba(255,255,255,0.8)" : "none",
            }}
          >
            {product.title}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 1,
              color: dark ? "#ddd" : "primary.main",
              textShadow: dark ? "0 0 10px rgba(255,255,255,0.8)" : "none",
            }}
          >
            ${product.price}
          </Typography>

         
          <Typography
            variant="body1"
            sx={{
              maxWidth: 500,
              margin: "0 auto",
              mb: 3,
              color: dark ? "#ddd" : "text.secondary",
              textShadow: dark ? "0 0 8px rgba(255,255,255,0.5)" : "none",
            }}
          >
            {product.desc}
          </Typography>

    
          <Button
            variant={dark ? "contained" : "outlined"}
            component={Link}
            to="/"
            sx={{
              borderRadius: 2,
              color: dark ? "#fff" : undefined,
              textShadow: dark ? "0 0 8px rgba(255,255,255,0.6)" : "none",
              boxShadow: dark ? "0 0 10px rgba(255,255,255,0.4)" : "none",
            }}
          >
            Orqaga qaytish
          </Button>
        </>
      ) : (
        <Typography variant="h5">Mahsulot topilmadi</Typography>
      )}
    </Container>
  );
}
