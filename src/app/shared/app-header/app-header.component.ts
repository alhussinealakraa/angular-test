import {Component, OnInit} from '@angular/core';
import {FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/service/http-client/user.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  myControl = new FormControl<string | UserModel>('');
  options: UserModel[] = [];
  public formsGroup: FormGroup = new FormGroup({
    user: new FormControl<string | UserModel>(''),
  });
  public filteredOptions: UserModel[] =[];
  constructor(
    private _userService: UserService,
    private fb : FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    if (this.formsGroup.get('user') != null){
    this.formsGroup.get('user')!.valueChanges
    .subscribe(response => {
      if(response && response.length){
        this.filteredOptions = [];
        this.getUser(response);
      } else {
        this.filteredOptions = [];
      }
    })
  }
  }

  getUser(id: string){
    this._userService.getUser(id).subscribe(response => {
      if (response.data != null){
        this.filteredOptions.push(response.data);
      }
    })
  }

  selectUser(id: number){
    console.log(id);
    this.router.navigate(['user' , id], {
    });
  }
}
