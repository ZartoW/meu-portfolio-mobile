
import PortfolioPage from '../../components/PortfolioPage';

export default function AcademicoScreen() {
  return (
    <PortfolioPage
      eyebrow="Minha formação"
      title="Experiência acadêmica"
      description="Minha trajetória de estudos e desenvolvimento na área de tecnologia."
      items={[
        {
          title: 'Sistemas para Internet',
          tag: 'Em andamento',
          description:
            'Instituição: Universidade Católica de Pernambuco (UNICAP).\nPeríodo: 4º período.\nFoco: desenvolvimento de aplicações web e mobile, programação, APIs e bancos de dados.',
        },
        {
          title: 'Embarque Digital',
          description:
            'Participação no programa Embarque Digital, com bolsa vinculada ao Porto Digital, voltado à formação de profissionais na área de tecnologia.',
        },
        {
          title: 'Conhecimentos complementares',
          description:
            'Estudos e práticas com Java, Spring Boot, SQL, JavaScript, React, Node.js, React Native e desenvolvimento de APIs REST.',
        },
      ]}
    />
  );
}
