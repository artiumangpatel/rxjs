import { Component, OnInit } from '@angular/core';
import { from, interval, of, take, toArray } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  array=["arti","umang","meera","yatri"]
   user=[{name:"yatri",age:6},
         {name:"meera",age:1},
         {name:"umang",age:33},
         {name:"arti",age:30},]
  ngOnInit(): void {
    const source= interval(1000);
     const example = source.pipe(take(10),toArray()).subscribe(res=>{console.log(res)
    this.dataservice.print(res,'elContainer1')})
    
    //toArray-of
    const obs1= of(this.user);
    obs1.pipe(toArray()).subscribe(res=>{console.log("Of =>",res)
    this.dataservice.print(res,'elContainer2')})

    //toArray-from
    const obs2= from(this.array);
    obs2.pipe(toArray()).subscribe(res=>{console.log("from=>",res)
    this.dataservice.print(res,'elContainer3')})
  }

}

