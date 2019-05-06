import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import People from '@material-ui/icons/People';
import Computer from '@material-ui/icons/Computer';
import PlayArrow from '@material-ui/icons/PlayArrow';
import DevicesOther from '@material-ui/icons/DevicesOther';

import ViewHeadline from '@material-ui/icons/ViewHeadline';

import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Social from '../Pages/Social';
import Tech from '../Pages/Tech';
import ECommerce from '../Pages/ECommerce';

import * as Actions from '../Actions/Actions'

import {styles} from '../styles/AppDrawerStyles'
import SearchTrends from '../Pages/SearchTrends';
import Entertain from '../Pages/Entertain';
import IndiaTrends from '../Pages/IndiaTrends';
import GlobalTrends from '../Pages/GlobalTrends';
import TechHeadlines from '../Pages/TechHeadlines';
import { Description } from '@material-ui/icons';
import {repository, exportData} from '../Actions/Actions';

class AppDrawer extends React.Component {
  

  state = {
    open: false,
  };

  onExportData = (e) => {
    e.preventDefault();
    exportData(repository);
  }

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
          color='primary'
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
            <Typography variant="h6" color="inherit"  className={classes.grow}>
              Perfect Scrapper
            </Typography>

            <Button color="inherit" onClick={this.onExportData}>Export Data</Button>

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
                  <ListItemText primary="Programming" />
              </ListItem>
            </NavLink>

            <NavLink to="/social" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary={"Social"} />
              </ListItem>
            </NavLink>
            
            {/* <NavLink to="/ecommerce" style={{ textDecoration: 'none' }}>
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
            </NavLink> */}

            <NavLink to="/entertain" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><PlayArrow /></ListItemIcon>
                  <ListItemText primary={"Music, Movies"} />
              </ListItem>
            </NavLink>
            <NavLink to="/india-trends" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><Description /></ListItemIcon>
                  <ListItemText primary={"India Trends"} />
              </ListItem>
            </NavLink>
            <NavLink to="/global-trends" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><ViewHeadline /></ListItemIcon>
                  <ListItemText primary={"Global Trends"} />
              </ListItem>
            </NavLink>
            <NavLink to="/tech-trends" style={{ textDecoration: 'none' }}>
              <ListItem button>
                  <ListItemIcon><DevicesOther /></ListItemIcon>
                  <ListItemText primary={"Tech Headlines"} />
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
              <Route path="/entertain" component={Entertain}/>
              <Route path="/india-trends" component={IndiaTrends}/>
              <Route path="/global-trends" component={GlobalTrends}/>
              <Route path="/tech-trends" component={TechHeadlines}/>
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
