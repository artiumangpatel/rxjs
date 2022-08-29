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
    
  //  const source= from(this.dataservice.dataArray)
  const source=from(this.dataservice.users)
   
  //example 1 by filter name >3
   source.pipe(
    filter(member => member.name.length >3 ),
    toArray()).subscribe(res=>{
    console.log(res);
    this.data =res;
    })

     //example 2 filter  by gender
   source.pipe(
    
    filter(member => member.gender == 'male' ),
    toArray()).subscribe(res=>{
    console.log(res);
    this.data2 =res;
    })

    //example 3 filter  by first n th id
    source.pipe(
      filter(member => member.id < 4 ),
      toArray()).subscribe(res=>{
      console.log(res);
      this.data3 =res;
      })
  }

}
