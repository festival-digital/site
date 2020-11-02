import React, { useState } from 'react';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import { useRouter } from 'next/router';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import ModalContact from 'components/modals/modal-contact/modal-contact';
import {
  Title,
  Subtitle,
  Wrapper,
  ContentButton,
  Author,
  Text,
  Space,
  Content,
  ImagemAnimation,
  Strong,
  Footer,
  AuthorParagraph,
  IconQuestionMask,
  customStyleButton,
} from './narrative.style';

const Narrative = () => {
  const router = useRouter();
  const [openModalContact, setOpenModalContact] = useState(false);

  if (openModalContact)
    return (
      <ModalContact
        open={openModalContact}
        setOpenModal={setOpenModalContact}
      />
    );
  return (
    <Wrapper>
      <Content>
        <ContentButton>
          <GoBackButton onClick={() => router.back()} />
          <GradientButton
            customStyle={customStyleButton}
            onClick={() => setOpenModalContact(true)}
          >
            <IconQuestionMask
              src="static/icons/question.svg"
              alt="botão da cor rosa com icone com ponto de interrogação da cor branca, ao clicar será redirecionado para tela formulario de contato do site"
            />
          </GradientButton>
        </ContentButton>
        <Title>Oasi</Title>
        <Subtitle>floresta-oásis</Subtitle>
        <Author>
          <p>Por: Jéferson Assumção e Cecília Sá</p>
          <p> Quadro Amarelo Plataforma de Escrita</p>
          <p> Criativa https://www.quadroamarelo.com.br/</p>
        </Author>
        <Space />
        <Space />
        <Text>
          Perdida no deserto, a Nômade se vê diante da formação de uma intensa
          tempestade de areia. Aos poucos ela vem crescendo num formato
          diferente do que as outras tempestades que ela conhecia. Tem um centro
          que se expande em direção a ela, de forma assustadora. É uma espécie
          de nuvem de silício, base da areia do deserto, consubstanciando-se em
          um corpo digital- analógico, um corpo de um oásis imenso flutuante
          vindo em direção à nômade. Uma onda de areia, um lento tsunami de
          sílica em sua direção. Tenta fugir, mas já é tarde. O jeito é se
          deitar no deserto e se cobrir com sua mochila casulo, até que tudo
          passe. Uma intensa tempestade a sacode, uivando ao seu redor e
          sacodindo seu corpo, a ponto de fazê-la se sentir flutuando. Quando
          finalmente passa o temporal de átomos, areia, vidro e silício, a
          Nômade abre seu casulo-mochila e o que vê? Ela está dentro da nuvem,
          do imenso oásis colorido, cheio de uma vegetação brilhante, terra de
          minerais virtuais. Seu peito arfa, mas ela sabe que finalmente chegou
          onde queria. Abre um imenso sorriso. A Nômade chega em Oasi com sua
          mochila de viajante. A mochila que tem sido sua árvore, sua concha,
          sua casa-caracol. É uma Nômade chegando à floresta-oásis, depois de
          tanto palmilhar a areia quente e seca. Entra agora no rarefeito bosque
          permeável e indefinido, logo transformado na densidade diversa da
          floresta até alcançar o oásis central. Ela é mais uma em busca de
          Oasi. Sabe que chegou para ajudar a povoar aquele lugar de palavras,
          imagens, sons e principalmente dança. Está sozinha, mas logo é
          convidada por uma voz a fruir o que lá existe e a ajudar a fazer o que
          ainda precisa ser feito para ampliar e ampliar Oasi, até que um mundo
          novo se faça, a partir da dança, da sua dança e de quem mais vier. Uma
          dança que celebra e atrai a diversidade, novas espacialidades e tempos
          novos. Dança de eventos modificadores, capazes de construir um outro
          agora, um aqui-ali ubíquo, presente em todos os lugares ao mesmo
          tempo, digital e analógico como a própria Oasi.
        </Text>
      </Content>
      <Space />
      <Space />
      <ImagemAnimation src="static/images/narrativa_animacao1.svg" alt="" />
      <Space />
      <Space />
      <Content>
        <Text>
          A Nômade está fugindo da destruição das florestas, do pantanal, da
          fumaça cinza, do mar destroçado. Também está cansada da mesmice dos
          eventos-planuras, rasos e que acostumaram a todos ao redor dela a uma
          vida sem transformações. Não quer só pagar e consumir, mas também
          semear e fazer crescer sementes e formas, colocar fios e deixar
          rastros. Rastros que funcionam tal qual os do grafite e o pixo, como
          na cidade de onde ela vem. Para que outras e outros possam seguir e
          juntos deixar marcas de seus passos na planura de areias-flores de
          Oasi. Chegou ali porque lhe disseram que havia outras lá, em busca de
          viver e fruir com mais intensidade. Querem mais, não lhes nutre o
          desencantamento racional-instrumental de tudo. Estão ávidas por
          conteúdos novos, por experiências modificadoras, profundamente ligadas
          tanto às diversas ancestralidades quanto às inovações – narrativas,
          tecnológicas e estéticas. Ela também está ali em busca de conteúdos e
          formas hoje com cada vez menos espaço no deserto. Cada vez mais raros,
          quando não extintos. A Nômade gosta de ser nômade, mas também deseja
          encontrar mais nômades iguais- diferentes a ela. Curiosas e abertas,
          engajadas em transformações. Ao mesmo tempo que se divertem, que
          dançam, que vivem, querem agir, querem construir novas possibilidades
          de mundos. Aos poucos a Nômade vai descobrindo a floresta de florestas
          dentro de Oasi. São os oásis-túneis grafitados com suas paredes
          caoticamente belas e coloridas, o oásis-açude agrestino, o oásis- rio,
          um oásis-acampamento, um oásis-pista-de-dança, dispostos em diferentes
          alturas, flutuando nas copas ou semi-enterrados, como plataformas
          contínuas ligadas por pontes, cordas e rampas. Claro, há o oásis
          grande palco central, ao lado da pista de skate, local de encontro e
          reencontros, ali todas chegam e é onde acontecem os grandes shows,
          conferências e festas. Mas há também o oásis-bar, o oásis feira. Mais
          adiante, dá pra escutar o som de um contrabaixo no oásis-jazz, em que
          um quarteto faz seus próprios experimentos. O oásis-galpão de escola
          de samba é só alegria, assim como o das batalhas de hip-hop. Do portal
          para o oásis-ateliê, a Nômade percebe as inúmeras ferramentas,
          instrumentos e materiais, que mais tarde pretende ela mesma utilizar.
          Um pouco cansada, resolve entrar no meio do mato e enxerga o oásis de
          redes e as cápsulas- casulos, locais de descanso e expressão
          individual. Nesse momento, a Nômade começa a entrar em contato com os
          legados e pensamentos das outra nômades. No interior de cada elemento
          pendurado, deixado por cada uma, há textos, imagens, ideias,
          experimentações artísticas e alternativas para a construção de novas
          possibilidades. O oásis-universidade ainda mais entranhado na mata que
          se expande do aparentemente pequeno ponto de floresta no deserto.
          Respira.
        </Text>
      </Content>
      <Space />
      <Space />
      <ImagemAnimation src="static/images/narrativa_animacao2.svg" alt="" />
      <Space />
      <Space />
      <Content>
        <Text>
          De volta, a Nômade senta e um grande gramado à espera do show. A
          mochila, velha conhecida, lhe serve de colchão e de casulo. Até que
          centenas, milhares de outras Nômades e Nômades pontilham e preenchem
          quase totalmente o gramado-oásis, antes do show do dia-noite. Após a
          apresentação, provavelmente a Nômade irá à festa que para a qual outra
          Nômade já a tinha chamado antes mesmo de ela entrar em Oasi. Talvez
          seja por isso mesmo que está ali. Quanto tempo ficará? Não sabe. Um
          dia, uma semana, um ano? Sente sede, bebe um copo dágua gelada. Uma
          cervejinha mais tarde? Claro. Tem um bar ali do lado. Há o que as
          outras nômades trazem para elas e que trocam por moedas com às demais.
          Gostou do show. Se emocionou, dançou, abraçou Nômades que nem
          conhecia. Em seguida, resolve se envolver em uma atividade, assim
          mesmo, aleatoriamente. Avança nas trilhas da floresta, guiada por
          feixes de luz entre as frestas, lhe parecem distintos portais. As
          jornadas são múltiplas. Os portais dão acesso a outros espaços
          distintos dos eventos do oásis-praça. Abre uma cortina, hackers fazem
          uma oficina de reciclagem de computadores. Não, não é o que quer
          agora. Num, indígenas ativistas montam uma mostra de fotos sobre as
          queimadas na Amazônia. Um ritual aymara a surpreende na sala seguinte.
          Em outro, um jardim eletrônico de sons e neon está sendo plantado.
          Fecha a cortina e abre outra: arquitetos desenham uma nova cidade.
          Sim, pode ser esta. Mas antes, quer saber o que acontece no portal ao
          lado. Pergunta, um mundo de alternativas está sendo escrito num
          gigantesco mural. Como faz pra ajudar? Simples: dança, dança e dança.
          Assim coopera na coleta de infinitas soluções para problemas do mundo
          desertificado, para o reboot da ordem mundial. Elas são trazidas pelas
          próprias nômades que entram no oásis? Acertou. Fecha os olhos e começa
          a entrar no ritmo. Tudo é respiração e ritmo, como se ela estivesse no
          coração do próprio dançarino do universo. Sua cabeça brilha cada vez
          mais, como uma estrela radiante. Abre os olhos. A outra Nômade está
          lá, a que a convidou, e dança, dança como ela. Então, a dança das duas
          e dos outros presentes acende os grandes faróis da árvore-mãe. Ela lhe
          sorri e explica que entendeu como Oási se formou. É obra da dança
          criadora das areias movidas pelo movimento dos que dançam. E elas
          estão ali para continuar o rimo dos corpos e seus afetos. Depois, sua
          precursora pede que ela pense em algo pra dar de presente a Oasi,
          antes de irem embora. Um algo, qualquer algo, uma semente, uma ideia,
          um objeto que, por menor que pareça, esteja em potência de transformar
          um quase nada que seja. Ela percebe que deve. Mais uma vez retira a
          mochila dos ombros. Sim, Oasi ganhará muito com este objeto mágico
          disruptivo, com todas as possibilidades da mochila que carrega nas
          costas. E mais ainda, ganhará com ela própria, que decide naquele
          momento que ficará em Oasi, que viverá em Oasi, que ajudará quem chega
          a fazer sua trajetória. Quando todas forem embora, ficará apenas a
          Nômade dançando no vazio, mesmo sem música, mesmo sem luz, mesmo sem
          nada. Estará lá esperando a sua chegada pra começar o jogo.
        </Text>
        <Space />
        <Subtitle>Glossário</Subtitle>
        <Space />
        <Text>
          <Strong>Árvore-mãe: </Strong>enorme árvore atrás do palco, cuja copada
          é formada por farois potentes. Esses, só se acendem com o acúmulo de
          energia dos que dançam. A dança acende a árvore-mãe. Árvore que dança
          e com sua dança move Oasi em direção a um mundo melhor. Sua dança
          desprende energia cósmica que mexe em tudo, combina e recombina tudo,
          desde um grão de sílex aos animais e montanhas.
        </Text>
        <Space />
        <Text>
          <Strong>Casulos: </Strong>objetos que levam a experimentações
          individuais e compartilhamento de alternativas. Podem ser tanto de
          caráter expressivo, artístico ou social, como de entretenimento. São
          elementos em redes pendurados nas árvores da Floresta, onde a jogadora
          pode deixar textos, imagens, músicas, ideias, projetos,
          experimentações artísticas e alternativas – autorais ou não – como
          contribuição à construção de novas possibilidades, do Mundo das
          Alternativas. <br /> Corpo: lugar dos afetos.
        </Text>
        <Space />
        <Space />
        <Text>
          <Strong>Dança: </Strong>libera a energia para o acendimento das
          cabeças dos avatares e no acúmulo dessas luzes dos faróis no alto da
          árvore-mãe, quando se abre um portal para que as Nômades presentes
          levem suas contribuições para a construção de um outro mundo possível.
        </Text>
        <Space />
        <Text>
          <Strong>Deserto:</Strong> Lugar de onde veio a Nômade e onde se formou
          Oasi. Não é um contraponto binário em relação ao oásis, mas uma
          formação natural com menos ou mesmo quase nada de vegetação, embora
          com vidas e culturas próprias.
        </Text>
        <Space />
        <Text>
          <Strong>Evento:</Strong> mudança significativa, transformação. Oasi se
          refere a um lugar-acampamento, em que acontecem transformações nos que
          ali chegam, auxiliados por uma mentora, que está na origem do mito de
          fundação de Oasi, a Nômade, personagem que acompanha o jogador em
          diferentes momentos de sua jornada.
        </Text>
        <Space />
        <Text>
          <Strong>Floresta:</Strong> A floresta é o elemento de transição (uma
          borda) entre o deserto e o Oásis-praça. Formada por um conjunto de
          troncos, às vezes folhosos, outras vezes não (que podem ser pilotis,
          feixes de luz etc), tridimensionalizam esse espaço aberto de convívio
          da praça, ao mesmo tempo que abrigam novos espaços possíveis de
          interação. Os acessos a esses novos espaços ocorrem de três formas:
          ilhas-oásis, portais e casulos.
        </Text>
        <Space />
        <Text>
          <Strong>Ihas-oásis: </Strong> São ilhas flutuantes ao redor do
          Oásis-praça onde acontecem eventos paralelos como palcos alternativos,
          espaços lúdicos e de lazer, como pistas de skate, feiras com estantes
          de vendas ou negócios etc. Pode abrigar o bar, a feira, as lojas, mas
          ao mesmo tempo manter o contato visual com praça, ouvir o show, sentir
          os burbúrios em uma presencialidade simultânea. São ampliações da
          experiência de coletividade e do agir político.
        </Text>
        <Space />
        <Text>
          <Strong>Jogo: </Strong>tudo é jogo. A cultura é jogo, assim como o
          conjunto ser humano e suas escolhas. Somos animais lúdicos que sofrem
          o abandono, mas ao mesmo tempo brincam de entender o mundo.
          Homo-ludens, jogadora na existência sem sentido. No jogo, a Nômade
          auxiliará quem joga em seu caminho, em que vai assistir aos shows,
          oficinas etc, como espécie de preparação para uma grande
          transformação. Essa vem da energia da dança. Na dança individual,
          acende-se sua própria cabeça. Na coletiva, acendem-se as luzes em cima
          da Árvore-mãe. Tudo isso ajuda na grande dança de um novo universo.
          Sua dança desprende energia cósmica que mexe em tudo, combina e
          recombina tudo, desde um grão de sílex aos animais e montanhas.
        </Text>
        <Space />
        <Text>
          <Strong>Jogadora:</Strong> Homo-ludens, aquela que joga, brinca,
          enquanto existe.
        </Text>
        <Space />
        <Text>
          <Strong>Mochila-casulo:</Strong> mochila de origem indefinida, que a
          Nômade trouxe do deserto. Serve como proteção, casulo, árvore, casa,
          acolhida, defesa para a Nômade. Ao final da jornada (de cada evento de
          que joga) sugere-se que a deixe pendurada com uma contribuição,
          deixada ali como presente para futuros visitantes. Mundo das
          alternativas: construção coletiva de soluções, inventos e alternativas
          já conhecidas para a construção de um mundo melhor. Jogadoras serão
          convidadas a ampliar este dicionário com suas ideias e deixá-las em
          seus casulos-mochilas.
        </Text>
        <Space />
        <Text>
          <Strong>Nômade:</Strong> mentora. Vai ajudar quem entra pra jogar em
          sua jornada por Oasi.
        </Text>
        <Space />
        <Text>
          <Strong>Oasi:</Strong> Oásis em Iorubá. Indica um lugar acolhedor,
          onde Nômades chegam para se alimentar, descansar, se modificar e
          fortalecer para continuar a travessia pelo deserto. Oasi se refere a
          um lugar-acampamento, em que acontecem eventos e transformações nos
          que ali chegam, auxiliados por uma mentora, a Nômade, que está na
          origem do mito de fundação. Oásis em Iorubá (ou Yorubá) é “oasi”,
          língua africana da família nigero-congolesa, falada por 28 milhões de
          pessoas na Nigéria, Benim, Togo, Serra Leoa e Cuba. Trazida pelos
          escravos ao Brasil, é parte dos ritos religiosos afro- brasileiros.
          Traz para o projeto Oasi a importante contribuição da população negra
          brasileira, cuja cultura se referencia muito nessa língua
          sub-sahariana e atlântica. Como se trata de uma língua africana que
          utiliza o alfabero latino, a palavra oasi em iorubá é de fácil
          compreensão da metáfora que está sendo criada para o ambiente do jogo.
          A própria palavra “oásis” é praticamente a mesma em inglês (oasis),
          grego (oási), basco (oasia), espanhol (oasis), alemão (oase),
          africaner (oase), albanês (oaz) russo (oazis), holandês (oase) etc. Ou
          seja, trata-se de um nome que pode ser compreendido em boa parte do
          mundo. Aqui é importante não indicar um contraponto binário em relação
          ao deserto, mas a uma formação natural com menos ou mesmo quase nada
          de vegetação, mas com vidas e culturas próprias. Oasi se formaria com
          bordas e adensamento de vegetação, água e sombra no interior desse
          quente ambiente. Trata-se de um lugar neste espaço amplo e desértico,
          formado por grãos de areia (silício) da mesma forma que o próprio
          universo em que estamos imersos, incluindo Oasi.
        </Text>
        <Space />
        <Text>
          <Strong>Oásis-praça:</Strong> O espaço de Oasi é organizado pela
          centralidade de uma grande praça demarcada por bordas permeáveis e de
          limites imprecisos, que se abre para receber a diversidade de povos
          nômades. É um espaço de aglomeração em busca de trocas e da construção
          de novas relações coletivas e alternativas. Ali todos chegam, se
          aproximam e é onde acontecem os grandes shows, conferências e festas.
        </Text>
        <Space />
        <Text>
          <Strong>Portais:</Strong> são acessos para outros espaços distintos
          dos eventos do Oásis-praça. Ao atravessá-los por portas ou túneis,
          quem joga pode se deparar com salas de reuniões, oficinas, aulas, uma
          biblioteca de livros em creative commons e copyleft, até com um jardim
          ao ar livre. Ou, simplesmente, passagens que revelam outros mundos
          possíveis, outros universos futuros de vivências. A porta, nesse caso,
          estabelece uma relação de interioridade, de privacidade, podendo
          conter espaços de acesso restrito.
        </Text>
        <Space />
        <Text>
          <Strong>Respiração:</Strong> tudo em Oasi é respiração e ritmo, como
          se a Nômade e e quem joga estivessem no coração do própria dançarina
          do universo. Tempestade de areia: gênese de Oasi. Reorganiza
          magicamente os elementos do deserto em um mágico lugar de
          possibilidades transformadoras. Ubiquidade: característica cultural de
          nosso tempo digital-analógio, fortemente presente em Oasi. Poder estar
          em todos os lugares, via mundo digital.
        </Text>
      </Content>
      <Footer>
        <AuthorParagraph>
          Jéferson Assumção e Cecília Sá, Quadro Amarelo - Plataforma de Escrita
          Criativa https://www.quadroamarelo.com.br/
        </AuthorParagraph>
      </Footer>
    </Wrapper>
  );
};

export default Narrative;
