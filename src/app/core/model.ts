export interface Cursos{
    id: number;
    duracao: string;
    descricao: string;
    nomeCurso: string
    imgPath: string
}

export interface Estados{
    id: number,
    nome_estado: string,
    sigla: string
}

export interface Cidades{
    id: number,
    nomeCidade: string
}

export interface Universidades{
    id: number,
    nome_universidade: string,
    sigla: string,
    categoria: string,
    img: string,
    link: string
}

export interface CatUni{
    id: number,
    nome_universidade: string,
    sigla: string,
    categoria: string,
    img: string
}
