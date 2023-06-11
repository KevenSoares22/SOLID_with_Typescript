import { CustomerProtocol } from "./customerProtocol";

export class IndividualCustomer implements CustomerProtocol{
    firstName: string;
    secondName: string;
    cpf: string;
    cnpj: string;

    constructor(firstName: string, secondName: string, cpf: string) {
      this.firstName = firstName;
      this.secondName = secondName;
      this.cpf = cpf;
      this.cnpj = '';
    }
}




export class EnterpriseCustomer implements CustomerProtocol{
    firstName: string;
    secondName: string;
    cpf: string;
    cnpj: string;

    constructor(firstName: string, secondName: string, cnpj: string) {
      this.firstName = firstName;
      this.secondName = secondName;
      this.cpf = '';
      this.cnpj = cnpj;
    }



}


