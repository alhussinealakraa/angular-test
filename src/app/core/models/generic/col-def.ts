import { Role } from '../role.model';
import { ActionDef } from './action-def';
import { select_def } from './select-col-def';

export interface ColDef {
  key: string;
  isSortable?: boolean;
  isFilterable?: boolean;
  isHidden?: boolean;
  label: string;
  isSelectfiled?: boolean;
  selectfield?: select_def;
  cssClass?: ((element) => string[]) | string[];
  headerClass?: string[];
  matIconName?: ((element) => string) | string;
  cellSvgIcon?: (element) => string;
  cellStyle?: (element) => { [key: string]: string | number };
  cellHref?: ((element) => string) | string;
  elementId?: string;
  elementIdOfArray?: string;
  // A cell that contains image and text,
  cellImage?: (element) => string;



  // A cell that contains just an image without any text beside it.
  // If true the cellImage() function will be neglected.
  isImage?: boolean;
  searchableByKey?: boolean;
  footerCell?: {
    value?: string | number | any[];
    cssClass?: string[];
    tdCssClass?: string[];
    showSelectedRowsCount?: boolean;
    showTotalCount?: boolean;
    label?: string;
    cellSvgIcon?: () => string;
    // If not provided footer cell will be visible for all roles.
    visibleForRoles?: Role | Role[];
  };

  isSlideTogglefiled?: boolean;
  delegateFunction?: (...args: any[]) => any;
  hasIndicator?: (element) => boolean;
  indicatorTooltip?: string;
  hasDropDown?: boolean;
  hasDropDownInfo?: boolean;
  multValue?: ((element) => any[]) | any[];
  isPhoneWhatsApp?: (Element) => boolean;
  cssClassContent?: string[];
  visibleForNonRoleDoctor?: boolean;
  isRadio?: boolean;
  iconToolTip?: (element) => string;
  parentSpanCssClass?: string[];
  onIconClick?: (row) => any;
  onItemClick?: (row) => any;
  hasHoverAction?: boolean;
  hasExpandAction?: boolean;
  toolTip?: (element) => string;

}
