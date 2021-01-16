export class NotificationDto {
  readonly id = (Math.random().toString(36) + Date.now().toString(36)).substr(
    2
  );
  readonly message!: string;
  readonly type!: string;
  readonly createdAt = Date.now();
  readonly autoClose!: boolean;
  isOpen = true;

  public constructor(dto?: Partial<NotificationDto>) {
    Object.assign(this, dto);
  }
}
