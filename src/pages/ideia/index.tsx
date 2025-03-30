import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CadastroContainer,
  CadastroBox,
  Form,
  Input,
  TextArea,
  CheckboxContainer,
  Button,
} from './styles';
import logo from '../../assets/logosn.png';
import api from '../../services/api';

export default function CadastroIdeia() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [comoConheceu, setComoConheceu] = useState('');
  const [participarClube, setParticiparClube] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/formularios', {
        titulo_projeto: titulo,
        descricao_ideia: descricao,
        como_conheceu: comoConheceu,
        participar_clube: participarClube,
      });
      alert('Ideia enviada com sucesso!');
      navigate('/');
    } catch {
      alert('Erro ao enviar a ideia. Tente novamente.');
    }
  };

  return (
    <CadastroContainer>
      <CadastroBox>
        <img src={logo} alt="Logo" />
        <h2>Compartilhe sua ideia</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            maxLength={255}
            required
            type="text"
            placeholder="Título do projeto"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextArea
            required
            placeholder="Descreva sua ideia"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Input
            maxLength={255}
            type="text"
            placeholder="Como conheceu o Idealize? (opcional)"
            value={comoConheceu}
            onChange={(e) => setComoConheceu(e.target.value)}
          />
          <CheckboxContainer>
            <label>
              <input
                type="checkbox"
                checked={participarClube}
                onChange={(e) => setParticiparClube(e.target.checked)}
              />
              Deseja participar do clube de ideias?
            </label>
          </CheckboxContainer>
          <Button>Enviar Ideia</Button>
        </Form>
      </CadastroBox>
    </CadastroContainer>
  );
}
