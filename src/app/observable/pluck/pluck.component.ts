import { Component, OnInit } from '@angular/core';
import { from, map, toArray,pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  data:any;
data2:any;
  constructor() { }
  users=[{id:1,name:"arti",skill:'angular',
          job:{title:'frontend Devloper',
               exp:'10 years'
              }
         },
         {id:2,
          name:"umang",
          skill:'react', 
  job:{title:'frontend Devloper',
  exp:'10 years'
}},
  {id:3,
   name:"meera",
   skill:'javaScript'
,  job:{title:'javaScript Devloper',
exp:'10 years'
}},
  {id:4,
    name:"yatri",
    skill:'vue',
    job:{title:'UI Devloper',
  exp:'10 years'
}},
  {id:5,
    name:"vishv",
    skill:'node', 
    job:{title:'frontend Devloper',
  exp:'10 years'
}},
  {id:6,
  name:"bhoomi",
  skill:'html', 
  job:{title:'HTML Devloper',
  exp:'10 years'
}},]
  ngOnInit(): void {
// example-1  get root level property get 
    from(this.users).
    pipe(pluck('skill'),
     toArray()
    ). subscribe(res=>{
       console.log(res);
      this.data=res;
    })


    //example-2 nested array get nested property 
    from(this.users).
    pipe(pluck('job','title'),
     toArray()
    ). subscribe(res=>{
       console.log(res);
      this.data2=res;
    })
  }

}
