import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor(private dataService:DataService) { }

dellAvail(){ return true}
hpAvail(){return false}

promiseVal:any;
  ngOnInit() {
  
        let buyLaptop = new Promise((resolve,reject)=>{
                                    // {resolve('promise is resolved')}
                                  //  {reject('promise is rejected')}
                                  if(this.dellAvail()){
                                    return setTimeout(()=>{
                                      //  resolve("dell is purchased")
                                      resolve(this.dataService.dell);
                                      },10);
                                   
                                  }
                                  else if(this.hpAvail()){
                                    return setTimeout(()=>{
                                      //  resolve("HP is purchased")
                                      resolve(this.dataService.HP)
                                      },2000);
                                   
                                  } else
                                  {
                                    return setTimeout(()=>{  
                                      // reject("laptop is not available on store")
                                      reject(this.dataService.notAvail);
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
