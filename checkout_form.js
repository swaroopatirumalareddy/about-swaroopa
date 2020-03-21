// console.log('INFO: Reading interaction.js');

// console.log('INFO: Getting access to elements');

// const inputElementRadius = document.getElementById("radius")
// const inputElementResult = document.getElementById("result")

// const calcVolume = () => { 
  
//   const textRad = inputElementRadius.value;
//   const Radius = parseFloat(textRad);

//   const Result = (4/3) * Math.PI * (Radius * Radius * Radius);
//   inputElementResult.innerHTML = "Result: " + Result;
//   return Radius;
// }

// const calcVolumeTest = (radius) => {

//   return (4/3) * Math.PI * (radius * radius * radius);
// }

// console.log('INFO: Configuring event handlers');

// window.addEventListener('load', (event) => {
//   console.log('  Starting initialization ')
//   if (localStorage.getItem('lastRad'))
//   {
//     inputElementRadius.value = localStorage.getItem('lastRad')
//     console.log(`Stored radius = ${localStorage.lastRad}`)
//   }
//   console.log('Finished initialization')
// })

// document.addEventListener('click', event => {
//   if (event.target && event.target.id === 'calc')
//   {
//     const volRad = calcVolume()
//     localStorage.setItem('lastRad', volRad)
//   }
// })

// console.log('INFO: Done loading, waiting for an event'); 

function volumesphere(r){

  if( isNaN(r)){
  
    throw Error('The entered valus is not a number')

  }

 return ((4/3)*r*r*r*Math.PI).toFixed(2)

}

function calcvolumespher(){

  const ra = parseInt(document.getElementById("radius").value)
  localStorage.setItem("rad",ra)
  let a = volumesphere(localStorage.getItem("rad"))
  document.getElementById("result").innerHTML = a

}