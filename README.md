# pushmeByX   POST|GET requesthandler

## Built With

- [Node.js](https://nodejs.org/)

## Prerequisites

There are some global dependencies you need to set up.

- [Node.js](https://nodejs.org/)
- [For Vanilla JS visit the github page and open the dist folder Check On The Instructions File](https://github.com/Xthedev/RequestHandler)

## Getting Started

```bash
npm install pushmebyx

```

```bash

//REACT| REACTNATIVE| ANGULAR

//For FORMDATA POST/GET
import { RequestHandler } from 'pushmebyx';


//FOR JSON POST/GET





```
## USAGE
## WORKS WITH REACT | REACT NATIVE AND ANGULARJS & BEYOND

SEND DATA AS FORM DATA OR AS JSON POST 




## A SIMPLE WORKING EXAMPLE WITH A FORM DATA POST REQUEST
```bash







const data = new FormData();
data.append('firstname', "Sensei");
data.append('lastname', "X");
//FOR FILE UPLOADS
let mypicture= document.querySelector('#mypicture');
YOU ARE EXPECTED TO PROVIDE THE KEY | FILE OBJECT| FILE NAME
data.append('file', mypicture.files[0], 'mypicture.jpg');




 //SIMPLY PUT IN THE URL, THE DATA VARIABLE ABOVE AND METHOD (POST OR GET)

RequestHandler('https://exampleapi.com/createuser',data,"POST",function(data){
        console.log(data); 
        //DO WHATEVER YOU WANT WITH THE DATA

        //IF DATA IS JSON
        let response = JSON.parse(data);
        console.log(response);
});


```


## A SIMPLE WORKING EXAMPLE WITH A JSON POST REQUEST
```bash


  //NO NEED TO STRINGIFY
  const data = {
    name: "mmi",
    job: "vardeto"
  };



    RequestHandlerJSON("https://reqres.in/api/users", data, "POST", function ( data  ) {
      console.log(data);
    });



  ```