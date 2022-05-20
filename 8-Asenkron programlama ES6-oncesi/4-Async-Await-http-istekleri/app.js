class Request{
   async get(url){//get request
       
        // return new Promise((resolve,reject)=>{//promise yapısı ile gelen degerleri gonderirirz
        //     fetch(url)
        //     .then(response=>response.json())
        //     .then(result=>resolve(result))
        //     .catch(err=>reject(err));
        // })

        const response=await fetch(url);//response objesi elde edilir

        const data=await response.json();//json objesi beklernir ve elde edilr

        return data;
    }
    async post(url,value){
        // return new Promise((resolve,reject)=>{
        //     fetch(url,{
        //         method: "POST",//methdou belirtiyoruz
        //         body: JSON.stringify(data),//gondercegimiz degeri stringe ceviriyoruz
        //         headers:{
        //             "content-type":"application/json; charset=UTF-8"
        //         }
        //     }).then(response=>response.json())
        //     .then(result=>resolve(result))
        //     .catch(err=>reject(err));
        // })

        const response= await fetch(url,{
                    method: "POST",//methodu belirtiyoruz
                    body: JSON.stringify(value),//gondercegimiz degeri stringe ceviriyoruz
                    headers:{
                        "content-type":"application/json; charset=UTF-8"
                    }
                });//response objesi

        const data=await response.json();

        return data;
    }
    async put(url,value){
        // return new Promise((resolve,reject)=>{
        //     fetch(url,{
        //         method: 'PUT',
        //         body: JSON.stringify(data),
        //         headers: {
        //           'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     .then(response=>response.json())
        //     .then(result=>resolve(result))
        //     .catch(err=>reject(err))
        // });

        const response=await  fetch(url,{
                    method: 'PUT',
                    body: JSON.stringify(value),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                });
        const data=await response.json();
        return data;
    }
    async delete(url){
        // return new Promise((resolve,reject)=>{
        //     fetch(url,{
        //         method:"DELETE"
        //     }).then(response=>resolve("Veri silme işlemi başarılı"))
        //     .catch(err=>reject(err));
        // })

        const response =await fetch(url,{
                    method:"DELETE"
                });
        // const data= await response.json(); //işlem zaten boş donecegi için gerek yoktur
        return "Veri silm eişlemi başarılı";
    }
}

const request=new Request();
let albums;
//Htttp get
// request.get("https://jsonplaceholder.typicode.com/posts")
// .then(albums=>{//gelen deger başarılıysa yapılır
//     console.log(albums);
// }).catch(err=>console.log(err));//gelen deger başarısızsa


// //Http post
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"furkan"})
// .then(newAlbum=>{console.log(newAlbum)})
// .catch(err=>{console.log(err)});//degerleri bu sefer cagirdigimiz yerde alacagiz


// //Http put
// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Herhangi bir baslik"})
// .then(updatedData=>console.log(updatedData))
// .catch(err=>console.log(err));

// //Http delete
// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(msg=>console.log(msg))
// .catch(err=>console.log(err));