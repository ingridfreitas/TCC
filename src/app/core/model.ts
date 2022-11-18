export interface Cursos {
    id: number;
    duracao: string;
    descricao: string;
    nomeCurso: string
    imgPath: string
}

export interface Estados {
    id: number,
    nome_estado: string,
    sigla: string
}

export interface Cidades {
    id: number,
    nome_cidade: string
}

export interface Universidades {
    id: number,
    nome_universidade: string,
    sigla: string,
    categoria: string,
    img: string,
    link: string
}

export interface CatUni {
    id: number,
    nome_universidade: string,
    sigla: string,
    categoria: string,
    img: string
}

export interface Polos {
    id: number,
    nome_polo: string
}