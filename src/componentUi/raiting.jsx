// Raiting.jsx
import * as React from "react";
import Rating from "@mui/material/Rating";

export default function Raiting() {
  const [value] = React.useState(2); // Establece el valor del rating aquí si lo necesitas

  return <Rating name="read-only" value={value} readOnly />;
}
