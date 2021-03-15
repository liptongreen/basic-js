const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let k = 0.693/HALF_LIFE_PERIOD;
    if(!sampleActivity||typeof(sampleActivity)!='string'){return false};
    if(Number(sampleActivity)<0||Number(sampleActivity)>15){return false};
    if(Number(sampleActivity)==0||isNaN(sampleActivity)){return false};
    return Math.ceil(Math.log(Number(MODERN_ACTIVITY)/sampleActivity)/k);
};

