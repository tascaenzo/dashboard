export enum Type {
  SUCCESS,
  ERROR,
  INFO,
  WARNING,
}

export class NotificationDto {
  readonly id = (Math.random().toString(36) + Date.now().toString(36)).substr(2);
  readonly message!: string;
  readonly type!: Type;
  readonly createdAt = Date.now();

  public constructor (dto?: Partial<NotificationDto>) {
    Object.assign(this, dto)
  }
}
