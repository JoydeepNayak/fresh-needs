/**
 *This is the header component that appears in the top bar throught the application.
 * @author Joydeep Nayak
 */

import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {
    withStyles,
    Grid,
    AppBar,
    Tabs,
    Tab
} from '@material-ui/core';
import styles from './Header.style';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu: "cart"
        }
    }

    handleTabChange = (event, newValue) => {
        this.setState({ navMenu: newValue }, () => {
            this.props.history.push(`/${this.state.navMenu}`)
        })
    }

    render() {
        const { classes } = this.props;
        const tabs = [
            { key: "cart", value: "Cart" },
            { key: "aboutUs", value: "About Us" },
            { key: "offers", value: "Offers" }
        ];
        return (
            <Fragment>
                <header className={classes.appHeader}>
                    <Grid container={true} justify="space-between" alignItems="center">
                        <Grid item={true}>
                            <a href="#">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjkCqtyuVUfaHyUUFuULw25YQYIPZhH5ik7Q&usqp=CAU"} alt="SmartFoamLogo" className={classes.logo}></img>
                            </a>
                        </Grid>
                        <Grid item={true} style={{ fontSize: '1rem' }}>
                            {<AppBar position="static">
                                <Tabs value={this.state.navMenu} onChange={this.handleTabChange} >
                                    {tabs.map(tab =>
                                        <Tab label={tab.value} key={tab.key} value={tab.key} />
                                    )}
                                </Tabs>
                            </AppBar>}
                        </Grid>
                    </Grid>
                </header>
            </Fragment >
        )
    }
}

export default withRouter(withStyles(styles)(Header));