import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroViewComponent } from './intro-view/intro-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { GameViewComponent } from './game-view/game-view.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { AboutViewComponent } from './about-view/about-view.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameViewComponent,
  },
  {
    path: 'intro',
    component: IntroViewComponent,
  },
  {
    path: 'result',
    component: ResultViewComponent,
  },
  {
    path: 'about',
    component: AboutViewComponent,
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
