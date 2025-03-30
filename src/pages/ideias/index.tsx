import { useEffect, useState } from 'react';
import api from '../../services/api';
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
}

export default function Ideias() {
  const [ideias, setIdeias] = useState<Ideia[]>([]);
  const [ideiaSelecionada, setIdeiaSelecionada] = useState<Ideia | null>(null);

  useEffect(() => {
    api.get('/formularios/minhas')
      .then((res) => setIdeias(res.data))
      .catch(() => alert('Erro ao buscar suas ideias.'));
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
            <DialogContent>{ideiaSelecionada.descricao_ideia}</DialogContent>
            <Button onClick={() => setIdeiaSelecionada(null)}>Ok</Button>
          </DialogBox>
        </DialogOverlay>
      )}
    </IdeiasContainer>
  );
}
