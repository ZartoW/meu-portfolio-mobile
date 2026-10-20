import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, StyleSheet, View } from 'react-native';
import PortfolioPage from '../../components/PortfolioPage';
import { buscarCurriculo } from '../../services/api';

type Curriculo = {
  perfil: {
    nome: string;
    titulo: string;
    instituicao: string;
    periodo: string;
    sobre: string;
    tecnologias: string[];
  };
  formacao: {
    curso: string;
    instituicao: string;
    periodo: string;
    status: string;
  }[];
  experiencias: {
    titulo: string;
    descricao: string;
    tipo: string;
  }[];
  projetos: {
    nome: string;
    descricao: string;
    categoria: string;
    tecnologias: string[];
  }[];
};

export default function HomeScreen() {
  const [curriculo, setCurriculo] = useState<Curriculo | null>(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    buscarCurriculo()
      .then((dados: Curriculo) => setCurriculo(dados))
      .catch(() => setErro('Não foi possível carregar os dados da API.'));
  }, []);

  if (!curriculo && !erro) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0D9488" />
        <Text style={styles.message}>Carregando meu portfólio...</Text>
      </View>
    );
  }

  if (erro || !curriculo) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{erro}</Text>
        <Text style={styles.message}>
          Confira a URL da API e se o servidor está ligado.
        </Text>
      </View>
    );
  }

  const perfil = curriculo.perfil;

  return (
    <PortfolioPage
      eyebrow="CURRÍCULO ZARTO"
      title={`Olá, eu sou ${perfil.nome} 👋`}
      description={perfil.sobre}
      items={[
        {
          title: '🎓 Minha formação',
          description: `${perfil.titulo}\n${perfil.instituicao} • ${perfil.periodo}`,
        },
        {
          title: '⚙️ Minhas tecnologias',
          description: perfil.tecnologias.join(' • '),
        },
        {
          title: '🚀 Meus projetos',
          description: `${curriculo.projetos.length} projetos cadastrados no meu portfólio.`,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  message: {
    color: '#64748B',
    marginTop: 12,
    textAlign: 'center',
  },
  error: {
    color: '#DC2626',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});