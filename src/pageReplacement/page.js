import React, {useState} from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PageReplacementform from './pageComponents/form'
import PageReplacementOutput from './pageComponents/output'
import {fifoAlgo, optimalAlgo, lruAlgo} from './algorithms/replacementAlgos'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  }
}));

export default function PageReplacement(){
    const classes = useStyles();

    const [algoData, setstate] = useState({
      'Reference_string': '',
      'Reference_string_length': '',
      'Algorithm': '',
      'Total_Frames': '',
      'Faults': '',
      'Hits': '',
      'ref_string_list': [],
      'frame_rows': [[]],
      'Hits_row':[],
      'detail_steps':'',
      'error_message':0
    })

  const checkError = (ref_str, nframes) => {
    if(nframes <= 0) return false;
    ref_str.forEach(element => {
      if(element!==0 && !element) return false;
    });
    return true
  }

  const getNumList = (refStr, frames)=>{
      refStr = refStr.split(',').map(x=>+x)
      frames = Number(frames)
      return [refStr, frames]
  }

  const getDataFromAlgo=(algo, refStr, frames)=>{
      const [ref_str, nframes] = getNumList(refStr, frames)

      console.log("page",ref_str,"frames", nframes, "\\")

      let faults, tableData, detailSteps, hits_row;
      if(checkError(ref_str, nframes)){
          switch(algo){
              case 'First in First out (FIFO)':
                  [faults, tableData, detailSteps, hits_row] = 
                      fifoAlgo(ref_str, nframes);
                  break;
              case 'Least Recently Used (LRU)':
                  [faults, tableData, detailSteps, hits_row] = 
                      lruAlgo(ref_str, nframes);
                  break;
              case 'Optimal':
                  [faults, tableData, detailSteps, hits_row] = 
                      optimalAlgo(ref_str, nframes);
                  break;
              default:
                  console.log('pageReplacement/Page.js/algoInput-Incorrect')
          }
          setstate({
            'Reference_string': refStr,
            'Reference_string_length': ref_str.length,
            'Algorithm': algo,
            'Total_Frames': nframes,
            'Faults': faults,
            'Hits': ref_str.length-faults,
            'ref_string_list': ref_str,
            'frame_rows': tableData,
            'Hits_row':hits_row,
            'detail_steps':detailSteps,
            'error_message': 0
          })
      }
      else
          setstate({...algoData, 'error_message':1})
  }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                    <PageReplacementform getDataFromAlgo={getDataFromAlgo}/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <PageReplacementOutput algoData={algoData}/>
                </Grid>
            </Grid>
        </div>
    )
}