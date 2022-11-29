export interface Cursos {
    id: number;
    duracao: string;
    descricao: string;
    nome_curso: string
    img: string
}

export interface Estados {
    id: number,
    nome_estado: string,
    sigla: string
}

export interface Cidades {
    id: number,
    nome_cidade: string
    estados: Estados
}

export interface Polos {
    id: number,
    nome_polo: string,
    universidades: Universidades,
    latitude: string,
    longitude: string,
    cidades: Cidades
}

export interface Universidades {
    id: number,
    nome_universidade: string,
    sigla: string,
    categoria: string,
    img: string,
    link: string
}

export interface PolosCursos{
    id: number,
    nota: number;
    link: string;
    cursos: Cursos;
    polos: Polos;
}

export interface Resultado{
    id: number;
    nome_polo: string,
    nome_curso: string
}