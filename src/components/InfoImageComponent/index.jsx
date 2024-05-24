import "../../App.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import dashboardImage from '../../assets/dashboard_image.png';
import guideImage from '../../assets/guide_image.png';

// eslint-disable-next-line react/prop-types
export default function InfoImageComponent({ title }) {


  return (
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
  );
}