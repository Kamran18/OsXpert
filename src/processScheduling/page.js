import React, {useState} from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import ProcessSchedulingform from './pageComponents/form'
import ProcessSchedulingOutput from './pageComponents/output'
import {fcfsAlgo, sjfAlgo, sjf_premAlgo, priorityAlgo,
     priority_premAlgo, round_robinAlgo} from './algorithms/schedulingAlgos'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    minHeight: '80vh',
  }
}));

export default function ProcessScheduling(){
    const classes = useStyles();

    /* table_data => array of table rows data */
    //when entered data is incorrect error_data = 1 
    const [algoData, setstate] = useState(
        {'algorithm':'',
        'arrival_time':[],
        'burst_time':[],
        'priority':[],
        'quanta':'',
        'total_processes': '',
        'table_data': [],
        'avg': [],
        'gruntData': [],
        'error_message': 0})
    
    const checkError = (A, B, P) => {
        const nA = A.length, nB = B.length,
        nP = P.length? nA: P.length
        
        if(nA===nB && nA===nP && nB===nP){
            for(let i=0; i<nA; i++){
                if(!(Number.isInteger(A[i]) && 
                    Number.isInteger(B[i]) && 
                    Number.isInteger(P[i])))
                    return false
                return true
            }
        }
        else
            return false
    }

    const getNumList = (arrival_time, burst_time, priority)=>{
        arrival_time = arrival_time.split(',').map(x=>+x)
        burst_time = burst_time.split(',').map(x=>+x)
        priority = priority.split(',').map(x=>+x)
        return [arrival_time, burst_time, priority]
    }

    const getDataFromAlgo=(algo, arrival_time, burst_time, priority, quanta)=>{

        const [arrival_list, burst_list, priority_list] =
             getNumList(arrival_time, burst_time, priority)

        let table_data, avg, gruntData;
        if(checkError(arrival_list, burst_list, priority_list)){
            switch(algo){
                case 'First come first served':
                    [table_data, avg, gruntData] = 
                        fcfsAlgo(arrival_list, burst_list);
                    break;
                case 'Shortest Job First':
                    [table_data, avg, gruntData] = 
                        sjfAlgo(arrival_list, burst_list);
                    break;
                case 'Shortest remaining time first':
                    [table_data, avg, gruntData] = 
                        sjf_premAlgo(arrival_list, burst_list);
                    break;
                case 'Priority':
                    [table_data, avg, gruntData] = 
                        priorityAlgo(arrival_list, burst_list, priority_list);
                    break;
                case 'Priority (preemptive)':
                    [table_data, avg, gruntData] = 
                        priority_premAlgo(arrival_list, burst_list, priority_list);
                    break;
                case 'Ronud robin':
                    [table_data, avg, gruntData] = 
                        round_robinAlgo(arrival_list, burst_list, quanta);
                    break;
                default:
                    console.log('processScheduling/Page.js/algoInput-Incorrect')
            }
            setstate({
                'algorithm':algo,
                'arrival_time':arrival_time,
                'burst_time':burst_time,
                'priority':priority,
                'quanta':quanta,
                'total_processes': arrival_time.length,
                'table_data': table_data,
                'avg': avg,
                'gruntData': gruntData,
                'error_message': 0})
        }
        else
            setstate({
                'algorithm':'',
                'arrival_time':[],
                'burst_time':[],
                'priority':[],
                'quanta':'',
                'total_processes': '',
                'table_data': [],
                'avg': [],
                'gruntData': [],
                'error_message': 1})
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={3}>
                    <ProcessSchedulingform getDataFromAlgo={getDataFromAlgo}/>
                </Grid>
                <Grid item xs={12} md={9}>
                    <ProcessSchedulingOutput algoData={algoData}/>
                </Grid>
            </Grid>
        </div>
    )
}