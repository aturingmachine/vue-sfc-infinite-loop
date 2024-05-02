import type { SomeEnum } from './consants'

export interface EventParams
  extends Partial<Record<SomeEnum, Record<string, string>>> {
  [SomeEnum.Thing1]: {
    postUid: string
    listingUid: string
  }
  [SomeEnum.Thing2]: undefined
  [SomeEnum.Thing3]: undefined
  [SomeEnum.Thing4]: undefined
  [SomeEnum.Thing5]: undefined
  [SomeEnum.Thing6]: undefined
  [SomeEnum.Thing7]: undefined
  [SomeEnum.Thing8]: undefined
  [SomeEnum.Thing9]: undefined
  [SomeEnum.Thing10]: undefined
  [SomeEnum.Thing11]: undefined
}
