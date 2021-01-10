import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './searchButtonOne';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <SearchBar/>
            <div>
            <IconButton aria-label="delete">
              <FavoriteIcon> </FavoriteIcon>
            </IconButton>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <SearchBar/>
            <div>
            <IconButton aria-label="delete">
              <FavoriteIcon> </FavoriteIcon>
            </IconButton>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
           <SearchBar/>
           <div>
           <IconButton onClick = {color: 'secondary'}>
             <FavoriteIcon> </FavoriteIcon>
           </IconButton>
           </div>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
