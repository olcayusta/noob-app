import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "movie",
    loadChildren: () =>
      import("./movie/movie.module").then((m) => m.MovieModule),
  },
  { path: 'watchlist', loadChildren: () => import('./watchlist/watchlist.module').then(m => m.WatchlistModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
