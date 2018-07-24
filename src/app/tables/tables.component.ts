import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.httpClient.get(`/foo/${params['id']}`).subscribe(data => {
        console.log(data);
      });
    });

    this.route.params
      .pipe(
        switchMap((params: any) => {
          return this.httpClient.get(`/foo/${params['id']}`);
        })
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
