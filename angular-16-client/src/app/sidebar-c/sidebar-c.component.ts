import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidebar-c',
  templateUrl: './sidebar-c.component.html',
  styleUrls: ['./sidebar-c.component.css']
})
export class SidebarCComponent {

  constructor(private api:ApiService, private route:ActivatedRoute, private router:Router){}

  tpsc:any=[];

  getdata(){
    this.api.seltpsc().subscribe((data:any)=>{
      this.tpsc=data;
    })
  };

  ngOnInit(){
    this.getdata();
  };

}
