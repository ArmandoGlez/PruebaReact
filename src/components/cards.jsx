import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

function ProductCard({ description, price, image }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4 cardTransition">
      <Card style={{ width: "100%" }}>
        <Card.Img className="sizeImg" variant="top" src={image} alt="Product" />
        <Card.Body>
          <Card.Title>{description}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function App() {
  const products = [
    {
      description: "Glifosato",
      price: "200",
      image:
        "https://www.buscador.portaltecnoagricola.com/app/imagenes_aplicacion/portaltecnoagricola-tridente-Arraza-RGB.jpg",
    },

    {
      description: "Cloruro de cobre",
      price: "150",
      image:
        "https://www.laboratorioescolar.com/productos/m/1363379364-143.jpg",
    },

    {
      description: "Furadan",
      price: "450",
      image:
        "https://www.ftepeyac.com.mx/wp-content/uploads/2021/09/Furadan_350.jpg",
    },

    {
      description: "Foliar",
      price: "120",
      image:
        "https://fagro.mx/productos-respaldo/img/productos/clarity-citrus.png",
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
