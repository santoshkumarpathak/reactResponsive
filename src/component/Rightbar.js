import { Container, ThemeProvider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const style = makeStyles((theme) =>({
    container:{
        padding: theme.spacing(10)
    }
}))
const Rightbar = () =>{
const classes = style()
    return (
        <>
        <Container className={classes.container}>
        Rightbar
        </Container>
        
        </>
    )
}

export default Rightbar