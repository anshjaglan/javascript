const clock = document.querySelector("#clock")
const currdate = document.querySelector("#currdate")



setInterval(function(){
    let date = new Date();

    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
   const currentTime =  date.toLocaleTimeString();
   const currentDate =  date.toDateString(undefined, dateOptions)

   clock.innerHTML = `${currentTime} `;
   currdate.innerHTML = `${currentDate}`;
},
 1000)


   