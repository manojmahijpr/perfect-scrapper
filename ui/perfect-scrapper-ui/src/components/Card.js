import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    //minWidth: 375,
    width:'100%',
    height:'100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    // marginBottom: 12,
  },
  media: {
    height: 150,
  },
};

const DEFAULT_IMG_URL = 'https://hmp.me/ckmf';
class SimpleCard extends React.Component {

  onCardClick = (e, cardData) => {
    if(cardData && cardData.url)
      window.location.href = cardData.url;
  }

  render() {

    const { cardData } = this.props;
    //this.getCardData(cardData);
    
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.card}>
        <CardContent>
          <CardActionArea
            onClick={(e) => this.onCardClick(e, cardData)}
          >

        <CardMedia
          className={classes.media}
          image={cardData && cardData.imgUrl || DEFAULT_IMG_URL}
          title="Image"
        />

          { cardData && cardData.header &&
            <Typography color="textSecondary" gutterBottom>
              {cardData.header}
            </Typography>
          }

          { cardData && cardData.title &&
            <Typography className={classes.title} component="p">
              { cardData ? cardData.title : null }
            </Typography> 
          }

          { cardData && cardData.body &&
            <Typography className={classes.pos} color="textSecondary">
              { cardData && cardData.body || null }
            </Typography>
          }


          { cardData && cardData.description &&
            <Typography component="p">
              { cardData.description}
            </Typography>
          }
          {
            cardData && cardData.footer &&
            <Typography component="p">
              {cardData.footer}
            </Typography>
          }
          </CardActionArea>
        </CardContent>
      </Card>
    );

  }

}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);