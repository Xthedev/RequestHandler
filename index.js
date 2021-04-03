//
// ──────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E S P O N S E   S T O R E D   I N   S T A T E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
//



 


//
// ──────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E Q U E S T   H A N D L E R   M O D U L E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//




export const RequestHandler=(url,data,type,callback)=>{


    // save('insurance',insurance);
    const URL = url;
      const xhr = new XMLHttpRequest();
      xhr.open(type, URL);
      xhr.send(data);
      xhr.onreadystatechange = e => {
       
     
        
       if(callback) callback(xhr.responseText);
      };
     
    
    
    }
    
    
    export const RequestHandlerJSON=(url,data,type,callback)=>{
    
    
        // save('insurance',insurance);
        const URL = url;
          const xhr = new XMLHttpRequest();

          xhr.open(type, URL);
          xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

          xhr.send(JSON.stringify(data));
          xhr.onreadystatechange = e => {
           
         
            
           if(callback) callback(xhr.responseText);
          };
         
        
        
        }
    
    //
    // ──────────────────────────────────────────────────────────────────────────────────── I ──────────
    //   :::::: R E Q U E S T   H A N D L E R   M O D U L E : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────────
    //