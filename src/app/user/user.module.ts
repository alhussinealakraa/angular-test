import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { CoreModule } from '../core/core.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    UserRoutingModule,
    MaterialModule,
  ],
  exports:[
    UserListComponent,
  ],
})
export class UserModule { }
