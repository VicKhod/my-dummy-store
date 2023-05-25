export interface IUser {
  id?: number
  username: string
  email?: string
  firstName?: string
  lastName?: string
  gender?: string
  image?: string
  token: string
}

export interface IUserResponse {
  user: IUser
  token: string
}

export interface ILoginRequest {
  username: string | undefined
  password: string | undefined
}
