
import PortfolioPage from '../../components/PortfolioPage';

export default function ProfissionalScreen() {
  return (
    <PortfolioPage
      eyebrow="Minha trajetória"
      title="Experiência profissional"
      description="Experiências profissionais e atividades práticas que contribuíram para o desenvolvimento das minhas competências."
      items={[
        {
          title: 'Assistente Administrativo Intermitente',
          tag: 'RPL Engenharia',
          description:
            'Atuação durante 7 meses, prestando suporte administrativo, cobrindo atividades de funcionários fixos, atendendo demandas de secretarias e gabinetes, organizando serviços, realizando atendimento telefônico e entregando documentos.',
        },
        {
          title: 'Residência em Tecnologia',
          tag: 'Porto Digital · Capgemini e Beyond',
          description:
            'Participação em atividades colaborativas de planejamento e elaboração de ideias e propostas relacionadas a benefícios de saúde e melhorias do ambiente, desenvolvendo competências de trabalho em equipe e resolução de problemas.',
        },
        {
          title: 'Desenvolvimento de projetos de tecnologia',
          tag: 'Projetos acadêmicos e em equipe',
          description:
            'Experiência prática na construção de aplicações e APIs, trabalhando com tecnologias como Java, Spring Boot, JavaScript, React, Node.js e bancos de dados. Entre os projetos estão Voltix e BestAttackTeamJD.',
        },
      ]}
    />
  );
}
