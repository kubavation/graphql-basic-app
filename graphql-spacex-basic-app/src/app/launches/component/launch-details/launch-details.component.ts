import { LaunchesListGQL, LaunchDetailsGQL } from './../../../services/spacexGraphql.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {

  private launch$;

  constructor(private route: ActivatedRoute,
              private launchService: LaunchDetailsGQL) { }

  ngOnInit() {
    this.launch$ = this.route.paramMap
      .pipe(
          switchMap(res => {
            const id = res.get('id');
            return this.launchService.fetch({id});
          }),
          map(res => res.data.launch)
      )
  }

}
