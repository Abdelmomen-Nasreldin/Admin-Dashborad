export interface UserAPI {
    _id?: string,
    username: string,
    email: string,
    password: string,
    isAdmin?: boolean,
    imageSrc?: string,
    createdAt?: Date,
    updatedAt?: Date
}
