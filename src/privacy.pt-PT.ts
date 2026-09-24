/**
 * Política de Privacidade, versão portuguesa (autoritativa).
 *
 * ── Onde cada facto foi verificado ─────────────────────────────────────────
 *
 * Nada aqui é escrito de memória. Cada afirmação técnica corresponde a código
 * em produção, e o sítio onde foi confirmada está anotado ao lado da secção
 * respetiva. Se uma destas afirmações deixar de ser verdade, a política passa
 * a ser falsa e não apenas desatualizada.
 *
 *   sessão de 11h .................. irt-app/lib/session.ts (cookie maxAge)
 *   token de 12h ................... irt-backend/lib/auth/token.ts
 *   email apagado aos 90 dias ...... irt-backend/lib/member/store.ts
 *   anexos apagados aos 30 dias .... irt-backend/lib/toolkit/attachments.ts
 *   varrimento diário .............. irt-backend/vercel.json (crons)
 *   mínimo de 5 participantes ...... irt-backend/lib/access.ts
 *   o que a MIA vê ................. irt-backend/lib/toolkit/context.ts
 *   texto livre nunca exportado .... irt-backend/app/api/admin/export/route.ts
 *   agregado sem indivíduos ........ irt-backend/lib/company/aggregate.ts
 *   dígito opaco de utilização ..... schema.prisma, model ToolkitUsage
 *
 * A versão inglesa é uma tradução desta. Em caso de divergência, esta prevalece,
 * e a secção final diz isso ao leitor.
 */

import type { LegalDoc } from "./types";
import { ENTITY, AUTHORITY, PLATFORM, LAST_UPDATED } from "./entity";

