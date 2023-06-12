import { CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from "./customerProtocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder{
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

    getName(): string {
      return this.firstName + ' ' + this.secondName
    }

    getIdentfier(): string {
      return this.cpf;
    }
}




export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder{
    name: string;
    cnpj: string;

    constructor(name: string, cnpj: string) {
      this.name = name;
      this.cnpj = cnpj;
    }

    getName(): string {
      return this.name;
    }
    
    getIdentfier(): string {
      return this.cnpj;
    }
}   