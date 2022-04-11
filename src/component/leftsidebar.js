

import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Home } from "@material-ui/icons"

const style = makeStyles((theme) => ({

    container: {
        height: "100vh",
        paddingTop: theme.spacing(10),
      
        background: "lightgreen"
    },
    item: {
        display: "flex",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            marginBottom: theme.spacing(3)
        }
    },
    text:{
        [theme.breakpoints.down('sm')]:{
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
                    <Home className={classes.icon} />
                    <Typography className={classes.text}> Home </Typography>
                </div>
                <div className={classes.item}>
                    <Home className={classes.icon} />
                    <Typography className={classes.text}> Home </Typography>
                </div>
                <div className={classes.item}>
                    <Home className={classes.icon} />
                    <Typography className={classes.text}> Home </Typography>
                </div>
                <div className={classes.item}>
                    <Home className={classes.icon} />
                    <Typography className={classes.text}> Home </Typography>
                </div>
                <div className={classes.item}>
                    <Home className={classes.icon} />
                    <Typography className={classes.text}> Home </Typography>
                </div>





            </Container>
        </>
    )
}

export default Leftsidebar