import React from 'react';
import { makeStyles, InputLabel ,MenuItem ,FormControl ,Select ,TextField 
  ,Button ,Paper ,Grid ,Typography} from '@material-ui/core';
import { motion } from "framer-motion"

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

  const schAlgos = ['First come first served', 'Shortest Job First',
                    'Shortest remaining time first', 'Priority',
                    'Priority (preemptive)', 'Round robin']

  const [algo, setAlgo] = React.useState('');   //algo
  const [burst_time, setBurstTime] = React.useState({entries:'',error:false});  //no. of frames
  const [arrival_time, setArrivalTime] = React.useState({entries:'',error:false}); //ref. string
  const [priorities, setPriorities] = React.useState({entries:'',error:false});  //no. of frames
  const [quanta, setQuanta] = React.useState('');  //no. of frames

  const handleChangeAlgo = (event) => {
    setAlgo(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeQuanta = (event) => {
    setQuanta(Number(event.target.value));
    console.log(event.target.value);
  };

  const handleChangeField= (event) => {
    console.log(event.target.value);
    switch(event.target.id){
      case "Arrival times":
        setArrivalTime({
          entries:event.target.value,
          error:false
        });
        break;
      case "Burst times":
        setBurstTime({
          entries:event.target.value,
          error:false
        });
        break;
      case "Priorities":
        setPriorities({
          entries:event.target.value,
          error:false
        });
        break;
      default:
        console.log('processScheduling/form/handleChengeFiels')
    }
  };

  const clearEntries = () => {
    setAlgo('');
    setQuanta('')
    setBurstTime({ entries:'', error:false});
    setArrivalTime({ entries:'', error:false});
    setPriorities({ entries:'', error:false});
  }

  const handleSubmit = event => {
    event.preventDefault();
    getDataFromAlgo(algo, arrival_time.entries,
      burst_time.entries, priorities.entries, quanta);
    clearEntries();
    console.log('Submited successfully');
  }

  return (
      <Paper className={classes.paper}>
        <Grid container justify='center'>

          <Grid item xs={12} className={classes.gridItem}>
              <Typography variant='h5'>
                Process Scheduling
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
                      { schAlgos.map(algo =>
                        <MenuItem value={algo} key={algo}>
                          {algo}
                        </MenuItem>
                      )}
                      </Select>
                  </FormControl>
              </Grid>

              <Grid item xs={12} className={classes.gridItem}>
                  <TextField
                  className={classes.inputs}
                  id="Arrival times"
                  label="Arrival times"
                  multiline
                  rowsMax={4}
                  value={arrival_time.entries}
                  error={arrival_time.error}
                  onChange={handleChangeField}
                  size='small'
                  />
              </Grid>

              <Grid item xs={12} className={classes.gridItem}>
                  <TextField
                  className={classes.inputs}
                  id="Burst times"
                  label="Burst times"
                  multiline
                  rowsMax={4}
                  value={burst_time.entries}
                  error={arrival_time.error}
                  onChange={handleChangeField}
                  size='small'
                  />
              </Grid>

              {algo==='Priority'||algo==='Priority (preemptive)'?
                <Grid item xs={12} className={classes.gridItem}>
                  <motion.div
                    initial={{opacity : 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.8 }}>
                    <TextField
                    className={classes.inputs}
                    id="Priorities"
                    label="Priorities"
                    multiline
                    rowsMax={4}
                    value={priorities.entries}
                    error={arrival_time.error}
                    onChange={handleChangeField}
                    size='small'
                    />
                  </motion.div>
                </Grid>:''}
              
              { algo === 'Ronud robin' ?
                <Grid item xs={12} className={classes.gridItem}>
                  <motion.div
                    initial={{opacity : 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 1 }}>
                    <TextField
                    className={classes.inputs}
                    id="Time Quanta"
                    label="Time Quanta"
                    type="number"
                    onChange={handleChangeQuanta}
                    value={quanta}
                    size='small'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                  </motion.div>
              </Grid>:''}

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
                    disabled={(!algo || !arrival_time.entries || 
                      !burst_time.entries || arrival_time.error ||
                      burst_time.error || priorities.error ||
                      (algo === 'Ronud robin'?!quanta:
                      ((algo==='Priority'||
                      algo==='Priority (preemptive)')?
                      !priorities.entries:false)))}
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
