import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PortfolioPage from '../../components/PortfolioPage';

const projects = [
  {
    title: 'Voltix',
    description:
      'Projeto de e-commerce full-stack, voltado para uma experiência de compra digital. A plataforma reúne funcionalidades de front-end e back-end.',
    technology: 'Full-stack',
  },
  {
    title: 'BestAttackTeamJD',
    description:
      'Sistema full-stack para uma academia de artes marciais. O aplicativo mobile é voltado para os alunos, enquanto a plataforma web atende às necessidades dos professores.',
    technology: 'Mobile',
  },
];

export default function ProjetosScreen() {
  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  const visibleProjects = projects.filter((project) => {
    const matchesFilter =
      filter === 'Todos' ||
      project.technology === filter ||
      (filter === 'Full-stack' &&
        project.title === 'BestAttackTeamJD');

    const matchesSearch =
      `${project.title} ${project.description} ${project.technology}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <PortfolioPage
      eyebrow="MEU TRABALHO"
      title="Projetos"
      description="Conheça alguns projetos que desenvolvi. Pesquise pelo nome ou filtre por categoria."
    >
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar projeto..."
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

      {visibleProjects.length > 0 ? (
        visibleProjects.map((project) => (
          <View key={project.title} style={styles.project}>
            <Text style={styles.tag}>{project.technology}</Text>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.description}>
              {project.description}
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
});