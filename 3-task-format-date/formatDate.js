function formatDate(date) {
    let now = new Date();
    let userDate = new Date(date);
    let dateFormat = "";
    let monthFormat = "";
 
    let splitDate = new Date(userDate.getFullYear(), userDate.getMonth(), userDate.getDate(), userDate.getHours(), userDate.getMinutes());
   if(userDate.getMonth() < 10){
       monthFormat = ("0" + (Number(userDate.getMonth()) + +1));
       console.log(monthFormat);
   }

if(userDate.getDate() < 10){
    dateFormat =  ("0" + userDate.getDate());
    console.log(dateFormat);
} 
   
    let difference = Math.round((now - userDate) / 1000); // в секундах

    if (difference < 1) {
        alert("Прямо сейчас");
    } else if (difference < 1 * 60) {
        alert(difference + "секунд назад");
    } else if (difference < 1 * 60 * 60) {
        alert(`${Math.round(difference / 60)} минут назад`);
    } else if (difference > 1 * 60 * 60) {
        alert(dateFormat + "." + monthFormat + "." + userDate.getFullYear() + " " + userDate.getHours() + ":" + userDate.getMinutes());
    }
}

formatDate("2020-02-01 21:25:00");