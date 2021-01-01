import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {MemberListComponent} from "./members/components/member-list/member-list.component";
import {MemberDetailsComponent} from "./members/components/member-details/member-details.component";
import {ListsComponent} from "./core/components/lists/lists.component";
import {MessagesComponent} from "./core/components/messages/messages.component";
import {AuthGuard} from "./core/services/auth.guard";
import {TestErrorsComponent} from "./core/components/test-errors/test-errors.component";
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {ServerErrorComponent} from "./core/components/server-error/server-error.component";
import {MemberEditComponent} from "./members/components/member-edit/member-edit.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members',
        component: MemberListComponent,
      },
      {
        path: 'members/:username',
        component: MemberDetailsComponent,
      },
      {
        path: 'member/edit',
        component: MemberEditComponent,
      },
      {
        path: 'lists',
        component: ListsComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
    ]
  },
  {
    path: 'errors',
    component: TestErrorsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
