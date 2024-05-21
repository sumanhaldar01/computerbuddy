import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-python',
  templateUrl: './add-python.component.html',
  styleUrls: ['./add-python.component.css']
})
export class AddPythonComponent {

  constructor(private api:ApiService, private router:Router){}
  
  pimg:any=null;

  fup(ev:any){
    this.pimg=ev.target.files[0];
  }

  addp(val:any){
    var fd= new FormData();
    fd.append("top",val.topic);
    fd.append("cont1",val.content1);
    fd.append("cont2",val.content2);
    fd.append("cont3",val.content3);
    fd.append("cont4",val.content4);
    fd.append("pimg",this.pimg);

    this.api.inspython(fd).subscribe((data:any)=>{
      this.router.navigate(['/list-python']);
    })
  }

}
