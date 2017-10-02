export class Empresa {
    nome: string;
    endereco: string;
    enderecoNumero: number;
    telefone: string;
    tags: string;
    //logo: any;

    constructor (id?: string, nome?: string, endereco?: string, enderecoNumero?: number, telefone?: string, tags?: string) {
        if (nome) {
            this.nome = nome;
            this.endereco = endereco;
            this.enderecoNumero = enderecoNumero;
            this.telefone = telefone;
            this.tags = tags;
        } else {
            this.nome = "";
            this.endereco = "";
            this.enderecoNumero = 0;
            this.telefone = "";
            this.tags = "";
        }
    }
}