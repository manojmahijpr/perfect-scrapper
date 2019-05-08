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
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    overflowY: 'auto',
    cellHeight: 'auto'
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
  const data = props.data || [];


  function gridCardElements() {
    return data.map((cardData, i) => {
      return (
        <GridListTile key={i} style={{color: 'red'}}>
          <SimpleCard cardData={cardData}/>
        </GridListTile>
      )
    })
  }
  
  return (
    <div className={classes.root} id="abcdef">
      <ListSubheader component="div">
      
        <button 
          onClick={() => {
            if(props.url && props.url !== '' )
              window.location.href=props.url
          }}
          className={classes.sectionsName} 
          style={{
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}>
            {props.sectionName}
          </button> 
        
        {props.children && React.cloneElement(props.children, { size: 27 })}
      </ListSubheader>
      
      <GridList
        className={classes.gridList} 
        cols={3}
        cellHeight={'auto'}
        padding={1}
      >
        {
          gridCardElements() 
        }
        
      </GridList>
    </div>
  );
}


CardList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);
