import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme, Table, Typography,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Divider} from '@material-ui/core';
import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
  paper: { 
    padding: theme.spacing(3),
    boxShadow:'none',
  },
  section: { 
    margin: theme.spacing(2) ,
  },
  gridItem: {
    marginBottom: theme.spacing(2),
    textAlign: 'center'
  }
}));

const theme = createMuiTheme({
  overrides: {
      MuiTableCell: {
        root: {
          border: '1px dotted #e0e0e0',
        }
      }
  },
});

export default function DenseTable({algoData}) {
  const classes = useStyles();

  const table_head = ['Process', 'Arrival', 'Burst', 'Priority', 'Started', 'Completed', 'Turnaround', 'Waiting'];

  const getTable = () => (
    <Table className={classes.table} aria-label="a dense table">
              {/* Table Head/Refrence string */}
              <TableHead style={{backgroundColor: '#bbdefb'}}>
                <TableRow >
                  {table_head.map((title,id) =>
                  <TableCell align='center' key={id} style={{fontWeight: 'bold', minWidth:'75px'}}>
                    {title}
                  </TableCell>)}
                </TableRow>
              </TableHead>

              <TableBody>
                {/* Process rows */}
                {algoData.table_data.map((row, id) => (
                  <TableRow key={id} hover={true}>
                    <TableCell component="th" scope="row" align='center'>
                      {String.fromCharCode(65+id)}
                    </TableCell> 
                    {row.map((entry, id) => (
                      <TableCell component="th" scope="row" align='center' key={entry+''+id}>
                        {entry}
                      </TableCell> 
                    ))}
                  </TableRow>
                ))}

                {/* Average row */}
                <TableRow >
                  <TableCell component="th" scope="row" align='center' style={{fontWeight: 'bold'}}>
                    Average
                  </TableCell>
                  {algoData.avg.map( (num, id) => (
                    <TableCell component="th" scope="row" align='center' key={id}>
                      {num === -1 ? '-': <b>{num}</b>}
                    </TableCell> 
                  ))}
                </TableRow>
              </TableBody>
            </Table>
    )

  return (
    <Paper className={classes.paper}>
      {console.log(algoData)}
      <div className={classes.gridItem}>
            <Typography variant='h4'> Process Scheduling Output </Typography>
      </div>

      <div className={classes.section}>
        <motion.div
          initial={{y : -5}}
          animate={{y : 0}}
          transition={{ duration: 0.6 }}>
           <Typography variant='h5'> Input Summary </Typography>
        </motion.div>
        <br/><Divider />
        <div className={classes.section}>
          {
            algoData.error_message === 1 ?
              <Typography variant='h5' style={{color:'tomato'}}>
                  Incorrect input check enter data and try again
              </Typography> : ''
          }
          {algoData.algorithm !== '' ?
            <motion.div
              initial={{opacity : 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.8 }}>
              <Typography variant='subtitle1'>
                Algorithm :: <i>{algoData.algorithm}</i>
              </Typography>
              <Typography variant='subtitle1'>
                Arrival times :: <i>{algoData.arrival_time}</i>
              </Typography>
              <Typography variant='subtitle1'>
                Burst times :: <i>{algoData.burst_time}</i>
              </Typography>
              {algoData.priority?<Typography variant='subtitle1'>
                Priority :: <i>{algoData.priority}</i>
              </Typography>:''}
              {algoData.quanta?<Typography variant='subtitle1'>
                quanta :: <i>{algoData.quanta}</i>
              </Typography>:''}
            </motion.div>
          : ''}
        </div>
      </div>
      <br />

      <div className={classes.section}>
      <motion.div
          initial={{y : -10}}
          animate={{y : 0}}
          transition={{ duration: 0.6 }}>
           <Typography variant='h5'> Solution visualization </Typography>
        </motion.div>
        <br/> <Divider /> <br/>
        {algoData.algorithm !== '' ?
          <motion.div
          initial={{opacity : 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.8 }}>
            <TableContainer>
              <ThemeProvider theme={theme}>
                {algoData.total_processes >= 1 ? 
                  getTable(): 'Your solution will display here'}
              </ThemeProvider>
            </TableContainer>
          </motion.div>
        : ''}
        <br/>
      </div>

        <div className={classes.section}>
          <motion.div
            initial={{y : -15}}
            animate={{y : 0}}
            transition={{ duration: 0.6 }}>
            <Typography variant='h5'> Details </Typography>
          </motion.div>
          <br/><Divider />
          {algoData.algorithm !== '' ?
              <div className={classes.section}>
                {
                    algoData.gruntData.map(([process,start,end], index) => (
                      process !== -1 ?
                      <Typography variant='subtitle1' key={index}>
                        Process <b>{String.fromCharCode(65+process)}</b> runs from <b>{start}</b> to <b>{end}</b>
                      </Typography> :
                      <Typography variant='subtitle1' key={index}>
                        <b>No Process</b> runs from <b>{start}</b> to <b>{end}</b>
                      </Typography>
                      ))
                }
              </div>
          : ''}
        </div>
    </Paper>
  );
}
