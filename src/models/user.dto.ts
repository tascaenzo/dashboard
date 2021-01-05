export class UserDto {
  id!: string;
  email!: string;
  name!: string;
  surname!: string;
  isBanned!: boolean;
  role: {} | undefined;

  public constructor(dto?: Partial<UserDto>) {
    Object.assign(this, dto);
  }
}