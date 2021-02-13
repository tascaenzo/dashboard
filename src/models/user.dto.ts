export class UserDto {
  id!: string;
  email!: string;
  name!: string;
  surname!: string;
  isBanned!: boolean;
  role: {} | undefined;
  password!: string;

  public constructor(dto?: Partial<UserDto>) {
    Object.assign(this, dto);
  }
}
