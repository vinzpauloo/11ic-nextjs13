// ** React Imports
import * as React from "react";

// ** MUI Imports
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

// ** Type Imports
interface LogoutAdsProps {
  title: string;
  subheader: string;
  image: string;
  alt: string;
  details: string;
}

// =================================================================
export default function LogoutAdsCard({
  title,
  subheader,
  image,
  alt,
  details,
}: LogoutAdsProps) {
  // ** States
  const [expanded, setExpanded] = React.useState(false);

  // ** Functions
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={styles.container}>
      <CardHeader
        title={<Typography sx={{ fontSize: 20 }}>{title}</Typography>}
        subheader={<Typography sx={{ fontSize: 12 }}>{subheader}</Typography>}
      />
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        sx={{ objectFit: "cover", objectPosition: "center", height: 300 }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontSize={12}>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  container: {
    maxWidth: { md: 345 },
    minWidth: { xs: 300, md: 300, lg: 270 },
    height: 450,
    backgroundColor: "#feeb78",
  },
};
