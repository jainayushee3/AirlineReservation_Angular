export class User{
    First_Name : string;
    Last_Name : string;
    Phone: string;
    Email:string;
    DOB:string;
    Password:string;

   
    constructor(First_Name : string="",Last_Name : string="",Phone : string="",Email:string="",DOB:string="", Password:string=""){
    this.First_Name=First_Name;
    this.Last_Name=Last_Name;
    this.Password=Password;
    this.Email=Email;
    this.DOB=DOB;
    this.Password=Password;
    this.Phone=Phone;
    }
}
