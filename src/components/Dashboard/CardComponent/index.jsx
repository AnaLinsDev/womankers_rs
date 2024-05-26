import Card from "@mui/material/Card";

// eslint-disable-next-line react/prop-types
export default function CardComponent({ width, height }) {
  return (
    <Card sx={{ width: width, height: height, margin: 2, padding: 2 }}>
      teste
    </Card>
  );
}
