import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

dellAvail(){ return true}
hpAvail(){return false}

promiseVal:any;
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

  ngOnInit() {
  
        let buyLaptop = new Promise((resolve,reject)=>{
                                    // {resolve('promise is resolved')}
                                  //  {reject('promise is rejected')}
                                  if(this.dellAvail()){
                                    return setTimeout(()=>{
                                      //  resolve("dell is purchased")
                                      resolve(this.dell);
                                      },2000);
                                   
                                  }
                                  else if(this.hpAvail()){
                                    return setTimeout(()=>{
                                      //  resolve("HP is purchased")
                                      resolve(this.HP)
                                      },2000);
                                   
                                  } else
                                  {
                                    return setTimeout(()=>{  
                                      // reject("laptop is not available on store")
                                      reject(this.notAvail);
                                    },2000)
                                   }
                               });

       buyLaptop.then(res=>{
        console.log('then code =>',res)
        this.promiseVal=res;
      })//promise resolve
        .catch(res=>{
          console.log('catch code =>',res)
        this.promiseVal=res;
        });//promise reject
           }
}

function elseif(arg0: boolean) {
  throw new Error('Function not implemented.');
}
