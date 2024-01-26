import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/http-client/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  public user: UserModel = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  } ;

  constructor(private router: Router,
     private _userService: UserService,
     private route: ActivatedRoute,
     private userService: UserService,
     private location: Location,
     ){}
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params  => {
        console.log(params.get('id'));
        this.user.id =parseInt(params.get('id') ?? '0');
      });
      this.userService.getUser(this.user.id.toString()).subscribe(
        data => this.user = data.data ?? {
          id: 0,
          email: '',
          first_name: '',
          last_name: '',
          avatar: '',
        },
      )
  }

  goBack(){
    this.location.back();
  }
}
