import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Github from "../components/Tech/Github";
import StackOverflow from "../components/Tech/StackOverflow";
import Quora from "../components/Tech/Quora";




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
  


class Tech extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <Github />
                    </Paper>
            
                </Grid>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <StackOverflow />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Quora />
                    </Paper>
                </Grid>
                
            </Grid>
        )
    }
}

Tech.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Tech);