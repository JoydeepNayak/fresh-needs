const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: '#fff',
        background: '#EC7211',
        '&:hover': {
            background: '#EB5F07',
        }
    },
    card: {
        width: '55%',
        height: 'auto',
        minWidth: '270px'
    }
});

export default styles;