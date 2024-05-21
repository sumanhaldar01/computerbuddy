import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar-java',
  templateUrl: './sidebar-java.component.html',
  styleUrls: ['./sidebar-java.component.css']
})
export class SidebarJavaComponent {
  constructor(private api:ApiService, private route:ActivatedRoute, private router:Router){}

  tps:any=[];

  getdata(){
    this.api.seltps().subscribe((data:any)=>{
      this.tps=data;
    })
  };

  ngOnInit(){
    this.getdata();
  };
}
