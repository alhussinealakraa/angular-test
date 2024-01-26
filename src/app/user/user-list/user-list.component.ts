import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/core/models/user.model';
import { ListSearchParamsModel } from 'src/app/core/request/list.request.params';
import { UserService } from 'src/app/core/service/http-client/user.service';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { merge, Observable, of as observableOf, pipe} from 'rxjs';
import { ResponseListModel } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users : UserModel[]= [];
  public displayedColumns: string[] = ['id','avatar', 'first_name', 'last_name', 'email'];
  dataSource = new MatTableDataSource<UserModel>();
  @ViewChild('paginator') paginator!: MatPaginator;
  public totalData: number =0;
  public isLoading = false;

  constructor(
    private _userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
    }

  ngOnInit(){
    let params: ListSearchParamsModel = {
      page: 1,
      per_page: 10,
    }
    this.getUsersData$(params);
  }

  getUsersData$(params: ListSearchParamsModel){
    return this._userService.getUserList(params);
  }

  onSelectUser(user : UserModel){
    this.router.navigate([user.id], {
      relativeTo: this.route,
    });
}

ngAfterViewInit() {

  this.dataSource.paginator = this.paginator;

  this.paginator.page
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        return this.getUsersData$({
          page: this.paginator.pageIndex + 1,
          per_page: this.paginator.pageSize,
        }
        );
      }),
      map((data: ResponseListModel<UserModel>) => {
        if (data == null) return [];
        this.totalData = data.total;
        this.isLoading = false;
        return data.data;
      })
    )
    .subscribe((users) => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users);
    });
}
}

