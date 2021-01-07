import { AddrTypes, ContactRoles, ContactType, RecordType } from './enum';

/** 联系人 */
export interface Contact {
  readonly addrType: AddrTypes.LOC /** 归属地 */;
  contactType: ContactType /** 主体性质 */;
  contactName: string | null /** 姓名/经营者名称 */;
  linkman: string | null /** 联系人 */;
  contactInformation: string | null /** 联系电话/联系人电话 */;
  idNumber: string | null /** 身份证 */;
  creditCode: string | null /** 统一社会信用代码 */;
  recordType: RecordType | null /** 供应商类型 */;
  licence: string | null /** 许可证编号 */;
  areaAddress: string | null /** 区域地址 */;
  address: string | null /** 详细地址 */;
}

/** 供应商 */
export interface Supplier extends Contact {
  readonly bolongtoType: ContactRoles.SUP /** bolongto is typo of `belongTo` */;
}

/** 委托方 */
export interface Client extends Contact {
  readonly bolongtoType: ContactRoles.CLI;
}

/** 收货方 */
export interface Customer extends Contact {
  readonly bolongtoType: ContactRoles.CST;
}
