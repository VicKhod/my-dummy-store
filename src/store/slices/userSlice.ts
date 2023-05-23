import { createSlice } from "@reduxjs/toolkit"

export interface User {
  first_name: string
  last_name: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  username: string | undefined
  password: string | undefined
}
