import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-c',
  templateUrl: './add-c.component.html',
  styleUrls: ['./add-c.component.css']
})
export class AddCComponent {

  constructor(private api:ApiService, private router:Router){

  }

  cimg:any=null;

  fup(ev:any){
    this.cimg=ev.target.files[0];
  }

  addc(val:any){
    var fd= new FormData();
    fd.append("top",val.topic);
    fd.append("cont1",val.content1);
    fd.append("cont2",val.content2);
    fd.append("cont3",val.content3);
    fd.append("cont4",val.content4);
    fd.append("cimg",this.cimg);

    this.api.insc(fd).subscribe((data:any)=>{
      this.router.navigate(['/list-c']);
    })
  }

}
