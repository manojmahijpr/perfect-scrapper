import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import {FaFacebookF} from 'react-icons/fa'

import SimpleCard from './Card'
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  sectionsName: {
    fontSize: '25px'
  },
});

const CardList = (props) => {
  const { classes } = props;
  
  return (
    <div className={classes.root}>
      <ListSubheader component="div">
      
        <span className={classes.sectionsName}>{props.sectionName}</span> 
          &nbsp; &nbsp; 
        {React.cloneElement(props.children, { size: 27 })}
      
      </ListSubheader>
      <GridList className={classes.gridList} cols={3.5}>
        
        <GridListTile>
            <SimpleCard />
        </GridListTile>
        <GridListTile>
            <SimpleCard />
        </GridListTile>
        
        <GridListTile>
            <SimpleCard />
        </GridListTile>
        
        <GridListTile>
            <SimpleCard />
        </GridListTile>
      </GridList>
    </div>
  );
}


CardList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);
