import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Google from '../components/SearchTrends/Google';
import Yahoo from '../components/SearchTrends/Yahoo';
import Bing from '../components/SearchTrends/Bing';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
  


class ECommerce extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Google />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Yahoo />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Bing />
                  </Paper>
                </Grid>
                
            </Grid>
        )
    }
}

ECommerce.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ECommerce);