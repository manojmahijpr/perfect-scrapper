import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Snapdeal from '../components/ECommerce/Snapdeal';
import Amazon from '../components/ECommerce/Amazon';
import Flipkart from '../components/ECommerce/Flipkart';


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
                      <Amazon />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Flipkart />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Snapdeal />
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