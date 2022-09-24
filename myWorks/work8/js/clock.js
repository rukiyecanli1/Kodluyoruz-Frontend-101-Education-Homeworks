let name = prompt("Adınızı giriniz:");
let greeting = document.querySelector("#myName");
greeting.innerHTML = `${name}`;


setInterval(showTime, 1000);

function showTime () {
let saat = new Date();
let tarih = new Date();
let gun;

switch(tarih.getDay()){
case 1:
gun="Pazartesi";
break;
case 2:
gun="Salı";
break;
case 3:
gun="Çarşamba";
break;
case 4:
gun="Perşembe";
break;
case 5:
gun="Cuma";
break;
case 6:
gun="Cumartesi";
break;
case 7:
gun="Pazar";
break;
}

document.querySelector("#myClock").innerHTML = saat.toLocaleTimeString()+ " " + gun;

//setTimeout(showTime, 1000);
}

// function save(e){
//     e.preventDefault();
//    // window.location.href='index2.html';
//      let firstName = document.querySelector("#fname1").value;
//     console.log(firstName);
//      let lastName = document.querySelector("#lname1").value;
   
//      alert("Merhaba," +`${firstName}`+" " +`${lastName}` + "! Hoş geldin!") ;
// }


// document.getElementById("submit").addEventListener("click", save,false);