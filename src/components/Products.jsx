import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Products = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography align="right" color="error"  gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                Product Name
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
              <Typography className={classes.pos} color="primary">
                Product Style
              </Typography>
              <Typography className={classes.pos} align="right" component="p" color="primary">
                Product Style
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
