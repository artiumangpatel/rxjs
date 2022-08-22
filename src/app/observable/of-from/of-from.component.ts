import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    const Obs1 = of('1','2','3');
    Obs1.subscribe(res=>{
      console.log(res)
  this.dataService.print(res,'elContainer')
    })
   
  }

}
