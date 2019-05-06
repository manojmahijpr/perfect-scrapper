import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TheHindu from '../components/IndiaTrendings/TheHindu';
import TheTimesOfIndia from '../components/IndiaTrendings/TheTimesOfIndia';
import GoogleNewsIndia from '../components/IndiaTrendings/GoogleNewsIndia';


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
  


class IndiaTrends extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <TheHindu/>
                    </Paper>
            
                </Grid>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <TheTimesOfIndia />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <GoogleNewsIndia />
                    </Paper>
                </Grid>
                
            </Grid>
        )
    }
}

IndiaTrends.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(IndiaTrends);