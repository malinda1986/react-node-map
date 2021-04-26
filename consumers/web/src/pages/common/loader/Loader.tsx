import React from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const Loader = () => {
  const classes = useStyles();

  return (
    <>
      <Backdrop className={classes.backdrop} open={true}>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <CircularProgress color="inherit" />
        Please wait..
        </div>
      </Backdrop>
    </>
  );
};

export default Loader;
