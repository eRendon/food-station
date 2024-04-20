export interface IRegisterUser extends IUserProfile {
  password?: string
}

export interface ILoginUser {
  password: string
  email: string
}

export interface IUserProfile {
  id?: number
  rol: number
  token?: string
  username: string
  email: string
}
