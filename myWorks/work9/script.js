// Listedeki her bir satıra çarpı butonu ekleme
var myList = document.getElementsByTagName("li"); // listeyi myList değişkenine atama
var i;
for (i = 0; i < myList.length; i++) {
  // console.log(myNodelist.length);
  var span = document.createElement("SPAN");      // çarpı işareti içi span isimli değişken oluşturma
  var txt = document.createTextNode("\u00D7");    // çarpı işaretini oluşturup text değişkenine atama
  span.className = "close";                       // span değişkenine css dosyasındaki close isimli sınıfın stilini atama
  span.appendChild(txt);                          // çarpı işaretini span değişkenine ekleme
  myList[i].appendChild(span);                    // span değişkenini listeye ekleme
}

// çarpı işaretine basıldığında yapılacak işi gizleme
var close = document.getElementsByClassName("close");      // close isimli sınıfın içeriğini(çarpıları) close  isimli değişkene atama
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {                         // çarpı butonuna tıklandığı zaman bu fonksiyon çalışır
    var div = this.parentElement;                          // tıklanan liste elemanını div değişkenine atama
    //  console.log(this.parentElement);
    div.style.display = "none";                            // div değişkeninin stilini görünmez yapma
  }
}

// listedeki elemana tıklandığında "yapıldı" işaretin oluşturma
var list = document.querySelector('ul');                   // listeyi seçme
list.addEventListener('click', function (ev) {             // listeye tıklandığında..
  if (ev.target.tagName === 'LI') {                        // eğer listenin tag adı "li" ise ve "yapıldı" işareti yoksa oluştur, varsa kaldır (toggle() ile)
    ev.target.classList.toggle('checked');
  }
}, false);

// Ekle butonuna basıldığında listenin en altına eleman ekleme
function newElement() {
  var li = document.createElement("li");                   // liste elementinde bir li değişkeni oluşturma
  var inputValue = document.getElementById("task").value;  // input yerine girilen değeri inputValue değişkenine atama
  var t = document.createTextNode(inputValue);             // inputValue'yu text değişkenine atama
  li.appendChild(t);                                       // text'i li listesine ekleme

  if ((inputValue.trim() === '')) {                        // eğer inputValue girilmemişse toast ile hata bildirisi yap
    $('.error').toast('show');
  }
  else {                                                   // girilmişse li isimli listeyi todolist'e ekleme ve toast ile başarı bildirisi yap
    document.getElementById("list").appendChild(li);
    $('.success').toast('show');
  }


  document.getElementById("task").value = "";              // input değişkeninin değerini silme


  // yeni eklenen elemanlar için de çarpı butonu oluştur 
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {    
    close[i].onclick = function () {                     // close butonuna basıldığında
      var div = this.parentElement;                      // li elemanının stilini kaldırma
      div.style.display = "none";
    }
  }
}