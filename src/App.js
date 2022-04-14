
import Navbar from './component/Navbar'
import Leftsidebar from './component/leftsidebar.js'
import Maincontent from './component/maincontent.js'
import Rightbar from './component/Rightbar.js'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
const style = makeStyles((theme) => ({

    container: {

        marginLeft: theme.spacing(0)
    },

    rightsidebar: {
        [theme.breakpoints
            .down('sm')]: {
            display: "none"
        }
    }
}))

const App = () => {
    const customeClasess = style()
    return (
        <  >
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Grid container className={customeClasess.container}>
                        <Grid item sm={2} xs={3}>
                            <Leftsidebar />
                        </Grid>
                        <Grid item sm={7} xs={9}>
                            <Maincontent />
                        </Grid>
                        <Grid item sm={3} className={customeClasess.rightsidebar}>
                            <Rightbar />
                        </Grid>
                    </Grid>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;