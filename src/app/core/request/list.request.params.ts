import { HttpParams } from "@angular/common/http";

export interface ListSearchParamsModel {
    page: number,
    per_page: number,
}

export function getListApiParams(apiParams: ListSearchParamsModel): HttpParams {
    let params = new HttpParams()
        .set('page', apiParams.page + '')
        .set('per_page', apiParams.per_page + '');
    return params;
}

export function getUserParams(id: string): HttpParams {
  let params = new HttpParams()
      .set('id', id);
  return params;
}
