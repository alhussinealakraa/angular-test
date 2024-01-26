import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { ResponseListModel, ResponseModel } from '../../models/response.model';
import { UserModel } from '../../models/user.model';
import { AppConstants } from '../../constant/app.constant';
import { ListSearchParamsModel, getListApiParams, getUserParams } from '../../request/list.request.params';
import { memoize } from '../../caching/memorize';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    public httpClient: HttpClient,
  ) { }
  //@memoize()
  getUserList(paramsApi : ListSearchParamsModel) {
    const params = getListApiParams(paramsApi);
    return this.httpClient.get<ResponseListModel<UserModel>>(
      `${AppConstants.baseUrl}users`,
      {
        params,
      }
    );
  }
/*
  search(searchParams: ListSearchParamsModel) {
    const params = getListApiSearchParams(searchParams);
    return this.httpClient.get<ResponseListModel<UserModel>>(
      `${AppConstants.baseUrl}users`,
      {
        params,
      }
    );
  }
*/
  getUser(userId: string) {
    const params = getUserParams(userId)
    return this.httpClient.get<ResponseModel<UserModel>>(
      `${AppConstants.baseUrl}users`,
      {
        params,
      }
    );
  }

}
