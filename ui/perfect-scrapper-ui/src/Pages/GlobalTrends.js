import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TheWSJ from '../components/USHeadlines/TheWSJ';
import TheWashingtonPost from '../components/USHeadlines/TheWashingtonPost';
import BBC from '../components/USHeadlines/BBC';

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
  


class GlobalTrends extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <BBC/>
                    </Paper>
            
                </Grid>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <TheWashingtonPost />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <TheWSJ />
                    </Paper>
                </Grid>
                
            </Grid>
        )
    }
}

GlobalTrends.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(GlobalTrends);