import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProdorderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdorderProvider {
    database: any;
  constructor(public http: HttpClient) {
   this.database = {
  "Product" : {
    "productCode" : 1,
    "productDes" : "This is what it is",
    "productID" : {
      "Assembly" : {
        "assembleDes" : "This is what it is",
        "assembleID" : 1,
        "assembleVid" : "url",
        "assemblyCode" : 1
      },
      "Repair" : {
        "partID" : {
          "Parts" : {
            "partDes" : "This is what it is"
          },
          "partsProblem" : {
            "problemID" : 1,
            "repairVid" : "url"
          }
        },
        "repairCode" : 1,
        "repairID" : 1
      }
    },
    "productPic" : "url"
  },
  "Service" : {
    "orderID" : 1,
    "problem" : "0-1",
    "productID" : 1,
    "serviceCode" : 1,
    "serviceID" : {
      "order" : {
        "address" : "163 Williams street",
        "buyerFName" : "Rachel",
        "buyerLName" : "Gonzalez",
        "dateDelivered" : "11-03-17",
        "dateOrdered" : "10-03-17",
        "email" : "email@email.com",
        "orderCode" : 1,
        "orderID" : {
          "orderItems" : {
            "productID" : 1
          }
        },
        "phoneNumber" : "254-658-7895"
      },
      "probDescription" : {
        "complaint" : "This is what it is",
        "orderID" : 1,
        "probID" : 1,
        "productID" : 1
      }
    },
    "status" : "0-1-2",
    "userID" : 1
  },
  "User" : {
    "companyID" : {
      "company" : {
        "companyCode" : 1,
        "companyName" : "LBF"
      }
    },
    "email" : "akrasner26@gmail.com",
    "fName" : "Allan",
    "lName" : "Krasner",
    "password" : "welcome",
    "phoneNumber" : "123-455-4435",
    "userCode" : 1,
    "userID" : 1
  }
}  
  }
 findProductDetails(){
     console.log("i am here");
     
 }
}
