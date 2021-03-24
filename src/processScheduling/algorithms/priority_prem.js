const priority_premAlgo = (arrival_time, burst_time, priority) => {

    const nProcess = arrival_time.length;
    let started = Array(nProcess).fill(-1),
        completed = Array(nProcess).fill(-1),
        gruntData = [],
        processes = [],
        pos = 0,
        processCompleted = 0,
        lastProcess = -1;
        
        for(let i=0; i<nProcess; i++)
            processes.push([arrival_time[i], priority[i], burst_time[i]]);
        processes.sort((a, b)=> {
            if(a[0]<b[0] || (a[0]===b[0] && a[1]>=b[1]) || (a[0]===b[0] && a[1]===b[1] && a[2]<=b[2]))
                return -1
            else
                return 1
        });
        for(let i=0; i<nProcess; i++)
            processes[i] = [...processes[i], i]
        console.log(processes)

        let time = processes[0][0];
        if(time !== 0)
            gruntData.push([-1, 0, time]);

    //Logic 
    while(processCompleted !== nProcess){
        while(pos<nProcess-1 && processes[pos+1][0] <= time){
            pos++;
        }

        let max = -1;
        for(let i=0; i<=pos; i++){
            if(completed[i] === -1){
                max = i;
                break;
            }
        }

        if(max === -1){
            gruntData.push([max, time, processes[pos+1][0]]);
            time = processes[pos+1][0]; 
            continue;
        }
        
        for(let i=max; i<=pos; i++){
            if((processes[i][1] > processes[max][1] && completed[i] === -1)||
            (processes[i][1] === processes[max][1] && i === lastProcess))
                max = i;
        }

        if(started[max] === -1)
            started[max] = time;
        processes[max][2]--;
        time++;
        if(processes[max][2] === 0){
            completed[max] = time;
            processCompleted++;
        }
        if(lastProcess !== max)
            gruntData.push([max, time-1, time]);
        else
            gruntData[gruntData.length-1][2] = time;
        lastProcess = max;
    }
    //Logic Ends

    return [started, completed, gruntData, processes]
}

const outputCompatiblePriorityData = (arrival_time, burst_time, priority) => {
    const [started, completed, gruntData, processes] = priority_premAlgo(arrival_time, burst_time, priority);
    const avg = [-1, -1, -1, -1, -1, 0, 0],
    table_data = [],
    turnaround_time = [],
    waiting_time = [],
    nProcess = arrival_time.length;

    for(let i=0; i<nProcess; i++){
        turnaround_time.push(completed[i]-processes[i][0])
        avg[5] += turnaround_time[turnaround_time.length-1];
        waiting_time.push(turnaround_time[turnaround_time.length-1]-processes[i][2])
        avg[6] += waiting_time[waiting_time.length-1];

        table_data.push([processes[i][0], processes[i][2], processes[i][1], started[i],
                         completed[i], turnaround_time[i], waiting_time[i]]);
    }
    avg[5] /= nProcess;
    avg[5] = Math.round((avg[5]+Number.EPSILON)*100)/100;
    avg[6] /= nProcess;
    avg[6] = Math.round((avg[6]+Number.EPSILON)*100)/100;

    return [table_data , avg, gruntData]
}

export default outputCompatiblePriorityData