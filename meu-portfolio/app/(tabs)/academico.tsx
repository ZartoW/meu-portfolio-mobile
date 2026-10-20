import PortfolioPage from '../../components/PortfolioPage';

export default function AcademicoScreen() {
  return (
    <PortfolioPage
      eyebrow="Minha formação"
      title="Experiência acadêmica"
      description="Minha trajetória de estudos e desenvolvimento."
      items={[
        {
          title: 'Seu curso',
          tag: 'Em andamento ou concluído',
          description: 'Instituição: informe o nome da instituição.\nPeríodo: informe o ano de início e conclusão.',
        },
        {
          title: 'Cursos complementares',
          description: 'Adicione aqui cursos, certificados e conhecimentos relevantes.',
        },
      ]}
    />
  );
}
