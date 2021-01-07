/** 归属地 */
export enum AddrTypes {
  LOC = 'LOCAL' /** 国产 */,
  ETR = 'ENTRANCE' /** 进口 */,
}

/** 联系人角色 */
export enum ContactRoles {
  SUP = 'supplier' /** 供应商 */,
  CLI = 'client' /** 委托方 */,
  CST = 'customer' /** 收货方 */,
}

/** 联系人类型 */
export enum ContactType {
  PSN = 'personal' /** 个人 */,
  ETP = 'enterprise' /** 企业 */,
}

/** 供应商类型 */
export enum RecordType {
  FP = 'FoodProducers' /** 食品生产者（特殊食品生产者） */,
  FO = 'FoodOperator' /** 食品经营者 */,
  EA = 'SellersOfEdibleAgricultural' /** 食用农产品销售者 */,
  OT = 'Other' /** 其他 */,
}
