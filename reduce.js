

function extractValue(arr, key) {
    return arr.reduce(function(accum, nextObj){
        accum.push(nextObj[key]);
        return accum;
    }, []);

};



function vowelCount(str) {
    const vowels = 'aeiou';
    return Array.from(str).reduce(function(accum, nextChar) {
        if(vowels.indexOf(nextChar) !== -1) {
            if(accum[nextChar]) {
                accum[nextChar]++
            }
            else {
                accum[nextChar] = 1
            }
        }
        return accum;
    }, {})
};



function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, nextObj, idx) {
        accum[idx][key] = value;
        return accum;
}, arr)};


function partition(arr, callback) {
        return arr.reduce(function(accum, next) {
            if(callback(next)) {
                accum[0].push(next)
            }
            else {accum[1].push(next);
            }
        return accum;
        }, [[],[]])
};
