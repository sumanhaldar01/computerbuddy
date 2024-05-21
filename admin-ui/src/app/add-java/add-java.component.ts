import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-add-java',
  templateUrl: './add-java.component.html',
  styleUrls: ['./add-java.component.css']
})
export class AddJavaComponent {

  constructor(private api:ApiService, private router:Router){

  }

  jimg:any=null;

  fup(ev:any){
    this.jimg=ev.target.files[0];
  }

  addj(val:any){
    var fd= new FormData();
    fd.append("top",val.topic);
    fd.append("cont1",val.content1);
    fd.append("cont2",val.content2);
    fd.append("cont3",val.content3);
    fd.append("cont4",val.content4);
    fd.append("jimg",this.jimg);

    this.api.insjava(fd).subscribe((data:any)=>{
      this.router.navigate(['/list-java']);
    })
  }
  
}
