import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  array=["arti","umang","meera","yatri","vishv","bhoomi","binal"]
 

  users=[{id:1,name:"arti",gender:'female',skill:'angular',job:{title:'frontend Devloper',exp:'10 years'} },
         {id:2,name:"umang",gender:'male',skill:'react', job:{title:'frontend Devloper',exp:'10 years'}},
         {id:3,name:"meera",gender:'female',skill:'javaScript',job:{title:'javaScript Devloper',exp:'10 years'}},
         {id:4,name:"yatri",gender:'female',skill:'vue',job:{title:'UI Devloper',exp:'10 years'}},
         {id:5,name:"vishv",gender:'male',skill:'node', job:{title:'frontend Devloper',exp:'10 years'}},
         {id:6,name:"bhoomi",gender:'female',skill:'html', job:{title:'HTML Devloper',exp:'10 years'}},]

         
         dataArray = [{id:1,name:"arti",gender:'female',skill:'angular',job:{title:'frontend Devloper',exp:'10 years'} },
        ];
         
         getUser (){
             fetch('https://jsonplaceholder.typicode.com/users')
             .then(response =>  
               { 
                //  console.log("response: ", response.json());
                 return response.json()
               }
             ).then(result => {
               console.log("result: ", result);
               this.dataArray = result;
             });;
           }
    // .then(data => { 
    //   console.log('data', data)
    //   this.dataArray = data;
    // });
  

  print(val:any,containerId:any){
    //element create for li
    let el = document.createElement('li');
    el.innerText=val;
    document.getElementById(containerId)?.appendChild(el);
        }
      
  constructor() { 
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response =>  
    //   { 
    //     // console.log("response: ", response.json());
    //     return response.json()
    //   }
    // ).then(result => {
    //   console.log("result: ", result);
    //   this.dataArray = result;
    // });;

  }

  dell={
  brand:'Dell',
  hardDisks:'2-TB',
  color:'black'
}

HP={
  brand:'HP',
  hardDisks:'1-TB',
  color:'silver'
}
notAvail={
  brand:'Not Available',
  status:'failed'
}


}
