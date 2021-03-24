// return started, completed & gruntData
function fcfsAlgo(arrival_time, burst_time){

    let started = [],
        completed = [],
        gruntData = [],
        processes = [],
        time = 0
    const nProcess = arrival_time.length;

    for(let i=0; i<nProcess; i++)
        processes.push([arrival_time[i], burst_time[i]]);
    processes.sort()
    for(let i=0; i<nProcess; i++)
        processes[i] = [...processes[i], i]
    
    processes.forEach(([arrive, burst, process]) => {
        if(arrive > time){
            gruntData.push([-1, time, arrive]) //No Process
            time = arrive;
        }
        started.push(time)
        time += burst
        completed.push(time)
        gruntData.push([process, time-burst, time])
    });
    
    return [started, completed, gruntData, processes]
}

const outputCompatibleFCFSData = (arrival_time, burst_time) => {
    const [started, completed, gruntData, processes] = fcfsAlgo(arrival_time, burst_time);
    const avg = [-1, -1, -1, -1, -1, 0, 0],
    table_data = [],
    turnaround_time = [],
    waiting_time = [],
    nProcess = arrival_time.length;

    for(let i=0; i<nProcess; i++){
        turnaround_time.push(completed[i]-processes[i][0])
        avg[5] += turnaround_time[turnaround_time.length-1];
        waiting_time.push(turnaround_time[turnaround_time.length-1]-processes[i][1])
        avg[6] += waiting_time[waiting_time.length-1];

        table_data.push([processes[i][0], processes[i][1], '-', started[i],
                         completed[i], turnaround_time[i], waiting_time[i]]);
    }
    avg[5] /= nProcess;
    avg[5] = Math.round((avg[5]+Number.EPSILON)*100)/100;
    avg[6] /= nProcess;
    avg[6] = Math.round((avg[6]+Number.EPSILON)*100)/100;

    return [table_data , avg, gruntData]
}

export default outputCompatibleFCFSData

// [started, completed, gruntData] = fcfs();
// console.log(started, completed, gruntData)