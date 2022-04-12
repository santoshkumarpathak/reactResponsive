import { Container } from "@material-ui/core"

import { makeStyles } from "@material-ui/core"

const style = makeStyles((theme) =>({

    container: {
        padding: theme.spacing(10)
    }
}))
const Maincontent = () =>{
const classes = style()

    return (
        <>
        <Container className={ classes.container}>
        Maincontent
        all code merge
        </Container>
        
        </>
    )
}

export default Maincontent