
import Navbar from './component/Navbar'
import { makeStyles } from '@material-ui/core/styles';
const style = makeStyles((theme) => ({
    btn: {
        background: theme.palette.success.dark,
        color: "white"
    }
}))

const App = () => {
    const customeClasess = style()

    return (
        <  >

            <div>
                <Navbar />
            </div>
        </>
    );
}

export default App;