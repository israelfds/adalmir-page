  import React from 'react';
  import './Home.css';
  import ImageSlider from './ImageSlider';
  import Header from '../components/Header';

  const Home = () => {
    return (
      <div className="home">
        <Header />

        <section className="minha-historia">
          <div className="story-container">
            <img src="/images/home.jpg" alt="Imagem de Capa" className="home-image" />
            <div className="story-text">
              <h2>Minha Trajetória</h2>
              <p>
                Sou Adalmir D’aguila de Souza, 42 anos, casado, pai de 3 filhos, professor da Rede Estadual de Ensino, nascido e criado no Parque Anchieta - Zona Norte do RJ. Estou em meu primeiro mandato e sigo buscando uma qualidade de vida melhor para a população e a valorização do subúrbio carioca.
              </p>
              <p>
                Com muito trabalho e dedicação, trouxe a revitalização de espaços relevantes para a região. No decorrer da revista vocês terão a oportunidade de ver as ações realizadas pela Prefeitura do Rio de Janeiro, por intermédio dos expedientes do nosso mandato.
              </p>
              <p>
                Sou muito grato a Deus por representar cada um de vocês e trabalhar em prol do próximo, já que o meu foco é sempre servir o coletivo. Gostaria que soubessem que tenho legislado e me esforçado ao máximo para fazer o melhor para o nosso município. Estou à disposição para ouvir sugestões, críticas e partilhar ideias, a fim de solidificar o mandato e promover a aproximação entre cidadão e o Poder Legislativo.
              </p>
            </div>
          </div>
        </section>

        <section className="realizacoes">
          <h2>Minhas Realizações</h2>

          <h3>Clínica da Família Sanitarista Paulo D’aguila</h3>
          <p>
            A Clínica da Família Sanitarista Paulo D’aguila, em Marechal Hermes, tem como objetivo focar nas ações de prevenção, promoção da saúde e diagnóstico precoce de doenças. A unidade de atendimento básico à população está situada no prédio anexo à Maternidade Alexander Fleming. A concretização desta iniciativa se deu pela Emenda de Transposição 5018/2018, que direcionou recursos para viabilizar a execução das obras do projeto. E por meio da indicação legislativa 11602/2019, expedida pelo nosso mandato, o pleito pôde ser concretizado pela Prefeitura do Rio de Janeiro. Toda luta valeu a pena! A inauguração da unidade aconteceu no dia 29 de junho de 2020 e foi um sucesso. Felizmente, a clínica foi entregue à população e, atualmente, está em atividade prestando o devido atendimento. O bairro de Anchieta foi incluído na Emenda de Transposição 5019/2018, porém não houve a viabilização do projeto. A luta pela implementação da demanda continua sendo uma prioridade.
          </p>

          <ImageSlider imagePath="clinica-da-familia" imageCount={5} />

          <h3>Grupamento de Ronda Escolar (GRE)</h3>
          <p>
            O Grupamento de Ronda Escolar (GRE) foi criado, no dia 11 de novembro de 1998, com 34 guardas e seis veículos para dar proteção às escolas da Rede Municipal de Ensino. Na ocasião, o GRE começou a atuar em 125 unidades escolares, com a missão socioeducativa de realizar palestras preventivas sobre sexualidade, drogas e importância da família. Em março de 2019, foi inaugurada a primeira base do grupamento no município do Rio de Janeiro. A sede está situada, no bairro de Anchieta, atrás da Escola Municipal Abraão Lincoln, na praça João Moreira (Zona Norte do RJ). O grupo passou a contar com espaço exclusivo para as atividades administrativas, que dão suporte ao trabalho operacional desenvolvido diariamente pelas equipes de patrulheiros e de ações socioeducativas. A demanda foi solicitada por meio da indicação legislativa 1344/2017, encaminhada ao Executivo. Além de realizarem o patrulhamento na área das unidades educacionais, o projeto também conta com uma equipe de apoio que está sempre em reuniões com as Coordenadorias Regionais de Educação (CREs), fazendo levantamentos e relatórios sobre o atendimento prestado às escolas. Dispõe também de grupos que realizam palestras educacionais e atividades na comunidade, com o intuito de integrar o grupamento ao dia a dia da população.
          </p>

          <ImageSlider imagePath="guarda-municipal" imageCount={7} />

          <h3>Parque Radical de Deodoro</h3>
          <p>
            O Parque Radical de Deodoro é uma instalação esportiva com a capacidade para receber até quatro mil pessoas por dia. O Lago, que foi cenário das competições de Canoagem Slalom, é um dos atrativos da região, pois fica aberto ao público para o banho. Além disso, possui uma excelente área arborizada para realizar atividades ao ar livre. Buscando uma qualidade de vida melhor para a população carioca, o nosso gabinete expediu ofícios e indicações legislativas, pleiteando por atividades gratuitas no local. Além disso, solicitamos também a implantação de uma quadra poliesportiva, através do ofício 1959/2020, a fim de estimular a prática de esportes no local. No dia 29 de junho de 2020, foram inauguradas três salas no Parque: sala de pilates solo; sala de fisioterapia e sala de musculação. No evento, contamos com a presença do prefeito Marcelo Crivella. As atividades oferecidas no local são totalmente gratuitas e abertas ao público do município, dentre elas: natação, hidroginástica e aulas de mergulho. Mais uma demanda do nosso mandato atendida pela Prefeitura do Rio de Janeiro!
          </p>

          <ImageSlider imagePath="parque-radical-deodoro" imageCount={8} />

          <h3>Vila Olímpica Dr. Ivanir de Mello</h3>
          <p>
            A Vila Olímpica Dr. Ivanir de Mello, localizada na Rua Aripua, em Ricardo de Albuquerque, foi totalmente revitalizada. E hoje é palco de inúmeras práticas esportivas, como: treinamento funcional, capoeira, handball, futsal, kickboxing, entre outras. A revitalização do espaço foi solicitada, mediante a indicação legislativa 249/2017, expedida pelo nosso gabinete ao Executivo. A materialização desse pleito se deu pela Emenda de Transposição 5100/2017, que destinou os recursos necessários à execução da obra. Foi pensando em resguardar a paz social no local que pleiteamos a presença da Guarda Municipal, com a finalidade de garantir a segurança dos moradores e frequentadores do espaço. A única área de lazer do bairro, que foi revitalizada para a utilização da população, é resultado da atenção da Prefeitura à reivindicação do nosso mandato.
          </p>

          <ImageSlider imagePath="vila-olimpica" imageCount={11}/>
        </section>
      </div>
    );
  };

  export default Home;
