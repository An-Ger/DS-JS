var tupleSameProduct = function(nums) {
    let res = [];
    let num = [];
    let map = new Map();
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++){
            res.push(nums[i] * nums[j])
        }
    }
    res.forEach(element => {
        if(map.has(element)) {
            let a = map.get(element);
            
        }
        else map.set(element)
    });
    return 8 * count;
};

if(map.get(arrays[i])!=null){
    map.put(arrays[i],map.get(arrays[i])+1);
    }else{
    map.put(arrays[i],1);
    }