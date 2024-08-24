export interface User {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface RegisterResponse {
  message: string;
}
