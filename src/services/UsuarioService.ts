import api from './api';

export interface UsuarioCadastro {
  fullName: string;
  email: string;
  password: string;
  telefone?: string;
  recuperacao: string;
  dica_recuperacao: string;
}

export interface UsuarioLogado {
  id: number;
  fullName: string;
  email: string;
  telefone?: string;
  role: 'USER' | 'ADMIN';
}

const UsuarioService = {
  async cadastrarUsuario(dados: UsuarioCadastro) {
    const response = await api.post('/users/register', dados);
    return response.data;
  },

  async buscarPerfil(): Promise<{ message: string }> {
    const response = await api.get('/users/profile');
    return response.data;
  },
};

export default UsuarioService;
