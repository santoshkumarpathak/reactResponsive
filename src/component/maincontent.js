import { Container } from "@material-ui/core"

import { makeStyles } from "@material-ui/core"
import { Route, Routes } from "react-router-dom"
import Home from './landingPage/Home'
import Reports from './landingPage/Reports'
const style = makeStyles((theme) => ({

    container: {
        padding: theme.spacing(10)
    }
}))
const Maincontent = () => {
    const classes = style()

    return (
        <>
            <Container className={classes.container}>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/home" exact element={<Home />} />

                    <Route path="/reports" exact element={<Reports />} />
                </Routes>
            </Container>

        </>
    )
}

export default Maincontent