
import PortfolioPage from '../../components/PortfolioPage';

export default function SobreScreen() {
  return (
    <PortfolioPage
      eyebrow="Conheça minha trajetória"
      title="Sobre mim"
      description="Sou estudante de Sistemas para Internet na UNICAP, no 4º período. Tenho interesse em desenvolvimento back-end, APIs, regras de negócio e bancos de dados, buscando também ampliar meus conhecimentos em desenvolvimento mobile e web."
      items={[
        {
          title: 'Back-end',
          description: 'Java, Spring Boot, Node.js e desenvolvimento de APIs REST.',
        },
        {
          title: 'Banco de dados',
          description: 'SQL e desenvolvimento de soluções orientadas a dados.',
        },
        {
          title: 'Desenvolvimento web',
          description: 'React, HTML, CSS e JavaScript.',
        },
        {
          title: 'Tecnologias deste aplicativo',
          description:
            'React Native, TypeScript, Expo e Expo Router, com integração a uma API para carregar os dados do portfólio.',
        },
        {
          title: 'Funcionalidade extra',
          description:
            'Pesquisa de projetos por nome, descrição ou tecnologia, com filtros por categoria para facilitar a navegação.',
        },
      ]}
    />
  );
}
