var avoidFlood = function(rains) {
    const lakes = {}
    const zeros = []
    let result = []
    let ban = true
    for(let i=0; i < rains.length && ban; i++){
        let rain = rains[i]
        if(!lakes[rain] && rain){
            lakes[rain] = i + 1
            result.push(-1) 
        } else if(!rain){
            result.push(1)
            zeros.push(i)
        } else {
            let zero = 0
            let z = 0
            let lake = lakes[rain] - 1
            while(z < zeros.length + 1){
                zero = zeros[z]
                if(zero > lake) {
                    zeros.splice(z, 1)
                    break
                }
                z++
            }
            
            if(zero){
                result[zero] = rain
                result.push(-1)
                lakes[rain] = i + 1
            } else {
                result = []
                ban = false
            }
        }
    }
    return result
};