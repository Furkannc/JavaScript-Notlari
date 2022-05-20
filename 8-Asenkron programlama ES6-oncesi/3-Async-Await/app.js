// async function test(data){
//     //async yapısı bize mutlaka promise doncegini belirtir
//     let promise=new Promise((res,rej)=>{//5 Saniye sonra çalışacak
//         setTimeout(() => {
//             res("Bu bir değerdir");
//         }, 5000);
//     });

//     let response=await promise;
//     //await yaısı promise bitene kadar bekler ve kodun okunması durur
//     //await herzaman async fonksiyonlar içinde bekler
//     return response;//response bize promise olarak döner
// }
// test("merhaba").then(res=>console.log(res))


// async function testData(data){
//     let promise=new Promise((res,rej)=>{
//         setTimeout(() => {
//             if(typeof data === "string")
//                 res(data);
//             else
//                 rej(new Error("Lütfen string deger giriniz"));
//         }, 5000);
//     });

//     const response=await promise;
//     return response;
// }
// testData("Ali")//string deger verdigimiz için resolve deger doner
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// testData(1)//int deger veridğimiz için reject doner
// .then(res=>console.log(res))
//.catch(err=>console.log(err));




//https://api.apilayer.com/exchangerates_data/latest
async function getCurrency(url){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "svk4K00TIeJRmdDWjCO7l10bIgk9IhCp");
    
    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };
   
    const response=await fetch(url,requestOptions);//response objemizi dondurecek
    //console.log(response);

    const data=await response.json();//response objesini json verisi olması için bekliyourz

    //console.log(data); bu bize zaten json verimizi yazdıracak
    return data;
}

getCurrency("https://api.apilayer.com/exchangerates_data/latest")
.then(data=>console.log(data))//biz buna daha sonra erişebiliriz
.catch(err=>console.log(err))