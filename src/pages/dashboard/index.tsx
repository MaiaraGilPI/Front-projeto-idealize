import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import {
  DashboardContainer,
  Column,
  SectionTitle,
  Table,
  TableRow,
  TableCell,
  DeleteButton,
  EditForm,
  Input,
  SaveButton,
  DashboardBox,
} from './styles';
import { useNavigate } from 'react-router-dom';

interface Ideia {
  id: number;
  titulo_projeto: string;
  usuario: { email: string };
  data_envio: string;
}

interface Usuario {
  id: number;
  fullName: string;
  email: string;
  role: 'USER' | 'ADMIN';
  password?: string;
}

export default function Dashboard() {
  const [ideias, setIdeias] = useState<Ideia[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<Usuario>>({});
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== 'ADMIN') {
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    api.get('/formularios').then((res) => setIdeias(res.data));
    api.get('/users').then((res) => setUsuarios(res.data));
  }, []);

  const handleDeleteIdeia = async (id: number) => {
    const confirmar = confirm('Deseja remover esta ideia?');
    if (!confirmar) return;
    await api.delete(`/formularios/${id}`);
    setIdeias((prev) => prev.filter((i) => i.id !== id));
  };

  const handleDeleteUsuario = async (id: number) => {
    const confirmar = confirm('Deseja remover este usuário?');
    if (!confirmar) return;
    await api.delete(`/users/${id}`);
    setUsuarios((prev) => prev.filter((u) => u.id !== id));
  };

  const handleEdit = (user: Usuario) => {
    setEditingUserId(user.id);
    setEditedUser({ ...user, password: '' });
  };

  const handleSave = async () => {
    await api.patch(`/users/${editingUserId}`, editedUser);
    setEditingUserId(null);
    const updated = await api.get('/users');
    setUsuarios(updated.data);
  };

  return (
    <DashboardContainer>
      <DashboardBox>
      <Column>
        <SectionTitle>Ideias</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Data</th>
              <th className="actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {ideias.map((ideia) => (
              <TableRow key={ideia.id}>
                <TableCell>{ideia.titulo_projeto}</TableCell>
                <TableCell>{ideia.usuario.email}</TableCell>
                <TableCell>{new Date(ideia.data_envio).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    <DeleteButton onClick={() => handleDeleteIdeia(ideia.id)}>🗑️</DeleteButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Column>

      <Column>
        <SectionTitle>Usuários</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th className="actions">Tipo</th>
              <th className="actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <TableRow key={user.id}>
                {editingUserId === user.id ? (
                  <>
                    <TableCell>
                      <EditForm>
                        <Input
                          value={editedUser.fullName || ''}
                          onChange={(e) =>
                            setEditedUser((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                        />
                      </EditForm>
                    </TableCell>
                    <TableCell>
                      <EditForm>
                        <Input
                          value={editedUser.email || ''}
                          onChange={(e) =>
                            setEditedUser((prev) => ({ ...prev, email: e.target.value }))
                          }
                        />
                        <Input
                          type="password"
                          placeholder="Nova senha"
                          value={editedUser.password || ''}
                          onChange={(e) =>
                            setEditedUser((prev) => ({ ...prev, password: e.target.value }))
                          }
                        />
                        <select
                          value={editedUser.role || 'USER'}
                          onChange={(e) =>
                            setEditedUser((prev) => ({
                              ...prev,
                              role: e.target.value as 'USER' | 'ADMIN',
                            }))
                          }
                        >
                          <option value="USER">Usuário</option>
                          <option value="ADMIN">Administrador</option>
                        </select>
                      </EditForm>
                    </TableCell>
                  
                    {/* 👇 ESSA LINHA FALTAVA - garante o alinhamento com a coluna "Tipo" */}
                    <TableCell style={{ textAlign: 'center' }}>
                      {editedUser.role === 'ADMIN' ? '👑' : '👤'}
                    </TableCell>
                  
                    <TableCell>
                      <SaveButton onClick={handleSave}>Salvar</SaveButton>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                      {user.role === 'ADMIN' ? '👑' : '👤'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <button onClick={() => handleEdit(user)}>✏️</button>
                        <DeleteButton onClick={() => handleDeleteUsuario(user.id)}>🗑️</DeleteButton>
                      </div>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Column>
      </DashboardBox>
    </DashboardContainer>
  );
}
