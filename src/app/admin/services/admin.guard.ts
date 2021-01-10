import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../../core/services/account.service";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService,
  ) {
  }
  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if(user.roles.includes('Admin') || user.roles.includes('Moderator')) {
          return true;
        }
        this.toastrService.error('You can not access this route');
      })
    )
  }

}
