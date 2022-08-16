import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent {
  

  constructor(private dataService:DataService) { }

  

  result1:any;
  result2:any;
  result3:any;

  // testPromise = new Promise((resolve,reject) => {
  //   console.log('promise executed -11111');
  // });
  buyLaptop2 = fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());

   buyLaptop1 =new Promise((resolve,reject)=>{
     console.log('buy laptop1');
    //  setTimeout(()=>{
    //     console.log('promise executed1');
    //     console.log('promise executed2');
    //     resolve(this.dataService.dell);
    //     console.log('promise executed3');
    //   },5000);
      
    
    this.buyLaptop2.then(result => {
      console.log(result);   
      console.log('buy laptop2');
    });

      Promise.race([this.buyLaptop1, this.buyLaptop2]).then((value) => {
        console.log(value);
        // Both resolve, but promise2 is faster
      });
  });

    // Ex-1 promise


    fetch1=()=>{
      console.log('working')
      this.result1 ='fetching data ...';
   this.buyLaptop1.then(result=>{
     console.log(result);
     this.result1=JSON.stringify(result);
     })
   
  }
      

// Ex -2 async-await 

  async fetch2(){

   this.result2="fetching data";
   let data = await this.buyLaptop1;
   console.log("data"+ data);
   this.result2 =JSON.stringify(data);

   }

   //using promise fetch Data
//  fetch3=()=>{
//   this.result3 ="fetching Data ....";
//   this.buyLaptop2.then((res)=>{
//     this.result3=JSON.stringify(res);})
//    }
  
//using async/Await fetch data api
   fetch3=async ()=>{
  this.result3 ="fetching Data ....";
  console.log(this.result3);
   let res = await this.buyLaptop2;
    this.result3  = JSON.stringify(res);
   }
 
  
  
  
  
  // ngOnInit() {
    
    // let promise =new Promise((resolve,reject)=>{setTimeout(()=>{
    //   resolve("data received");
    // },5000)});
    // let getData =  async function(){
    // let response = await promise;
    // console.log (response);
    // }
    // getData();


   
  // }
   
}