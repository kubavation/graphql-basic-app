import { LaunchDetailsPipe } from './launches/pipe/LaunchDetailsPipe.pipe';
import { LaunchDetailsComponent } from './launches/component/launch-details/launch-details.component';
import { LaunchListComponent } from './launches/component/launch-list/launch-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material';
import { EmbedYtPipe } from './launches/pipe/embed-yt.pipe';
import { SafePipe } from './launches/pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LaunchDetailsComponent,
    LaunchDetailsPipe,
    EmbedYtPipe,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
