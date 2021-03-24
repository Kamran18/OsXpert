// return started, completed & gruntData

const sjf_premAlgo = (arrival_time, burst_time) => {

    const nProcess = arrival_time.length;
    let started = Array(nProcess).fill(-1),
        completed = Array(nProcess).fill(-1),
        gruntData = [],
        processes = [],
        pos = 0,
        processCompleted = 0,
        lastProcess = -1;
        
    for(let i=0; i<nProcess; i++)
        processes.push([arrival_time[i], burst_time[i]]);
    processes.sort((a, b)=> {
        if(a[0]<b[0] || (a[0]===b[0] && a[1]<=b[1]))
            return -1
        else
            return 1
    });
    for(let i=0; i<nProcess; i++)
        processes[i] = [...processes[i], i]
    
    let time = processes[0][0];
    if(time !== 0)
        gruntData.push([-1, 0, time]);

    //Logic 
    while(processCompleted !== nProcess){
        //finding the max index we can search at time t
        while(pos<nProcess-1 && processes[pos+1][0] <= time){
            pos++;
        }

        //points to the first element which isn't completed 
        let min = -1;
        // finding the first such element
        for(let i=0; i<=pos; i++){
            if(completed[i] === -1){
                min = i;
                break;
            }
        }
        // when all elements are completed at that time
        // we can use pos+1 as there processCompleted != nProcess
        // and so there will be atleast nonCompleted process 
        if(min === -1){
            gruntData.push([min, time, processes[pos+1][0]]);
            time = processes[pos+1][0]; 
            continue;
        }
        // finding min burst time nonCompleted element
        for(let i=min; i<=pos; i++){
            if((processes[i][1] < processes[min][1] && completed[i] === -1)||
                (processes[i][1] === processes[min][1] && i === lastProcess))
                min = i;
        }
        
        if(started[min] === -1)
            started[min] = time;
        processes[min][1]--;
        time++;
        if(processes[min][1] === 0){
            completed[min] = time;
            processCompleted++;
        }
        if(lastProcess !== min)
            gruntData.push([min, time-1, time]);
        else
            gruntData[gruntData.length-1][2] = time;
        lastProcess = min;
    }
    //Logic Ends

    return [started, completed, gruntData, processes]
}

const outputCompatibleSJFData = (arrival_time, burst_time) => {
    const [started, completed, gruntData, processes] = sjf_premAlgo(arrival_time, burst_time);
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

export default outputCompatibleSJFData