import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-java',
  templateUrl: './list-java.component.html',
  styleUrls: ['./list-java.component.css']
})
export class ListJavaComponent {

  constructor(private api:ApiService){

  }

  alljava:any=[];

  

  getdata(){
    this.api.seljava().subscribe((data:any)=>{
      this.alljava=data;
    })
  }

  ngOnInit(){
    this.getdata();
  }
  
  delj(id:any){
    if(window.confirm("Are you sure?")){
      var fd = new FormData();
      fd.append("id",id);
      this.api.deljava(fd).subscribe((data:any)=>{
        this.getdata();
      })
    }
  }

}
