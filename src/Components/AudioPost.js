import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { CardContent } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import GitHub from "@mui/icons-material/GitHub";

/* Props format for a short post
  title: title for the post
  description: a short description of the project
  link: the link the card should take you to on click
*/
const AudioPost = (props) => {

  return (
    <>
      <Card sx={{ width: '43%', marginTop: '16px', marginBottom: '16px', backgroundColor: "#EEEEEE", marginLeft: props.margin, marginRigh: props.margin }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1226751406&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div style={{fontSize: '10px', color: '#cccccc', overflow: 'hidden'}}>
                    <a href="https://soundcloud.com/user-434989265-301201114" title="Ryan Anderson" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Ryan Anderson</a> · 
            <a href="https://soundcloud.com/user-434989265-301201114/ai-generated-lofi" title="AI Generated LoFi" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>AI Generated LoFi</a>
            </div>

        {/* <iframe width="100%" height="270" scrolling="no" frameBorder="no" allow="autoplay" src="https://soundcloud.com/user-434989265-301201114/ai-generated-lofi?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"></iframe><div style={{fontSize: '10px', color: '#cccccc', overflow: 'hidden'}}
        ><a href="https://soundcloud.com/user-434989265-301201114" title="Ryan" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Ryan</a> · <a href="https://soundcloud.com/user-434989265-301201114/ai-generated-lofi" title="AI Generated LoFi" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>AI Generated LoFi</a></div> */}
        <IconButton onClick={() => {
          window.open(props.link)
        }}>
          <GitHub />
        </IconButton>
    </Card>
    </>
  );
}

export default AudioPost;