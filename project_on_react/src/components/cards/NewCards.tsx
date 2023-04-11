import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
interface INewCards{
    imge:string
}
export const NewCards:React.FC<INewCards>=({imge})=>{

  return <>
  <Card sx={{ maxWidth: 245 }}>
    <CardHeader
     />
    <CardMedia
      component="img"
      height="194"
      image={imge}
      alt="Paella dish"
    />
    
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        <br />
        Rs .500.00 
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
     
    </CardActions>
    <Collapse timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        
      </CardContent>
    </Collapse>
  </Card></>
}