// 1
let clickButton_1 = document.getElementById("click1");
let telephone = document.getElementById("telephone");
let boolean = false;

clickButton_1.addEventListener("click", () => {
    if (!boolean) {
        telephone.innerText = "089-123456";
        boolean = true;
    } else {
        telephone.innerText = "xxx-xxxxxx";
        boolean = false;
    }    
    
});
// 2
let clickButton_2 = document.getElementById("click2");
let dateId = document.getElementById("date");

clickButton_2.addEventListener("click", () => {
    const currentDate = new Date().toString().slice(0,15);
    const arrayDate = currentDate.split(" ");
    console.log(arrayDate);
    
   
    switch(arrayDate[1]){
        case "Jan": b = "มกราคม";
            break;
        case "Feb": b = "กุมภาพันธ์	";
            break;
        case "Mar": b = "มีนาคม";
            break;
        case "Apr": b = "เมษายน";
            break;
        case "May": b = "พฤษภาคม";
            break;
        case "Jun": b = "มิถุนายน"; 
            break;
        case "Jul": b = "กรกฎาคม";
            break;
        case "Aug": b = "สิงหาคม";
            break;
        case "Sep": b = "กันยายน";
            break;
        case  "Oct": b = "ตุลาคม";
            break;
        case  "Nov": b = "พฤศจิกายน	";
            break;
        case  "Dec": b ="ธันวาคม";
            break;
        }
        const day = arrayDate[2].charAt(0) == 0 ? arrayDate[2].slice(1,2) : arrayDate[2];
        
        const month = b;
        const year = Number(arrayDate[3]) + 543;
    
    dateId.innerText = "วันที่ " + day + " " + month + " " + year;

}) 
// 3
$("#click3").click(function(){
  $("#slide").slideToggle();
});
// 4
let clickButton_4 = document.getElementById("click4");
let checkbox = document.getElementById("checkbox");
clickButton_4.addEventListener("click", () => {
        if (checkbox.checked == true) {
            alert("คุณเลือก แยมโรล");
        } else {
            alert("คุณไม่เลือก แยมโรล");
        }
})