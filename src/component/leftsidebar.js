

import { alpha, colors, Container, List, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Bookmark, Camera, ExitToApp, Home, LinearScaleTwoTone, Person, PlayCircleOutline, Settings, TabletMac } from "@material-ui/icons"

const style = makeStyles((theme) => ({

    container: {
        height: "100vh",
        paddingTop: theme.spacing(10),

        backgroundColor: "lightgreen",
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
            backgroundColor: "white",

        },
        border: "solid 1px gray",
        cursor: "pointer",

    },
    icon: {
        marginRight: theme.spacing(2),
       
        [theme.breakpoints.up('sm')]: {
            fontSize: "18px",

        }
    },
    item: {
        display: "flex",
        fontWeight: "500",
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(3),
        },
        '&:hover': {

            // backgroundColor: alpha(theme.palette.common.fontWeight(20), 0.25),
            fontWeight: "1000",
            fontSize: "500",
            backgroundColor: "#f5f4f2",
            justifyContent:"center",
            radius:"10px"

        },
        

    },
    text: {
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    }
}))
const Leftsidebar = () => {
    const classes = style()

    return (
        <>
            <Container className={classes.container}>
                <div className={classes.item}>
                    <Home className={classes.icon} />
                    <Typography className={classes.text}> Home </Typography>
                </div>
                <div className={classes.item}>
                    <Person className={classes.icon} />
                    <Typography className={classes.text}> Friend </Typography>
                </div>

                <div className={classes.item}>
                    <Camera className={classes.icon} />
                    <Typography className={classes.text}> camera </Typography>
                </div>
                <div className={classes.item}>
                    <PlayCircleOutline className={classes.icon} />
                    <Typography className={classes.text}> Video </Typography>
                </div>
                <div className={classes.item}>
                    <TabletMac className={classes.icon} />
                    <Typography className={classes.text}> apps </Typography>
                </div>

                <div className={classes.item}>
                    <Bookmark className={classes.icon} />
                    <Typography className={classes.text}> Collection </Typography>
                </div>
                <div className={classes.item}>
                    <Settings className={classes.icon} />
                    <Typography className={classes.text}>Settings</Typography>
                </div>
                <div className={classes.item}>
                    <ExitToApp className={classes.icon} />
                    <Typography className={classes.text}>Log-out </Typography>
                </div>



            </Container>
        </>
    )
}

export default Leftsidebar