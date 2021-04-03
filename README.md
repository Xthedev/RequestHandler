# public-docs

## Built With

- [Node.js](https://nodejs.org/)

## Prerequisites

There are some global dependencies you need to set up.

- [Node.js](https://nodejs.org/)
- All you need to have is Node installed  :)

## Getting Started

```bash
npm install requesthandlerbyx

```


## USAGE
Making A SIMPLE POST/GET REQUEST  ONLY INVOLVES THE FOLLOWING

```bash
const data = new FormData();
data.append('firstname', "Sensei");
data.append('lastname', "X");




 //SIMPLY PUT IN THE URL, THE DATA VARIABLE ABOVE AND METHOD (POST OR GET)
RequestHandler('https://exampleapi.com/createuser',data,"POST",function(data){
    console.log(data); 
    //DO WHATEVER YOU WANT WITH THE DATA
        //IF DATA IS JSON
     let response = JSON.parse(data);
        console.log(response);
});


```