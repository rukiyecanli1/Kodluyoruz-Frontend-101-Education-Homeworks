const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// Buton elementlerini id'lerini değişkene atama
const btnAll = document.querySelector("#All");
const btnKorea = document.querySelector("#Korea");
const btnJapan = document.querySelector("#Japan");
const btnChina = document.querySelector("#China");

// body elementini bir değişkene atama
const body = document.querySelector("#menu-group");

// site açıldığında ekranda tüm yemekleri gösterme
window.addEventListener("load",showAllFoods);

// menu dizisindeki Korea yemeklerini başka bir diziye atma
let koreaFood = menu.reduce((ids, thing) => {
  if (thing.category == "Korea") {
    ids.push(thing);
  }
  return ids;
}, []);

// menu dizisindeki Japon yemeklerini başka bir diziye atma
let japanFood = menu.reduce((ids, thing) => {
  if (thing.category == "Japan") {
    ids.push(thing);
  }
  return ids;
}, []);

// menu dizisindeki Çin yemeklerini başka bir diziye atma
let chinaFood = menu.reduce((ids, thing) => {
  if (thing.category == "China") {
    ids.push(thing);
  }
  return ids;
}, []);


// siteye grildiğinde tüm yemekleri gösterecek fonksiyon
function showAllFoods(){
 
   while (body.hasChildNodes()) {
    body.removeChild(body.firstChild);
  }

  for(let i of menu){
    let menuElement = `
    
    <div class="menu-item">
    <img src="${i.img}" alt="${i.title}" class="menu-item-image" >
    <div class="menu-item-text">
      <h3  class="menu-item-heading">
        <span class="menu-item-name">${i.title} </span>
        <span class="menu-item-price">${i.price}</span><br>
      </h3>
      <p class="menu-item-description"> ${i.desc}
      </p>
    </div>
  </div> 
    `
    
    body.insertAdjacentHTML("afterbegin", menuElement);
  }
};


// all, korea, japan ve china butonlarından herhangi birine basıldığında 
// buton id'sine göre yemekleri gösterecek fonksiyon
function showFoods(event){

   while (body.hasChildNodes()) {
    body.removeChild(body.firstChild);
  }

// buton id'sini x değişkenine atama
var x = event.target.id;   
console.log(x);

var arr = [];

// x değişkenine göre döngüye girecek diziyi belirleme 
switch (x) {
    case "All":
      var arr = menu;
        break;
    case 'Korea':
           arr = koreaFood;
        break;
    case 'Japan':
         arr  = japanFood;
        break;
        case 'China':
          arr  = chinaFood;
         break; 
    default:
       return false;
}

  for(let i of arr){

    let menuElement = `
    
    <div class="menu-item">
    <img src="${i.img}" alt="${i.title}" class="menu-item-image" >
    <div class="menu-item-text">
      <h3  class="menu-item-heading">
        <span class="menu-item-name">${i.title} </span>
        <span class="menu-item-price">${i.price}</span><br>
      </h3>
      <p class="menu-item-description"> ${i.desc}
      </p>
    </div>
  </div> 
    `
    
    body.insertAdjacentHTML("afterbegin", menuElement);
  }
};


// butonlara tıklandığında çağırılacak fonksiyonlar
btnAll.addEventListener("click",showFoods);
btnKorea.addEventListener("click",showFoods);
btnJapan.addEventListener("click",showFoods);
btnChina.addEventListener("click",showFoods);












// let korea = menu.filter(item => item.category == "Korea");
// console.log(korea);




// for(i in document.getElementsByClassName('menu-item-name')){
//    document.getElementsByClassName('menu-item-name')[i].innerHTML = menu[i].title;
// }



// menu.map(({id, title, price, img, desc,category})=>{ 

//  document.getElementsByClassName('menu-item-name')[id-1].innerHTML = menu[id-1].title;
//  document.getElementsByClassName('menu-item-price')[id-1].innerHTML = menu[id-1].price;
//  document.getElementsByClassName('menu-item-image')[id-1].src = menu[id-1].img;
//  document.getElementsByClassName('menu-item-description')[id-1].innerHTML = menu[id-1].desc;

// });


//  function koreaButton(){
//   menu.map(({id, title, price, img, desc,category})=>{ 

//     if(menu[id-1].category.valueOf() == "Korea"){
//    document.getElementsByClassName('menu-item-name')[id-1].innerHTML = menu[id-1].title;
//    document.getElementsByClassName('menu-item-price')[id-1].innerHTML = menu[id-1].price;
//    document.getElementsByClassName('menu-item-image')[id-1].src = menu[id-1].img;
//    document.getElementsByClassName('menu-item-description')[id-1].innerHTML = menu[id-1].desc;
//    }
//  });
//  }

