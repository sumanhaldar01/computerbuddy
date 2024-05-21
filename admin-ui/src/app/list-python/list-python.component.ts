import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-python',
  templateUrl: './list-python.component.html',
  styleUrls: ['./list-python.component.css']
})
export class ListPythonComponent {

  constructor(private api:ApiService,private router:Router){}

  allpython:any=[];

  

  getdata(){
    this.api.selpython().subscribe((data:any)=>{
      this.allpython=data;
    })
  }

  ngOnInit(){
    this.getdata();
  }
  
  delp(id:any){
    if(window.confirm("Are you sure?")){
      var fd = new FormData();
      fd.append("id",id);
      this.api.delpython(fd).subscribe((data:any)=>{
        this.getdata();
      })
    }
  }

}
