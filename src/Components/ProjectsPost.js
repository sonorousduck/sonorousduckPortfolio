import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardContent } from "@mui/material";
import CardActions from '@mui/material/CardActions';


/* Props format for a short post
  title: title for the post
  image: the relative path to the images
  alt: the alt for the image
  description: a short description of the project
  link: the link the card should take you to on click
*/
const ProjectsPost = (props) => {
  return (
    <Card sx={{ width: '43%', marginTop: '16px', marginBottom: '16px', backgroundColor: "#EEEEEE", marginLeft: props.margin, marginRigh: props.margin }}
    onClick={() => {
    window.open(props.link)
    }}>
    <CardActionArea>
    <CardMedia
        component="img"
        sx={{height: 300, width: 'auto', marginLeft: 'auto', marginRight: 'auto'}}
        image={props.image}
        alt={props.alt}
    />
    <hr/>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
    </CardContent>
    </CardActionArea>
</Card>
  );
}

export default ProjectsPost;