import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Youtube from '../components/Entertain/Youtube'
import Musixmatch from '../components/Entertain/Musixmatch'
import Games from '../components/Entertain/Games'


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
  


class Entertain extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Youtube />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Musixmatch />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                      <Games />
                  </Paper>
                </Grid>
                
            </Grid>
        )
    }
}

Entertain.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Entertain);