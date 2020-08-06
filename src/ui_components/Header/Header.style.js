const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: '#fff',
        background: '#EC7211',
        '&:hover': {
            background: '#EB5F07',
        }
    },
    label: {
        textTransform: 'capitalize',
    },
    logo: {
        height: 40,
        marginLeft: 30,
    },
    appHeader: {
        backgroundColor: '#eeffd4',
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1
    },
    signOutButton: {
        textDecoration: 'none',
        color: '#fff'
    }
});

export default styles;