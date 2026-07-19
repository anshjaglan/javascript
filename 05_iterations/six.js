//filter
//////////////////////////////===================================/////////////////////////
  const myNums = [1,2,3,4,5,6,7,8,9,10]

  const newNums = myNums.filter( (num) => {
   return num < 4
  })
 console.log(newNums);


 ////////////////////////======================/////////////////////////
  //forEach
  const newNums2 = []

  myNums.forEach( (num) => {
    if(num > 4){
      newNums2.push(num)
    }
  })
 console.log(newNums2);


 const music = [
  { name : "tag awara ka", language : "haryanvi", singer : "amanraj gill"},
  { name : "2 bhai", language : "haryanvi", singer : "Masoom sharma"},
  { name : "Beretta", language : "haryanvi", singer : "amanraj gill"},
  { name : "Dhakka", language : "Punjabi", singer : "Sidhu"},
  { name : "Wavy", language : "Punjabi", singer : "Karan Aujla"},
  { name : "Gift", language : "Punjabi", singer : "Cheema Y"}
  

 ]
 

//  let newMusic = music.filter( (ms) => ms.language === "Punjabi" )
let newMusic = music.filter( (ms) => {
  return ms.singer === "Sidhu" && ms.language === "Punjabi"
})

 console.log(newMusic)