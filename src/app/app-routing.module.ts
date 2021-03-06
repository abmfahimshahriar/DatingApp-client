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
import {PreventUnsavedChangesGuard} from "./members/services/prevent-unsaved-changes.guard";
import {MemberDetailsResolver} from "./members/resolvers/member-details.resolver";
import {AdminPanelComponent} from "./admin/components/admin-panel/admin-panel.component";
import {AdminGuard} from "./admin/services/admin.guard";

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
        resolve: {
          member: MemberDetailsResolver,
        }
      },
      {
        path: 'member/edit',
        component: MemberEditComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
      },
      {
        path: 'lists',
        component: ListsComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'admin',
        component: AdminPanelComponent,
        canActivate: [AdminGuard]
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
