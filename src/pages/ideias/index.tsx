/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import {
  IdeiasContainer,
  IdeiaCard,
  IdeiaTitulo,
  Button,
  DialogOverlay,
  DialogBox,
  DialogContent,
} from './styles';

interface Ideia {
  id: number;
  titulo_projeto: string;
  descricao_ideia: string;
  data_envio: string;
  usuario?: {
    fullName: string;
    email: string;
    telefone?: string;
  };
}

export default function Ideias() {
  const [ideias, setIdeias] = useState<Ideia[]>([]);
  const [ideiaSelecionada, setIdeiaSelecionada] = useState<Ideia | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.role === 'ADMIN') { 
      api.get('/formularios')
      .then((res) => setIdeias(res.data))
      .catch(() => alert('Erro ao buscar suas ideias.'));
    } else {
      api.get('/formularios/minhas')
      .then((res) => setIdeias(res.data))
      .catch(() => alert('Erro ao buscar suas ideias.'));
    }
  }, []);

  return (
    <IdeiasContainer>
      <h2>Minhas Ideias</h2>

      {ideias.map((ideia) => (
        <IdeiaCard key={ideia.id}>
          <IdeiaTitulo>{ideia.titulo_projeto}</IdeiaTitulo>
          <Button onClick={() => setIdeiaSelecionada(ideia)}>Ver detalhes</Button>
        </IdeiaCard>
      ))}

      {ideiaSelecionada && (
        <DialogOverlay>
          <DialogBox>
            <h3>{ideiaSelecionada.titulo_projeto}</h3>

            {ideiaSelecionada.usuario && (
              <div className="autor-info">
                <h4>Autor da ideia</h4>
                <p><strong>Nome:</strong> {ideiaSelecionada.usuario.fullName}</p>
                <p><strong>Email:</strong> {ideiaSelecionada.usuario.email}</p>
                {ideiaSelecionada.usuario.telefone && (
                  <p><strong>Telefone:</strong> {ideiaSelecionada.usuario.telefone}</p>
                )}
              </div>
            )}

            <div className="conteudo-ideia">
              <h4>Descrição</h4>
              <DialogContent>{ideiaSelecionada.descricao_ideia}</DialogContent>
            </div>

            <Button onClick={() => setIdeiaSelecionada(null)}>Ok</Button>
          </DialogBox>
        </DialogOverlay>
      )}
    </IdeiasContainer>
  );
}
