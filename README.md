# pushmeByX   POST|GET requesthandler

## Built With

- [Node.js](https://nodejs.org/)

## Prerequisites

There are some global dependencies you need to set up.

- [Node.js](https://nodejs.org/)
- All you need to have is Node installed  :)

## Getting Started

```bash
npm install pushmebyx

```


## USAGE
Making A SIMPLE POST/GET REQUEST  ONLY INVOLVES THE FOLLOWING

WORKS WITH REACT | REACT NATIVE AND ANGULARJS|


```bash



//INCLUDE ALL DATA YOU WANT TO UPLOAD, supports FILES

let mypicture= document.querySelector('#mypicture');



const data = new FormData();
data.append('firstname', "Sensei");
data.append('lastname', "X");


//FOR FILE UPLOADS

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