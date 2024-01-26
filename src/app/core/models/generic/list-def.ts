import { ColDef } from './col-def';
import { Observable } from 'rxjs';
import { ListSearchParamsModel } from '../../request/list.request.params';

export interface ListDef {
  title?: string;
  icon?: boolean;
  fields: ColDef[];
  tableCssClass?: string[];
  delegateFunction: (
    apiParams: ListSearchParamsModel
  ) => Observable<{ items: any[]; totalCount: number }>;
  pageSizeOptions?: number[];
  hasFooterRow?: boolean;
  onRowClick?: (...args: any[]) => any;
  totalCount?: number;
  goBack?: (...args: any[]) => any;
  relativePath?: string;
  emptyDataMsg?: string
}
