import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
obsMsg:any;

  constructor(private dataService:DataService) { }
 
   array1:any=["arti","umang","meera","yatri",20,45,60]
  ngOnInit(): void {

    const Obs1 = of(this.array1,'1','2','3');

    Obs1.subscribe(res=>{
      console.log(res)
  this.dataService.print(res,'elContainer')
    })
   
    const Obs2 = of({a:'1',b:'2',c:'3'});
    
    Obs2.subscribe(res=>{
      this.obsMsg=res;
      console.log("obsMsg=>",res);
  // this.dataService.print(res,'elContainer')
    })


//from-array

    const Obs3 = from(this.array1);
    Obs3.subscribe(res=>{
      console.log("array     ",res);
  this.dataService.print(res,'elContainer3')
})
   //from-promise
   const promise=new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(this.array1)
    },3000);
   })
   
   const Obs4 = from(promise);
   Obs4.subscribe(res=>{
     console.log("From promise =>    ",res);
 this.dataService.print(res,'elContainer4')
})
const Obs5 = from('welcome to icliq solution');
Obs5.subscribe(res=>{
  console.log("From string =>    ",res);
this.dataService.print(res,'elContainer5')
})
  }

}
