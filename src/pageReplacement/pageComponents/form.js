import React from 'react';
import { makeStyles, InputLabel ,MenuItem ,FormControl ,Select ,
  TextField ,Button ,Paper ,Grid ,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  //paper
  paper : {
    boxShadow:'none',
    border: '1px solid #e0e0e0',
    padding: '10px 40px',
    marginTop: '30px',
    marginBottom: '30px',
    transition: 'box-shadow 200ms cubic-bezier(0, 0, 0.1, 0.46)',
    '&:hover':{
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)',
      }
  },
  //form
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  //inputs
  inputs: {
    minWidth: '100%',
  },
  gridItem: {
    textAlign: 'center'
  },
  btn_container:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  btns: {
    minWidth: 100,
    marginBottom: '8px',
  },
}));

export default function SimpleSelect({getDataFromAlgo}) {
  const classes = useStyles();

  const [algo, setAlgo] = React.useState('');   //algo
  const [frames, setFrames] = React.useState('');  //no. of frames
  const [refStr, setStr] = React.useState(''); //ref. string

  const handleChangeAlgo = (event) => {
    console.log(event.target.value);
    setAlgo(event.target.value);
  };

  const handleChangeField = (event) => {
    console.log(event.target.value);
    switch(event.target.id){
      case 'Reference String':   
        setStr(event.target.value);
        break;
      case 'Frames of physical memory':
        if(event.target.value >= 0)
          setFrames(event.target.value);
        break;
      default:
        console.log('PageReaplcement/form/switch');
    }
  };

  const clearEntries = () => {
    setAlgo('');
    setFrames('');
    setStr('');
  }

  const handleSubmit = event => {
    event.preventDefault();
    getDataFromAlgo(algo, refStr, frames);
    clearEntries();
    console.log('Submited successfully');
  }

  return (
      <Paper className={classes.paper}>
        <Grid container justify='center'>

          <Grid item xs={12} className={classes.gridItem}>
              <Typography variant='h5'>
                Page Replacement
              </Typography>
            </Grid>    

          <Grid item xs={12} className={classes.gridItem}>
            <form className={classes.root} noValidate
            autoComplete="off" onSubmit={handleSubmit}>
                
              <Grid item xs={12} className={classes.gridItem}>
                  <FormControl className={classes.inputs} style={{margin:'8px'}}>
                      <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={algo}
                      onChange={handleChangeAlgo}
                      size='small'
                      >
                      <MenuItem value={'First in First out (FIFO)'}>
                        First in First out (FIFO)
                      </MenuItem>
                      <MenuItem value={'Least Recently Used (LRU)'}>
                        Least Recently Used (LRU)
                      </MenuItem>
                      <MenuItem value={'Optimal'}>
                        Optimal
                      </MenuItem>
                      </Select>
                  </FormControl>
              </Grid>

              <Grid item xs={12} className={classes.gridItem}>
                  <TextField
                  className={classes.inputs}
                  id="Reference String"
                  label="Reference String"
                  multiline
                  rowsMax={4}
                  value={refStr}
                  onChange={handleChangeField}
                  size='small'
                  />
              </Grid>

              <br/>

              <Grid item xs={12} className={classes.gridItem}>
                  <TextField
                  className={classes.inputs}
                  id="Frames of physical memory"
                  label="Frames of physical memory"
                  type="number"
                  onChange={handleChangeField}
                  value={frames}
                  size='small'
                  InputLabelProps={{
                      shrink: true,
                  }}
                  />
              </Grid>

              <br/>

              <Grid item xs={12} className={classes.btn_container} style={{paddingLeft: '9px'}}>
                  <Button 
                    onClick = {clearEntries}
                    className={classes.btns}
                    variant="outlined"
                    color='secondary'
                    size='small'>
                      Clear
                  </Button>
                  <Button type='submit' 
                    disabled={!algo || !refStr ||
                      (!frames && frames !== 0)}
                    className={classes.btns}
                    color='primary'
                    variant="outlined"
                    size='small'>
                      Submit
                  </Button>
              </Grid>

            </form>
          </Grid>
        </Grid>
    </Paper>
  );
}
