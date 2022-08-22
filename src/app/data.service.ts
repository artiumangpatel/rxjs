import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  print(val:any,containerId:any){
    //element create for li
    let el = document.createElement('li');
    el.innerText=val;
    document.getElementById(containerId)?.appendChild(el);
        }
      
  constructor() { }

  dell={
  brand:'Dell',
  hardDisks:'2-TB',
  color:'black'
}

HP={
  brand:'HP',
  hardDisks:'1-TB',
  color:'silver'
}
notAvail={
  brand:'Not Available',
  status:'failed'
}


}
