import { AppBar, InputBase, makeStyles, Toolbar, Typography, alpha, Badge, Avatar } from '@material-ui/core'
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

const style = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },

    largLogo: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block"
        }
    },
    smallLogo: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    search: {
        display: "flex",
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius, width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: "70%"
        }
    },
    Cancel: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    searchInput: {
        color: "white",
        marginLeft: theme.spacing(1)
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    icon: {
        alignItems: "center",
        display: (props) => (props.open ? 'none' : 'flex')
    },
    badge: {
        marginRight: theme.spacing(2)
    }

}))

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const classes = style({ open });
    return (
        <>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    {/* There is already an h1 in the page, let's not duplicate it. */}
                    <Typography variant="h6" className={classes.largLogo} >
                        Lama Dev
                    </Typography>
                    <Typography variant="h6" className={classes.smallLogo}>
                        Lama
                    </Typography>
                    <div className={classes.search}>

                        <Search />
                        <InputBase placeholder="Search..." className={classes.searchInput} />
                        <Cancel className={classes.Cancel} onClick ={() => setOpen(false)} />
                    </div>
                    <div className={classes.icon}>
                        <Search className={classes.searchButton} onClick={() => setOpen(true)} />
                        <Badge badgeContent={4} color="secondary" className={classes.badge} >
                            <Mail />
                        </Badge>

                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Notifications />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                    </div>
                </Toolbar>
            </AppBar>
        </>
    )

}

export default Navbar