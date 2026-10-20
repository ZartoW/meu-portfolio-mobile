import PortfolioPage from '../../components/PortfolioPage';

export default function SobreScreen() {
  return (
    <PortfolioPage
      eyebrow="Conheça minha trajetória"
      title="Sobre mim"
      description="Sou estudante de Sistemas para Internet na UNICAP, no 4º período. Gosto de entender como os sistemas funcionam por trás das interfaces, especialmente APIs, regras de negócio e bancos de dados."
      items={[
        {
          title: '💻 Back-end',
          description:
            'Java, Spring Boot e Node.js.',
        },
        {
          title: '🗄️ Banco de dados',
          description:
            'SQL e desenvolvimento de soluções orientadas a dados.',
        },
        {
          title: '🎨 Desenvolvimento web',
          description:
            'React, HTML e JavaScript.',
        },
        {
          title: '🛠️ Tecnologias deste aplicativo',
          description:
            'React Native, TypeScript, Expo e Expo Router. O app também terá integração com back-end para carregar os dados do portfólio.',
        },
        {
          title: '✨ Funcionalidade extra',
          description:
            'Busca e filtros de projetos por tecnologia, facilitando a navegação pelo portfólio.',
        },
      ]}
    />
  );
}