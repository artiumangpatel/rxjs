import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {
  

  constructor(private dataService:DataService) { }

  

  result1:any;
  result2:any;
  result3:any;
  
   buyLaptop =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('promise executed');
    resolve(this.dataService.dell);
    },5000);})

    buyLaptop2 = fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json());

    // Ex-1 promise


    fetch1=()=>{
      // console.log('working')
      this.result1 ='fetching data ...';
   this.buyLaptop.then(result=>{
     console.log(result);
     this.result1=JSON.stringify(result);
     })
   
  }
      

// Ex -2 async-await 

  async fetch2(){

   this.result2="fetching data";
   let data = await this.buyLaptop;
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
 
  
  
  
  
  ngOnInit() {
    
    // let promise =new Promise((resolve,reject)=>{setTimeout(()=>{
    //   resolve("data received");
    // },5000)});
    // let getData =  async function(){
    // let response = await promise;
    // console.log (response);
    // }
    // getData();


   
  }
   
}