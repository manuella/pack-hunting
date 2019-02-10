export class Account
{
  constructor(
    public accountId: number,
    public userName: string,
    public displayNam: string,
    public createTime: Date,
    public createUser: string,
    public updateTime: Date,
    public updateUser: string,
  )
  {

  }

}
