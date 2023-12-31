const fs = require('fs');
const path  = require('path');
const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    );


const getProductsFromfile = (cb) =>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
          cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
    })
    
    
   

}

const products = [];

module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        getProductsFromfile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
        // products.push(this);
        // fs.readFile(p,(err,fileContent)=>{
            // console.log(fileContent);
            // console.log(err);
            // let products = [];
            // if(!err){
            //     // products = JSON.parse(fileContent);
            // }
            // products.push(this);
            // fs.writeFile(p,JSON.stringify(products),(err)=>{
            //     console.log(err);
            // });
        // })
       

    }

    static fetchAll(cb){
        // const p = path.join(path.dirname(process.mainModule.filename),
        // 'data',
        // 'products.json'
        // );

        // fs.readFile(p,(err,fileContent)=>{
        //     if(err){
        //      cb([]);
        //     }
        //     cb(JSON.parse(fileContent));
        // })
        // return products;

        getProductsFromfile(cb);
    }
}