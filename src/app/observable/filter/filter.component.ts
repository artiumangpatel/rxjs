import { Component, OnInit } from '@angular/core';
import { filter, from, map, toArray } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
   data:any;
   data2:any;
   data3:any;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getUser();  
    setTimeout(() => {
      const source= from(this.dataservice.dataArray) ;
     
      console.log("source: ", source);
  
      source.pipe(filter(member =>member.name.length > 15),
      toArray()).subscribe(res=>{
      console.log('result in subscribe', res);
      this.data =res;
    })

    // source.pipe(
    
    //   filter(member => member.gender == 'male' ),
    //   toArray()).subscribe(res=>{
    //   console.log(res);
    //   this.data2 =res;
    //   })
  
    //   // example 3 filter  by first n th id
    //   source.pipe(
    //     filter(member => member.id < 4 ),
    //     toArray()).subscribe(res=>{
    //     console.log(res);
    //     this.data3 =res;
    //     })
    }, 2000);

//static data   
  //  source.pipe(
  //   filter(member => member.name.length >3 ),
  //   toArray()).subscribe(res=>{
  //   console.log('result in subscribe', res);
  //   this.data =res;
  //   })

   const source=from(this.dataservice.users)
   
  // // example 1 by filter name >3
  //  source.pipe(
  //   filter(member => member.name.length >3 ),
  //   toArray()).subscribe(res=>{
  //   console.log(res);
  //   this.data =res;
  //   })

  //   //  example 2 filter  by gender
   source.pipe(
    
    filter(member => member.gender == 'male' ),
    toArray()).subscribe(res=>{
    console.log(res);
    this.data2 =res;
    })

    // example 3 filter  by first n th id
    source.pipe(
      filter(member => member.id < 4 ),
      toArray()).subscribe(res=>{
      console.log(res);
      this.data3 =res;
      })
  }

  
}
