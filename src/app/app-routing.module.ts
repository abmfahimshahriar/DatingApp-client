import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {MemberListComponent} from "./members/components/member-list/member-list.component";
import {MemberDetailsComponent} from "./members/components/member-details/member-details.component";
import {ListsComponent} from "./core/components/lists/lists.component";
import {MessagesComponent} from "./core/components/messages/messages.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'members',
    component: MemberListComponent,
  },
  {
    path: 'members/:id',
    component: MemberDetailsComponent,
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
    path: '**',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