export const privacyPtPT: LegalDoc = {
  title: "Política de Privacidade",
  summary:
    "Que dados o IRT® trata, porquê, durante quanto tempo e com quem, incluindo o que a sua organização nunca vê.",
  updated: LAST_UPDATED,
  sections: [
    {
      id: "responsavel",
      title: "Quem é responsável pelos seus dados",
      blocks: [
        {
          kind: "p",
          text: `A ${ENTITY.legalName} (NIPC ${ENTITY.nif}), com sede na ${ENTITY.address}, é a entidade responsável pelo tratamento dos dados pessoais descritos nesta política. Opera a ${ENTITY.product}, que inclui o sítio público do IRT® e a aplicação onde faz o Leadership Snapshot®, as Missões, o Toolkit e a Biblioteca.`,
        },
        {
          kind: "p",
          text: `Para qualquer questão sobre esta política, ou para exercer os direitos descritos na secção "Os seus direitos", escreva para ${ENTITY.email}. Respondemos no prazo máximo de 30 dias.`,
        },
        {
          kind: "p",
          text: "Não temos Encarregado de Proteção de Dados designado, porque não reunimos os critérios que o tornam obrigatório: não fazemos controlo sistemático em larga escala nem tratamos categorias especiais de dados a título principal. O contacto acima é lido pela responsável da empresa.",
        },
      ],
    },

    {
      id: "ambito",
      title: "A que se aplica, e a que não se aplica",
      blocks: [
        {
          kind: "p",
          text: "Aplica-se ao sítio público do IRT® e à aplicação IRT®, a que acede a partir da comunidade.",
        },
        {
          kind: "p",
          text: `Não se aplica à plataforma ${PLATFORM.name}, onde vive a sua conta. Esta é uma distinção com consequências práticas e não uma formalidade: a ${PLATFORM.name} é responsável, de forma autónoma, pela sua conta, palavra-passe, adesão à comunidade e eventuais pagamentos, e tem a sua própria política. O IRT® é responsável pelo que descrevemos aqui, que é o resultado do seu trabalho no método.`,
        },
        {
          kind: "p",
          text: `A política da ${PLATFORM.name} está em ${PLATFORM.privacy}. Para ter o quadro completo, precisa das duas.`,
        },
      ],
    },

    {
      id: "conta",
      title: "A sua conta não é nossa",
      blocks: [
        {
          kind: "p",
          text: "O IRT® não tem registo, não tem palavra-passe e não tem tabela de utilizadores. Não guardamos credenciais porque nunca as recebemos.",
        },
        {
          kind: "p",
          text: `Quando abre o IRT® a partir da comunidade, a ${PLATFORM.name} emite um código de utilização única e de vida curta, que os nossos servidores trocam por uma sessão. Dessa troca recebemos um identificador de utilizador, e apenas isso, salvo se a comunidade tiver autorizado a partilha de mais:`,
        },
        {
          kind: "ul",
          items: [
            "o seu endereço de email, para lhe enviarmos os pontos de situação do ciclo;",
            "o seu nome e fotografia de perfil, para a aplicação o tratar por si em vez de por um código;",
            "o idioma que escolheu na plataforma, para o IRT® falar a mesma língua.",
          ],
        },
        {
          kind: "p",
          text: "Se a comunidade não tiver autorizado alguma destas partilhas, a aplicação funciona à mesma, apenas com menos. Não pedimos estes dados diretamente a si, nem os obtemos por outra via.",
        },
        {
          kind: "p",
          text: "Internamente, tudo o que guardamos está associado a esse identificador. Não há nome nem email colados às suas respostas: quem abrisse a nossa base de dados veria resultados ligados a um código, não a uma pessoa.",
        },
      ],
    },

    {
      id: "dados",
      title: "Que dados tratamos, e com que fundamento",
      blocks: [
        {
          kind: "p",
          text: "A tabela seguinte é exaustiva quanto a dados pessoais. Tudo o que o IRT® guarda sobre si cabe numa destas linhas.",
        },
        {
          kind: "table",
          head: ["Dados", "Para quê", "Fundamento", "Durante quanto tempo"],
          rows: [
            [
              "Identificador de utilizador e da comunidade",
              "Ligar o seu percurso a si, e a mais ninguém",
              "Execução do contrato",
              "Enquanto tiver acesso ao IRT®",
            ],
            [
              "Respostas ao Leadership Snapshot® (51 afirmações) e o resultado calculado: Estado, Prontidão, pontuações por dimensão e por competência",
              "Produzir o seu relatório, escolher as suas Missões e permitir comparar ciclos",
              "Execução do contrato",
              "Enquanto tiver acesso ao IRT®. A comparabilidade entre ciclos é o produto: um resultado apagado torna o seguinte ilegível",
            ],
            [
              "Ciclo, Missões atribuídas, estado de cada uma e datas",
              "Conduzir o programa de seis meses",
              "Execução do contrato",
              "Enquanto tiver acesso ao IRT®",
            ],
            [
              "As suas reflexões escritas: texto das Missões, evidências, consolidação de alavancas e reflexões de ciclo",
              "São suas. Servem para as reler",
              "Execução do contrato",
              "Enquanto tiver acesso ao IRT®. Ver a secção seguinte",
            ],
            [
              "Conversas com a MIA, incluindo o que escrever nelas",
              "Manter a conversa aberta entre sessões",
              "Execução do contrato",
              "Até as apagar. Não há varrimento automático",
            ],
            [
              "Ficheiros que anexar a uma conversa",
              "Explicar uma situação à MIA",
              "Execução do contrato",
              "30 dias, e depois apagados automaticamente",
            ],
            [
              "Email, nome, fotografia e idioma vindos da plataforma",
              "Enviar-lhe os pontos de situação e apresentar a aplicação na sua língua",
              "Execução do contrato",
              "O email é apagado 90 dias após a última utilização, se não tiver ciclo ativo",
            ],
            [
              "Registo de que alguém abriu um Plano de Ação, sob a forma de um código irreversível",
              "Contar quantos líderes distintos procuraram um tema, sem saber quais",
              "Interesse legítimo em perceber que temas são procurados",
              "Enquanto o Plano de Ação existir",
            ],
            [
              "Registos técnicos do servidor (endereço IP, data e hora, erros)",
              "Segurança e diagnóstico de avarias",
              "Interesse legítimo em manter o serviço a funcionar e seguro",
              "Conservados pelos nossos fornecedores de alojamento por períodos curtos, em regra até 30 dias",
            ],
          ],
        },
        {
          kind: "p",
          text: "Não tratamos categorias especiais de dados. O Leadership Snapshot® avalia comportamentos de liderança declarados por si, não saúde, convicções, origem ou orientação, e não é um instrumento clínico nem psicométrico. Não fazemos definição de perfis com efeitos jurídicos nem decisões automatizadas que o afetem significativamente: o algoritmo calcula um resultado e sugere Missões, e nada nele decide sobre o seu emprego.",
        },
      ],
    },

    {
      id: "texto-livre",
      title: "O que escreve é seu",
      blocks: [
        {
          kind: "p",
          text: "As reflexões que escreve nas Missões, as evidências, a consolidação das alavancas e as reflexões de ciclo têm um tratamento diferente de tudo o resto, e é deliberado.",
        },
        { kind: "h3", text: "Este texto nunca é" },
        {
          kind: "ul",
          items: [
            "analisado, pontuado ou usado para alterar o seu resultado;",
            "enviado para a MIA nem para qualquer modelo de inteligência artificial;",
            "incluído em exportações, mesmo as feitas pela administradora da plataforma;",
            "visível para a sua organização, em qualquer forma.",
          ],
        },
        {
          kind: "p",
          text: "Está guardado para que o possa reler, e por nenhuma outra razão. Esta separação está escrita no próprio código, e não apenas nesta política: a função que reúne o que a MIA pode saber sobre si não seleciona sequer estas colunas, e a exportação para administração omite-as.",
        },
      ],
    },

    {
      id: "mia",
      title: "O assistente MIA",
      blocks: [
        {
          kind: "p",
          text: "A MIA é um assistente conversacional que liga a situação que lhe descreve a um dos Planos de Ação do método. Funciona sobre um modelo de linguagem da Anthropic (Claude), que atua como subcontratante.",
        },
        { kind: "h3", text: "O que a MIA sabe sobre si" },
        {
          kind: "p",
          text: "O seu Estado, as suas Alavancas, os títulos e o estado das suas Missões, e em que dia do ciclo está. Nada mais. Esse contexto serve para escolher melhor, não para o avaliar.",
        },
        { kind: "h3", text: "O que a MIA nunca recebe" },
        {
          kind: "p",
          text: "As suas reflexões escritas, conforme a secção anterior, e as suas respostas ao Snapshot. Recebe o resultado calculado, não as 51 respostas que lhe deram origem.",
        },
        { kind: "h3", text: "As conversas ficam guardadas" },
        {
          kind: "p",
          text: "Uma conversa fica disponível até a apagar. Quando a apaga, é apagada de facto: as mensagens são removidas da base de dados, não marcadas como ocultas. Não guardamos uma cópia.",
        },
        {
          kind: "p",
          text: "A Anthropic trata as mensagens para gerar a resposta e não as utiliza para treinar modelos. Há um limite de 40 mensagens por período de 24 horas, por pessoa, que existe para proteger o saldo partilhado e não para o vigiar.",
        },
        {
          kind: "p",
          text: "A sua organização não vê estas conversas. Não existe caminho nenhum, no produto, entre o que escreve à MIA e o que uma empresa consegue consultar. Ver a secção sobre organizações.",
        },
      ],
    },

    {
      id: "anexos",
      title: "Ficheiros que anexa, e as pessoas neles",
      blocks: [
        {
          kind: "p",
          text: "Pode anexar imagens, PDF, Word e Excel a uma mensagem para a MIA. Estes ficheiros são frequentemente relatórios de avaliação 360º, mensagens de colegas ou documentos internos, ou seja, dados sobre outras pessoas que não estão aqui e que nada autorizaram.",
        },
        {
          kind: "p",
          text: "Por isso tratámos esta parte com regras próprias:",
        },
        {
          kind: "ul",
          items: [
            "os ficheiros são guardados num repositório privado, na União Europeia (região de Frankfurt), e não são acessíveis por URL: cada leitura passa por uma verificação de que é você o dono;",
            "são apagados automaticamente 30 dias após o envio, por um processo diário, quer a conversa continue quer não;",
            "imagens e PDF são enviados ao modelo para responder à mensagem em que os anexou, e não voltam a ser enviados nas mensagens seguintes;",
            "ficheiros Word e Excel nunca são enviados ao modelo. Extraímos o texto no nosso servidor e é esse texto que segue, ficando guardado dentro da mensagem;",
            "ao reabrir uma conversa antiga verá uma marca de ficheiro expirado onde estava a imagem. É o comportamento correto, não uma avaria.",
          ],
        },
        {
          kind: "p",
          text: "Pedimos-lhe que não anexe nada que não mostraria à pessoa em causa, e que remova nomes quando não forem necessários para a pergunta. Ao anexar um documento sobre terceiros, é você quem decide partilhá-lo connosco, e essa responsabilidade é sua. Nós limitamos o que fazemos com ele e durante quanto tempo.",
        },
      ],
    },

    {
      id: "organizacao",
      title: "Se foi a sua empresa que o inscreveu",
      blocks: [
        {
          kind: "p",
          text: "Quando uma organização inscreve um grupo de líderes, contrata um programa e recebe uma leitura coletiva. O que ela consegue ver é estritamente isto:",
        },
        {
          kind: "ul",
          items: [
            "quantas pessoas estão inscritas e quantas já fizeram o Snapshot;",
            "a distribuição de Estados e as médias por dimensão e por competência, do grupo;",
            "que temas foram mais procurados no Toolkit, em contagem de líderes distintos.",
          ],
        },
        { kind: "h3", text: "O que a organização nunca vê" },
        {
          kind: "ul",
          items: [
            "o resultado de nenhuma pessoa em concreto, nem o seu Estado, nem as suas pontuações;",
            "que Missões lhe foram atribuídas ou o que escreveu nelas;",
            "as suas conversas com a MIA, o que perguntou ou que Planos de Ação abriu;",
            "uma lista de participantes com resultados ao lado.",
          ],
        },
        {
          kind: "p",
          text: "Isto não é uma filtragem à saída: o cálculo do agregado nunca chega a montar uma linha por pessoa. Além disso, as estatísticas só são apresentadas a partir de 5 participantes avaliados. Abaixo desse número, a organização vê que o grupo é pequeno demais e não vê valores, porque num grupo de três qualquer média identifica quem está nela.",
        },
        {
          kind: "p",
          text: "As contagens de temas procurados no Toolkit são feitas sobre um código irreversível, derivado do seu identificador com uma chave secreta. Permite dizer que dez líderes distintos procuraram o mesmo tema; não permite dizer quem, nem sequer a quem tenha acesso à base de dados sem essa chave.",
        },
      ],
    },

    {
      id: "emails",
      title: "Emails que lhe enviamos",
      blocks: [
        {
          kind: "p",
          text: "Se tivermos o seu endereço, enviamos-lhe os pontos de situação do ciclo: os marcos aos 30 e aos 90 dias, o aviso de reavaliação aos 180, um lembrete quando uma Missão está parada há três semanas, e um sinal se estiver inativo há duas. São parte do programa, não marketing, e não lhe enviamos promoções nem newsletters a partir do IRT®.",
        },
        {
          kind: "p",
          text: "O envio é feito através da Resend, o nosso fornecedor de email transacional.",
        },
        {
          kind: "p",
          text: "O endereço é apagado da nossa base de dados 90 dias depois da última vez que entrou, se nessa altura não tiver um ciclo ativo. Guardamos uma cópia do seu email apenas enquanto ela serve para alguma coisa. O restante registo, que é anónimo, permanece.",
        },
      ],
    },

    {
      id: "cookies",
      title: "Cookies",
      blocks: [
        {
          kind: "p",
          text: "O IRT® não usa cookies de análise, de publicidade nem de terceiros. Não há Google Analytics, não há píxeis de redes sociais e não há nada que o siga entre sítios. Usamos dois cookies, ambos estritamente necessários, e por isso não lhe pedimos consentimento para eles:",
        },
        {
          kind: "table",
          head: ["Cookie", "Onde", "Para quê", "Duração"],
          rows: [
            [
              "irt_session",
              "Aplicação",
              "Manter a sessão iniciada. Não é legível por JavaScript e não contém dados seus além do identificador",
              "11 horas",
            ],
            [
              "NEXT_LOCALE",
              "Sítio público",
              "Lembrar o idioma que escolheu, para não voltar ao português a cada visita",
              "1 ano",
            ],
          ],
        },
        {
          kind: "p",
          text: `A comunidade ${PLATFORM.name}, sendo outro serviço, tem os seus próprios cookies e o seu próprio controlo de preferências, descritos na política dela.`,
        },
      ],
    },

    {
      id: "subcontratantes",
      title: "Com quem partilhamos",
      blocks: [
        {
          kind: "p",
          text: "Não vendemos dados pessoais, não os cedemos a intermediários de publicidade e não os partilhamos com quem não conste desta lista. Os fornecedores abaixo tratam dados por nossa conta, ao abrigo de contratos de subcontratação:",
        },
        {
          kind: "table",
          head: ["Fornecedor", "Para quê", "Onde"],
          rows: [
            [
              "Vercel",
              "Alojamento das aplicações e do repositório privado de anexos",
              "União Europeia (Frankfurt) para os anexos; Estados Unidos para a operação da plataforma",
            ],
            [
              "Fornecedor de base de dados PostgreSQL",
              "Guardar tudo o que consta da tabela acima",
              "União Europeia",
            ],
            [
              "Anthropic",
              "Gerar as respostas da MIA",
              "Estados Unidos",
            ],
            [
              "Resend",
              "Enviar os emails do ciclo",
              "Estados Unidos",
            ],
            [
              `${PLATFORM.name}`,
              "Identidade e adesão à comunidade, na qualidade de responsável autónomo e não de nosso subcontratante",
              "União Europeia",
            ],
          ],
        },
        {
          kind: "p",
          text: "Podemos ainda divulgar dados quando a lei o exigir, mediante pedido fundamentado de autoridade competente.",
        },
        { kind: "h3", text: "Transferências fora da União Europeia" },
        {
          kind: "p",
          text: "A Anthropic, a Resend e parte da operação da Vercel estão nos Estados Unidos. Estas transferências assentam nas Cláusulas Contratuais Tipo aprovadas pela Comissão Europeia, complementadas pelas medidas técnicas que estes fornecedores documentam. Os anexos, que são a categoria mais sensível, foram deliberadamente colocados numa região europeia.",
        },
      ],
    },

    {
      id: "conservacao",
      title: "Durante quanto tempo guardamos",
      blocks: [
        {
          kind: "p",
          text: "Os prazos constam da tabela da secção sobre dados. Em resumo, e por ordem do que expira mais depressa:",
        },
        {
          kind: "table",
          head: ["O quê", "Prazo", "Como"],
          rows: [
            ["Sessão iniciada", "11 horas", "O cookie expira"],
            ["Ficheiros anexados à MIA", "30 dias", "Apagados por um processo diário automático"],
            ["Cópia do seu email", "90 dias sem entrar, sem ciclo ativo", "Apagada pelo varrimento diário"],
            ["Conversas com a MIA", "Até as apagar", "Decide você. Não há prazo"],
            [
              "Resultados, ciclos, Missões e as suas reflexões",
              "Enquanto tiver acesso ao IRT®",
              "Apagados a seu pedido, ou quando deixar de ter acesso e o pedir",
            ],
          ],
        },
        {
          kind: "p",
          text: "Sair da comunidade não apaga por si só o seu histórico no IRT®, porque alguém que regressa espera encontrar o percurso onde o deixou. Se quiser que seja apagado, basta pedir, e não temos de perguntar porquê.",
        },
      ],
    },

    {
      id: "direitos",
      title: "Os seus direitos",
      blocks: [
        {
          kind: "p",
          text: "Ao abrigo do Regulamento Geral sobre a Proteção de Dados, tem direito a:",
        },
        {
          kind: "ul",
          items: [
            "saber que dados temos sobre si e obter uma cópia;",
            "corrigir o que estiver errado;",
            "pedir o apagamento;",
            "receber os seus dados num formato legível por máquina, ou pedir que os enviemos a outra entidade;",
            "limitar o tratamento enquanto uma contestação sua estiver a ser apreciada;",
            "opor-se aos tratamentos que assentam no nosso interesse legítimo, que nesta política são apenas a contagem de temas procurados e os registos técnicos.",
          ],
        },
        {
          kind: "p",
          text: `Escreva para ${ENTITY.email}. Respondemos em 30 dias e não cobramos, salvo em caso de pedidos manifestamente repetitivos. Podemos pedir-lhe que confirme a identidade antes de entregar dados, o que serve para o proteger e não para atrasar o pedido.`,
        },
        {
          kind: "p",
          text: "Algumas coisas não precisam de pedido: apagar uma conversa com a MIA faz-se na própria aplicação, e tem efeito imediato.",
        },
        {
          kind: "p",
          text: `Se entender que não tratámos o assunto como devíamos, pode reclamar junto da ${AUTHORITY.name}, em ${AUTHORITY.url}. Se residir noutro país da União Europeia, pode dirigir-se à autoridade de controlo do seu país.`,
        },
        {
          kind: "p",
          text: `Os dados da sua conta, palavra-passe e adesão são da ${PLATFORM.name}, e os direitos sobre esses exercem-se junto dela, em ${PLATFORM.privacy}.`,
        },
      ],
    },

    {
      id: "seguranca",
      title: "Segurança",
      blocks: [
        {
          kind: "p",
          text: "As medidas relevantes, em concreto:",
        },
        {
          kind: "ul",
          items: [
            "todo o tráfego é cifrado em trânsito, e a base de dados e o repositório de ficheiros são cifrados em repouso pelos fornecedores;",
            "o cookie de sessão não é legível por JavaScript, o que impede que um script injetado o leve;",
            "a sua permanência na comunidade é verificada a cada pedido e não guardada na sessão, para que uma saída tenha efeito no carregamento seguinte e não daqui a horas;",
            "os anexos estão num repositório privado e cada leitura verifica a titularidade, em vez de assentar num endereço difícil de adivinhar;",
            "a chave de acesso à plataforma existe num único serviço, e as aplicações que usa não a detêm.",
          ],
        },
        {
          kind: "p",
          text: "Nenhum sistema é inviolável. Se ocorrer uma violação de dados que provavelmente implique risco elevado para si, informamo-lo a si e à autoridade nos prazos legais.",
        },
      ],
    },

    {
      id: "menores",
      title: "Menores",
      blocks: [
        {
          kind: "p",
          text: "O IRT® destina-se a profissionais em funções de liderança e não se dirige a menores de 18 anos. Não recolhemos conscientemente dados de menores. Se tomarmos conhecimento de que o fizemos, apagamo-los.",
        },
      ],
    },

    {
      id: "alteracoes",
      title: "Alterações a esta política",
      blocks: [
        {
          kind: "p",
          text: "Quando esta política mudar, a data no topo muda com ela. Se a alteração for substancial, por exemplo um novo subcontratante ou uma nova finalidade, avisamos na aplicação ou por email antes de produzir efeitos.",
        },
        {
          kind: "p",
          text: "Esta é a versão portuguesa e é a que prevalece. A versão inglesa é uma tradução de cortesia e, se as duas divergirem, vale esta.",
        },
      ],
    },
  ],
};
