export type UserDTO = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export enum fieldsUser{
    'First Name',
    'Last Name',
    'Email',
    'Password',
    'Confirm Password'
}