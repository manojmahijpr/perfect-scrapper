import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Facebook from '../components/Social/Facebook';
import Reddit from '../components/Social/Reddit';
import Twitter from '../components/Social/Twitter';
import { FaFacebookF } from 'react-icons/fa';


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
  


class Social extends Component {
    render () {
        const { classes } = this.props;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <Facebook/>
                    </Paper>
            
                </Grid>
                <Grid item xs={12}>
                
                    <Paper className={classes.paper}>
                        <Twitter />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Reddit />
                    </Paper>
                </Grid>
                
            </Grid>
        )
    }
}

Social.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Social);