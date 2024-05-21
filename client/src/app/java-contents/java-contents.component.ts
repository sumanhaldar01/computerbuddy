import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-java-contents',
  templateUrl: './java-contents.component.html',
  styleUrls: ['./java-contents.component.css']
})
export class JavaContentsComponent implements OnInit {
  id: string = '';
  j: any = {};

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

    this.api.getJava(fd).subscribe((data: any) => {
      this.j = data;
    });
  }
}
