const glasses = document.querySelectorAll('.glass');
const bigGlass = document.getElementById('bigGlass');
const water = document.getElementById('water');
const empty = document.getElementById('empty');
const remainedL = document.querySelector('.remainedL');
const waterRate = document.querySelector('.waterRate');

glasses.forEach((glass, index) => {
   glass.addEventListener('click', () => {

      fillGlasses(index);  
      fillBigGlass(index);

   });
});

const fillGlasses = (index) => {

   glasses.forEach(glass => {
      glass.classList.remove('fill');
   });
   
   for(let i=0; i<index+1; i++){
      glasses[i].classList.add('fill');
   }

}

const fillBigGlass = (index) => {

   // 300 / 8 => 37.5px for one glass

   water.style.height = (index+1)*(37.5) + "px";
   water.classList.add('bg');
   waterRate.innerHTML = (100 * (index+1) / 8) + "%"

   empty.style.height = ( 300 - ((index+1)*(37.5)) ) + "px";
   remainedL.innerHTML = ( (2000 - ((index+1)*250)) / 1000 ) + "L";

   if(empty.style.height == '37.5px'){
      empty.style.flexDirection = 'row';
      empty.style.fontSize = '1rem';
   }else {
      empty.style.flexDirection = 'column';
      remainedL.style.fontSize = '1.5rem';
   }

}