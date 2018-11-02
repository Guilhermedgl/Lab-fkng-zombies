
 let zombieRandomY = Math.floor(Math.random() * (650 - -50 + 1)) + 0;
 

 function random() {
   let zombieRandomX = Math.floor(Math.random() * (-50 - -47)) - 47;
   if (zombieRandomX === -50) {
     return zombieRandomX + 1300
   }
   if (zombieRandomX === -48){
       return zombieRandomX + 600
   }
   if (zombieRandomX === -49){
       return zombieRandomX
   }
 }

console.log(zombieRandomY, random())