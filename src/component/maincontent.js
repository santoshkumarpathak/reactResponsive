
import {
    Avatar, Card, CardActions,
    CardContent, CardHeader, CardMedia,
    Collapse, Container, Grid, IconButton,
    ThemeProvider, Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import image from '../static/img.jpg';




const style = makeStyles((theme) =>({
   container: {
        padding: theme.spacing(10)
    },
}));


const Maincontent = () => {
    const classes = style()
    return (
        <>
            <Container className={classes.container}>

                <Grid item sm={12} className={classes.itemA}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{}} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    {/* <MoreVertIcon /> */}
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            // image={image}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                {/* <FavoriteIcon /> */}
                            </IconButton>
                            <IconButton aria-label="share">
                                {/* <ShareIcon /> */}
                            </IconButton>
                        </CardActions>
                        <Collapse timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                    aside for 10 minutes.
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Container>
        </>
    )
}

export default Maincontent