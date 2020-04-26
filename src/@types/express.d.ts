// override de tipagem no express para que seja possível incluir nos requests os dados do usuario
declare namespace Express {
  // não faz uma substituição, faz um anexo
  export interface Request {
    user: {
      id: string;
    };
  }
}
