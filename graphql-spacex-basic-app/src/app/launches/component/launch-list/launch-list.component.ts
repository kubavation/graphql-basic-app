import { LaunchesListGQL } from './../../../services/spacexGraphql.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'apollo-link';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  private launches$;

  constructor(private launchesService: LaunchesListGQL) { }

  ngOnInit() {
    this.launches$ = this.launchesService
      .fetch({limit: 20})
      .pipe(
        map(res => res.data.launchesPast)
      );
  }

}
