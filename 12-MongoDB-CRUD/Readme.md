
MongoDB Shell CRUD 
-

**Veri tabanlarını gosterir**

`show dbs`

**Hangi veri tabaninda oldgumuzu belirtir**

`db`

**Veritabanini degistirir**

`use db-ad`

**Collectionlari gosterir**

`show collections`

**Collection oluşturulur**

`db.creatCollection("adlar",options)`

**Collectionu siler**

`db.collection-ad.drop();`

**Veri tabanını siler**

`db.dropDatabase();`

**Collectiona veri eklenir**

`db.collection-ad.insertOne(JSON-OBJESİ)`

**Collection içindeki verileri gosterir**

`db.collection-ad.find()`

**Collection içindeki verileri daha duzgun gosterir**

`db.collection-ad.find().pretty()`

**Birden çok veri ekler**

`db.collection-ad.insertMany(JSON-ARRAY)`

**Collection içinde kac veri oldugunu verir**

`db.collection-ad.find().count()`

**Sadece 1 adet veri listeler**

`db.collection-ad.findOne()`

**İlk arguman boş ikinci argumana collectKolonada gelen deger 1 olnca sadece o degerleri verir**

`db.collection-ad.find({},{collectKolonad:1,collectKolonad:1})`

**Collectkolonada gelen deger 0 olunca o kolona ait veriler haric listeler**

`db.collection-ad.find({},{collectKolonad:0})`

**collectKolonadına kolon degerleri aynı olanalar gelir sadece**

`db.collection-ad.find({collectKolonad:"kolon Deger"})`

**collectKolonada istenen degerlerin oldugu verileri listeler**

`db.collection-ad.find({collectKolonad:"istenen deger"})`

**collectKolonada istenen degerlerin oldugu veriler listeler**

`db.collection-ad.find({collectKolonad:"istenen deger",collectKolonad:"istenen deger"})`

**collectKolonada gelen istenen degerden buyuk olan verileri listeler**

`db.collection-ad.find({collectKolonad:"{$gt:istenen deger}"})`

**CollectKolonada gelen istenen degereden buyuk ve eşit olanlari listeler**

`db.collection-ad.find({collectKolonad:"{$gte:istenen deger}"})`

**kolonada gore degerle eşleşen veriyi kolonadına gore degeri gunceller**

`db.collection-ad.updateOne({kolonAd:"deger"},{$set:{kolonad:"deger"}})`

**Tum verilerin kolonadına ve degerine gore guncelleme yapar**

`db.collection-ad.updateMany({},{$set:{kolonad:"deger"}})`

**kolonada ve degerle eşleşen verilerin kolonadına ve degerine gore guncelleme yapar**

`db.collection-ad.updateMany({kolonAd:"deger"},{$set:{kolonad:"deger"}})`

**kolonadına ve degerine gore eşleşen veriyi siler**

`db.collection-ad.deleteOne({kolonad:"deger"})`

**kolonadına ve degerine gore eşleşen verileri siler**

`db.collection-ad.deleteMany({kolonad:"deger"})`

**Butun verileri siler**

`db.collection-ad.deleteMany({})`

**Indexi atlayarak kayıtları listeler**

`db.collection-ad.find().skip(index)`

**Sayiya kadar kayıtları listeler**

`db.collection-ad.find().limit(sayi)`

**Sayi kadar indexi atlayarak kayıtları listeler**

`db.collection-ad.find().skip(index).limit(sayi)`

**Kolonada gore kucukten buyuge listeler**

`db.collection-ad.find().sort({kolonad:1})`

**Kolonada gore buyukten kucuge listeler**

`db.collection-ad.find().sort({kolonad:-1})`
