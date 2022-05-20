//https://jsonplaceholder.typicode.com/albums/1
// class Request{
//     get(url){//get request
//         fetch(url)
//         .then(response=>response.json())
//         .then(result=>result)
//         .catch(err=>console.log(err));
//     }
// }
// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/posts");
//yukarıdaki gibi yapıdıgında degerleri kullanamayız

//Promise yapısı ile kullanım 
class Request{
    get(url){//get request
        return new Promise((resolve,reject)=>{//promise yapısı ile gelen degerleri gonderirirz
            fetch(url)
            .then(response=>response.json())
            .then(result=>resolve(result))
            .catch(err=>reject(err));
        })
    }
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: "POST",//methdou belirtiyoruz
                body: JSON.stringify(data),//gondercegimiz degeri stringe ceviriyoruz
                headers:{
                    "content-type":"application/json; charset=UTF-8"
                }
            }).then(response=>response.json())
            .then(result=>resolve(result))
            .catch(err=>reject(err));
        })
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response=>response.json())
            .then(result=>resolve(result))
            .catch(err=>reject(err))
        });
    }
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"DELETE"
            }).then(response=>resolve("Veri silme işlemi başarılı"))
            .catch(err=>reject(err));
        })
    }

}
const request=new Request();
let albums;
//Htttp get
// request.get("https://jsonplaceholder.typicode.com/posts")
// .then(data=>{//gelen deger başarılıysa yapılır
//     albums=data;
//     console.log(albums);
// }).catch(err=>console.log(err));//gelen deger başarısızsa


//Http post
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"furkan"})
// .then(newAlbum=>{console.log(newAlbum)})
// .catch(err=>{console.log(err)});//degerleri bu sefer cagirdigimiz yerde alacagiz


//Http put
// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Herhangi bir baslik"})
// .then(updatedData=>console.log(updatedData))
// .catch(err=>console.log(err));

//Http delete
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(msg=>console.log(msg))
.catch(err=>console.log(err));