import {Routes} from '@angular/router';
import {ListAComponent} from './list-a/list-a.component';
import {ListBComponent} from './list-b/list-b.component';
import {ListDefaultComponent} from './list-default/list-default.component';

export const routes: Routes = [
  {path: './', component: ListDefaultComponent},
  {path: 'list-a', component: ListAComponent},
  {path: 'list-b', component: ListBComponent},];
