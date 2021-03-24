// return started, completed & gruntData

const rr = (arrival_time, burst_time, quanta) => {

    const nProcess = arrival_time.length;
    let started = Array(nProcess),
        completed = Array(nProcess),
        gruntData = [],
        processes = [];

    for(let i=0; i<nProcess; i++)
        processes.push([arrival_time[i], burst_time[i]]);
    processes.sort()
    for(let i=0; i<nProcess; i++)
        processes[i] = [...processes[i], i]

    // console.log('Test',processes)

    let Q = [processes[0]],
        time = processes[0][0],
        lastProcess = -1,
        processCompleted= 0,
        pos = 1; //location pointer
    
    if(time !== 0)
        gruntData.push([-1, 0, time])

    //Logic 
    while(processCompleted !== nProcess){
        let [arrive, burst, process] = Q.shift()

        if(!started[process])
            started[process] = time;

        if(burst <= quanta){
            time = time + burst;
            if(lastProcess === process)
                gruntData[gruntData.length-1][2] = time;
            else
                gruntData.push([process, time-burst, time])
            lastProcess = process

            completed[process] = time;
            processCompleted++;
            
            while(pos < nProcess && processes[pos][0] <= time)
                Q.push(processes[pos++])
            
            //if gap btw processes arrival is large 
            if(pos < nProcess && Q.length === 0){
                gruntData.push([-1, time, processes[pos][0]])
                Q.push(processes[pos]);
                time = processes[pos++][0];
            }

            continue
        }
        // Else
        time = time + quanta;
        if(lastProcess === process)
            gruntData[gruntData.length-1][2] = time;
        else
            gruntData.push([process, time-quanta, time])
        lastProcess = process

        while(pos < nProcess && processes[pos][0] <= time)
            Q.push(processes[pos++])

        Q.push([arrive, burst-quanta, process])
    }
    //Logic Ends
    return [started, completed, gruntData, processes]
}

// const [started, completed, gruntData, processes] = rr([1, 2, 3], [1, 2, 3], 2)
// console.log("DODo",started,'\n', completed, '\n', gruntData)

const outputCompatibleRRData = (arrival_time, burst_time, quanta) => {
    const [started, completed, gruntData, processes] = rr(arrival_time, burst_time, quanta);

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

export default outputCompatibleRRData
