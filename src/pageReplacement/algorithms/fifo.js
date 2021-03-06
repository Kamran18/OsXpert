const fifoAlgo = (ref_str, nframes) => {
    let frames_state = [],//frames at any instance
    faults=1,
    hits_row = [],
    detailSteps = [];//[frame, location] 

    detailSteps.push([ref_str[0], -1]);
    frames_state.push(Array(nframes).fill(-1))
    frames_state[frames_state.length-1][0]=ref_str[0]
    hits_row.push(0);

    for(let i=1; i<ref_str.length; i++){
        // returns the frame num of frame f
        let frameId = frames_state[frames_state.length-1].indexOf(ref_str[i]);
        // if present do nothing
        if(frameId !== -1){
            // frameId === -1 => not present else frame location
            detailSteps.push([ref_str[i], frameId]);
            frames_state.push([...frames_state[frames_state.length-1]])
            hits_row.push(1);
            continue;
        }
        // if not 
        else{
            // find the first entered frame i
            detailSteps.push([ref_str[i], frameId]);
            frames_state.push([...frames_state[frames_state.length-1]])
            // faults%nframes === location of frame to be replaced
            frames_state[frames_state.length-1][faults%nframes]=ref_str[i]
            hits_row.push(0);
            faults++
        }
    }
    return [faults, frames_state, detailSteps, hits_row] 
}


const outputCompatibleFifoData = (ref_str, nframes) => {
    const [faults, frames_state, detailSteps, hits_row] = fifoAlgo(ref_str, nframes);
    const tableData=[];
    for(let i=0; i<nframes; i++){
        let temp = []
        for(let j=0; j<ref_str.length; j++)
            temp.push(frames_state[j][i])
        tableData.push(temp)
    }
    return [faults, tableData, detailSteps, hits_row]
}

export default outputCompatibleFifoData;
// outputCompatibleFifoData([1, 5, 2, 3, 6, 3, 5, 1, 4, 2, 0, 5, 3, 7], 4)
