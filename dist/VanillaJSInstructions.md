# pushmeByX   POST|GET requesthandler

## Built With

- JAVASCRIPT


## Getting Started

```bash
//SIMPLY IMPORT THE pushmebyx.js file in dist folder into your project

<script src="pushmebyx.js"> </script>

```

```bash


//For FORMDATA POST/GET

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