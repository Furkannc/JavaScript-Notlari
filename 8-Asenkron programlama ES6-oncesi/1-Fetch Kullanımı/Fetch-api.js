function getTextFile(){
    fetch("example.txt")//url veya dosya adı
    .then(response=>response.text())//hata olmazsa text fonksionu doner ve dosyaa içindeki veri verilir
    .then(data=>console.log(data))//başarılı ise text dosyasından gelen deger data degişkeni ile ekrana yazılır
    .catch(err=>console.log(err));//herhangi bir hata olursa
}

//getTextFile();

function getJsonFile(){//localdeki jsondan veri almak
    fetch("example.json")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
}
getJsonFile();


function getExternalApi(){
//api key 
var myHeaders = new Headers();
myHeaders.append("apikey", "svk4K00TIeJRmdDWjCO7l10bIgk9IhCp");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)//urlye istek atılır api key ile birlikte
  .then(response => response.json())//başarılıysa cevap json olarak olarak istenir
  .then(result => console.log(result.rates))//cevabın içindeki rates altındaki degerler ekrana yazılır
  .catch(error => console.log('error', error));//hata alınırsa yazdırılr
}

getExternalApi();