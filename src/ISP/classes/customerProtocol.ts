export interface CustomerOrder {
    getName(): string;
    getIdentfier(): string;  
}

export interface IndividualCustomerProtocol {
    firstName: string;
    secondName: string;
    cpf: string;
}

export interface EnterpriseCustomerProtocol {
    name: string;
    cnpj: string;
}