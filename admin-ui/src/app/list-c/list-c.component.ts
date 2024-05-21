import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-c',
  templateUrl: './list-c.component.html',
  styleUrls: ['./list-c.component.css']
})
export class ListCComponent {

  constructor(private api:ApiService){

  }

  allc:any=[];

  

  getdata(){
    this.api.selc().subscribe((data:any)=>{
      this.allc=data;
    })
  }

  ngOnInit(){
    this.getdata();
  }
  
  delc(id:any){
    if(window.confirm("Are you sure?")){
      var fd = new FormData();
      fd.append("id",id);
      this.api.delc(fd).subscribe((data:any)=>{
        this.getdata();
      })
    }
  }

}
