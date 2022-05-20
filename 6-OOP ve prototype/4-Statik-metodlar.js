//Statik metodlar bu sınıftan model oluşmasa dahi kullanılan metodlardır

//Statik olamayan metdoları kullanmak için o sınıftan bir obje uretmek gerekir
// class Math{
//     cube(x){console.log(x*x*x);}
// }
// const mat=new Math();
// console.log(mat);
// mat.cube(4);

class Math{
    square(y){
        console.log(y*y);
    }
    static cube(x){//statik fonksion haline gelir
        console.log(x*x*x);
    }
}

Math.cube(4);//sınıf uzerinden direk fonksiona erişebiiriz
const mat=new Math();
//mat.cube(4);//obje uzerinden metoda erişilmez static fonksionlar 
//prototype olarak eklenmez
mat.square(4);//objeden erişmek için static olmayan fonksiyonlar yazılmalıdır
Math.square(4);//direk sınıf uzerinden de direk fonksiona erişemeyiz
