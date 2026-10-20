import PortfolioPage from '../../components/PortfolioPage';

export default function ProfissionalScreen() {
  return (
    <PortfolioPage
      eyebrow="Minha trajetória"
      title="Experiência profissional"
      description="Experiências, atividades e competências desenvolvidas."
      items={[
        {
          title: 'Experiência ou estágio',
          tag: 'Personalize esta seção',
          description: 'Informe a empresa, o cargo, o período e as principais atividades realizadas.',
        },
        {
          title: 'Ainda não tenho experiência',
          description: 'Você pode destacar projetos acadêmicos, trabalhos em equipe e conhecimentos adquiridos.',
        },
      ]}
    />
  );
}
