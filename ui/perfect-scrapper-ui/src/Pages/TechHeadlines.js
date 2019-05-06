import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TheVerge from '../components/TechHeadLines/TheVerge';
import TechCrunch from '../components/TechHeadLines/TechCrunch';
import TheNextWeb from '../components/TechHeadLines/TheNextWeb';

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

class TechHeadLines extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <TheVerge/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <TechCrunch />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <TheNextWeb />
                    </Paper>
                </Grid>
                
            </Grid>
        )
    }
}

TechHeadLines.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(TechHeadLines);