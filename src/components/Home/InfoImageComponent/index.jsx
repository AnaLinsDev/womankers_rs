import "../../../App.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import dashboardImage from '../../../assets/dashboard_image.png';
import guideImage from '../../../assets/guide_image.png';

import { Link } from "react-router-dom"; 

// eslint-disable-next-line react/prop-types
export default function InfoImageComponent({ title }) {

  const ENUM_PAGES = {
    "GUIDE": "/guide",
    "DASHBOARD": "/dashboard"
  }

  return (
    <Link to={title == "Guide" ? ENUM_PAGES.GUIDE : ENUM_PAGES.DASHBOARD}>
    <Card  className='carrousel_item'>
      <CardMedia
        className="carrousel_image"
        image={title == "Guide" ? guideImage : dashboardImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
      </CardContent>

    </Card>
    </Link>
  );
}