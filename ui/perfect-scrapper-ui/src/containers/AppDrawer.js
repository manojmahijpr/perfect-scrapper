import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Search from '@material-ui/icons/Search';
import People from '@material-ui/icons/People';
import Computer from '@material-ui/icons/Computer';
import ShopRounded from '@material-ui/icons/ShopRounded';
import PlayArrow from '@material-ui/icons/PlayArrow';

import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Social from '../Pages/Social';
import Tech from '../Pages/Tech';
import ECommerce from '../Pages/ECommerce';

import * as Actions from '../Actions/Actions'


import {styles} from '../styles/AppDrawerStyles'
import SearchTrends from '../Pages/SearchTrends';

class AppDrawer extends React.Component {
  
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color='secondary'
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Perfect Scrapper
            </Typography>
          </Toolbar>
        </AppBar>
        
        
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <Typography variant="h6" color="inherit" >
              Select One
            </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          
          <Divider />
          
          <List>

            <NavLink to="/tech" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><Computer /></ListItemIcon>
                  <ListItemText primary="Tech" />
              </ListItem>
            </NavLink>

            <NavLink to="/social" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary={"Social"} />
              </ListItem>
            </NavLink>
            
            <NavLink to="/ecommerce" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><ShopRounded /></ListItemIcon>
                  <ListItemText primary={"E-Commerce"} />
              </ListItem>
            </NavLink>
            <NavLink to="/search-trends" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><Search /></ListItemIcon>
                  <ListItemText primary={"Search Trends"} />
              </ListItem>
            </NavLink>
            <NavLink to="/entertain" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><PlayArrow /></ListItemIcon>
                  <ListItemText primary={"Music, Movies"} />
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          
          <div className={classes.pageName}>
            {Actions.Naming.getPageName(window.location.pathname)}
          </div>


          <Switch>
              <Route exact path="/" render={() => <Redirect to="/tech"/>}/>
              <Route path="/social" component={Social}/>
              <Route path="/tech" component={Tech}/>
              <Route path="/ecommerce" component={ECommerce}/>
              <Route path="/search-trends" component={SearchTrends}/>
          </Switch>
        </main>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppDrawer);
