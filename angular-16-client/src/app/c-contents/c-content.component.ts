import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-content',
  templateUrl: './c-content.component.html',
  styleUrls: ['./c-content.component.css']
})
export class CContentComponent implements OnInit {

  id: string = '';
  cs: any = {};

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id') as string; // Use empty string as a default if id is null
      this.loadData();
    });
  }

  loadData() {
    var fd = new FormData();
    fd.append('id', this.id);

    this.api.getC(fd).subscribe((data1: any) => {
      this.cs = data1;
    });
  }

}
