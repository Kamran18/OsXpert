import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme, Table ,
  Typography , TableBody ,TableCell , TableContainer ,TableHead ,
  TableRow ,Paper , Divider } from '@material-ui/core';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
  paper: { 
    padding: theme.spacing(3),
    boxShadow:'none',
  },
  table: { 
    minWidth: 650,
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

  const getTable = () => (
    <TableContainer>
        <ThemeProvider theme={theme}>
        <Table className={classes.table} aria-label="a dense table">
          {/* Table Head/Refrence string */}
          <TableHead style={{backgroundColor: '#bbdefb'}}>
            <TableRow >
              <TableCell align='left' style={{fontWeight: 'bold', minWidth:'80px'}}> String </TableCell>
              {algoData.ref_string_list.map( (num, id) => (
                  <TableCell align='center'style={{fontWeight: 'bold'}} key={id}>
                    {num}
                  </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Frames rows */}
            {algoData.frame_rows.map((row, id) => (
              <TableRow key={id} hover={true}>
                <TableCell component="th" scope="row" align='left'>
                  { 'Frame ' + (id+1)}
                </TableCell> 
                
                {row.map((entry, id) => (
                  <TableCell component="th" scope="row" align='center' key={entry+''+id}>
                    {entry !== -1? entry: ''}
                  </TableCell> 
                ))}
              </TableRow>
            ))}

            {/* Hits row */}
            <TableRow >
              <TableCell component="th" scope="row" align='left'>
                Hits
              </TableCell> 
              {algoData.Hits_row.map( (num, id) => (
                <TableCell component="th" scope="row" align='center' key={id}>
                  {num === 0 ? <ClearRoundedIcon  style={{color: 'red'}}/>:<CheckRoundedIcon style={{color: 'green'}}/>}
                </TableCell> 
              ))}
            </TableRow>
          </TableBody>
        </Table>
          </ThemeProvider>
      </TableContainer>
  )

  return (
    <Paper className={classes.paper}>
      <div className={classes.gridItem}>
        <Typography variant='h4'> Page Replacement Output </Typography>
      </div>

      <div className={classes.section}>
        <motion.div
        initial={{y : -5}}
        animate={{y : 0}}
        transition={{ duration: 0.6 }}>
          <Typography variant='h5'>
            Input Summary
          </Typography>
        </motion.div>
        <br/><Divider />

        {
          algoData.error_message === 1 ?
            <Typography variant='h5' style={{color:'tomato'}}>
                Incorrect input check enter data and try again
            </Typography> : ''
        }
        {algoData.Algorithm !== '' ?
          <motion.div
          initial={{opacity : 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.8 }}>
            <div className={classes.section}>
              <Typography variant='subtitle1'>
                Algorithm :: <i>{algoData.Algorithm}</i>
              </Typography>
              <Typography variant='subtitle1'>
                String :: <i>{algoData.Reference_string}</i>
              </Typography>
              <Typography variant='subtitle1'>
                Reference string length :: <i>{algoData.Reference_string_length}</i>
              </Typography>
              <Typography variant='subtitle1'>
                Total Frames :: <i>{algoData.Total_Frames}</i>
              </Typography>
              <Typography variant='subtitle1'>
                Faults :: <i>{algoData.Faults}</i>
              </Typography>
              <Typography variant='subtitle1'>
                Hits :: <i>{algoData.Hits}</i>
              </Typography>
            </div>
          </motion.div>:''
        }
      </div>

      <br />

      <div className={classes.section}>
        <motion.div
        initial={{y : -10}}
        animate={{y : 0}}
        transition={{ duration: 0.6 }}>
          <Typography variant='h5'>
            Solution visualization
          </Typography>
        </motion.div>
        <br/><Divider /><br/>

        {algoData.Algorithm !== '' ?
          <motion.div
          initial={{opacity : 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.8 }}>
            <TableContainer>
              <ThemeProvider theme={theme}>
                {getTable()}
              </ThemeProvider>
            </TableContainer>
          </motion.div>
        : ''}
        <br/>
      </div>

    {/* Detail section */}
    {/* <div className={classes.section}>
        <motion.div
        initial={{y : -15}}
        animate={{y : 0}}
        transition={{ duration: 0.6 }}>
          <Typography variant='h5'>
            Details
          </Typography>
        </motion.div>
        <br/><Divider />

        <div className={classes.section}>
          <Typography variant='subtitle1'>
            details ...{algoData.detail_steps}
          </Typography>
        </div>
      </div> */}
    </Paper>
  );
}
