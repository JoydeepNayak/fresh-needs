/**
 *This is the home component that appears when a user lands in in the application.
 * @author Joydeep Nayak
 */

import React, { Fragment } from 'react';
import {
    withStyles,
    Typography,
    CardContent
} from '@material-ui/core';
import styles from './OffersPage.style';

class OffersPage extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <CardContent className={classes.card} onKeyPress={(event) => this.eventTracker(event, this)}>
                    <Typography variant="h4" gutterBottom>Offers Page Here</Typography>
                </CardContent>
            </Fragment>
        )
    }
}

export default withStyles(styles)(OffersPage);