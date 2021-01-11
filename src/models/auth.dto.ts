export class LoginDto {
  readonly email!: string;
  readonly password!: string;
  readonly remember!: boolean;

  public constructor (dto?: Partial<LoginDto>) {
    Object.assign(this, dto)
  }
}
