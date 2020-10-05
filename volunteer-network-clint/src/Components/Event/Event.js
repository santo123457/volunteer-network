import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const Event = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const{eventTitle,Date, Description}=props.data;
    return (
        <div className="container">
          <Card className={classes.root} style={{width:"200px",display:"block",margin:"auto"}}>
      <CardContent >
        
        <Typography variant="h5" component="h2">
        {eventTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date: {Date}
          
        </Typography>
        <Typography variant="body2" component="p">
        {Description}
        </Typography>
      </CardContent>
    
    </Card>  
        </div>
    );
};

export default Event;