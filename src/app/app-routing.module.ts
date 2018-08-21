import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {IndexComponent} from './index/index.component';
import {SomeFuncComponent} from './some-func/some-func.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: IndexComponent},
  {path: 'edit', component: EditComponent},
  {path: 'add', component: AddComponent},
  {path: 'some', component: SomeFuncComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
