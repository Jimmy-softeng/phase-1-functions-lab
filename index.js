// Code your solution in this file!
function distanceFromHqInBlocks(distance){
 const hqLocation=42;
 return Math.abs(distance-hqLocation);
}
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(distance){
    const blocks=distanceFromHqInBlocks(distance);
    const feetPerblock=264;
    return feetPerblock*blocks;
}
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start,destination){
 return Math.abs((destination-start)*264);
}
console.log(43,48);
console.log(50,60);
console.log(34,28);
function calculatesFarePrice(start,destination){
    const distance=distanceTravelledInFeet(start,destination);
    if(distance<400){
        return 0;
    }
    if(distance >400 && distance <=2000){
        return (distance-400)*0.02;
    }
    if(distance>=2000 && distance<=2500){
        return 25;
    }
    if(distance>2500){
        return 'cannot travel that far';
    }

}