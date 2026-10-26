
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PortfolioPage from '../../components/PortfolioPage';
import { buscarCurriculo } from '../../services/api';

type Projeto = {
  nome: string;
  descricao: string;
  categoria: string;
  tecnologias: string[];
};

export default function ProjetosScreen() {
  const [projects, setProjects] = useState<Projeto[]>([]);
  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    buscarCurriculo()
      .then((dados) => {
        setProjects(dados.projetos ?? []);
      })
      .catch(() => {
        setErro('Não foi possível carregar os projetos da API.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const visibleProjects = projects.filter((project) => {
    const matchesFilter =
      filter === 'Todos' || project.categoria === filter;

    const matchesSearch = [
      project.nome,
      project.descricao,
      project.categoria,
      ...project.tecnologias,
    ]
      .join(' ')
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <PortfolioPage
      eyebrow="Meu trabalho"
      title="Projetos"
      description="Conheça alguns projetos que desenvolvi. Pesquise pelo nome, descrição ou tecnologia e filtre por categoria."
    >
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar projeto ou tecnologia..."
        placeholderTextColor="#94A3B8"
        style={styles.search}
      />

      <View style={styles.filters}>
        {['Todos', 'Full-stack', 'Mobile'].map((item) => (
          <Pressable
            key={item}
            onPress={() => setFilter(item)}
            style={[
              styles.filterButton,
              filter === item && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === item && styles.activeFilterText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0D9488" />
      ) : erro ? (
        <Text style={styles.description}>{erro}</Text>
      ) : visibleProjects.length > 0 ? (
        visibleProjects.map((project) => (
          <View key={project.nome} style={styles.project}>
            <Text style={styles.tag}>{project.categoria}</Text>

            <Text style={styles.projectTitle}>{project.nome}</Text>

            <Text style={styles.description}>
              {project.descricao}
            </Text>

            <Text style={styles.technologies}>
              Tecnologias: {project.tecnologias.join(', ')}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.description}>
          Nenhum projeto encontrado.
        </Text>
      )}
    </PortfolioPage>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5EAF1',
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#14213D',
    marginBottom: 14,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    backgroundColor: '#E8EEF5',
    borderRadius: 20,
  },
  activeFilter: {
    backgroundColor: '#0D9488',
  },
  filterText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  project: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5EAF1',
    padding: 18,
    marginBottom: 14,
  },
  tag: {
    color: '#0D9488',
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 8,
  },
  projectTitle: {
    color: '#14213D',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#64748B',
    fontSize: 14,
    lineHeight: 22,
  },
  technologies: {
    color: '#475569',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 12,
  },
});
