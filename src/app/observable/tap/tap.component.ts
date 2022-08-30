import { Component, OnInit } from '@angular/core';
import { interval, Subscription ,tap,map} from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
   sub1:Subscription | undefined ;
   sub2:Subscription | undefined;
  constructor(private dataservice:DataService) { }
   myColor:any;
  ngOnInit(): void {

    const sourse= interval(1000)
    //example 1
    this.sub1 =sourse.pipe(
      tap( res=>{ console.log('tap before',res)
        if(res==4){ this.sub1?.unsubscribe();}}),
      map(res=>this.dataservice.array[res]),
      tap(res=>console.log('tap after',res))
      ).subscribe(res=>{
        console.log(res);
        this.dataservice.print(res,'elContainer');
      });

      //example 2 color effect
const Colors=['red','yellow','orange','green','blue','purple'];
this.sub2 =sourse.pipe(
  tap( res=>{ 
    this.myColor=Colors[res];
    console.log('tap before',res)
    if(res==5){ 
      this.sub2?.unsubscribe();
    }
  }),
  map(res=>Colors[res])

  ).subscribe(res=>{
    console.log(res);
    this.dataservice.print(res,'elContainer2');
  });

    
  }

}
