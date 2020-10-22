import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const Input = () => {
    const classes = useStyles();
    return (
        <div style={{display:'flex',alignItems:'center'}}>
        <label>yasine</label>
        <form className={classes.root} noValidate autoComplete="off">

  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
</form>
      </div>
    )
}

export default Input
