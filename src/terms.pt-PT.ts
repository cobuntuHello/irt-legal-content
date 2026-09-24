/**
 * Termos de Utilização, versão portuguesa (autoritativa).
 *
 * ── O que estes termos deliberadamente NÃO fazem ───────────────────────────
 *
 * Não tratam de pagamento, de adesão nem de reembolso. Nada disso passa pelo
 * IRT®: a comunidade é vendida pela plataforma, o dinheiro é dela e as regras
 * de reembolso são as dela. Escrever aqui uma segunda versão dessas regras
 * seria criar duas fontes de verdade sobre dinheiro, que é exatamente como os
 * Termos da Cobuntu chegaram a descrever um sistema de pagamentos já retirado.
 *
 * ── As três cláusulas que mais importam ────────────────────────────────────
 *
 * 1. §5, o Snapshot não é um instrumento clínico nem psicométrico. É a
 *    afirmação que impede que um resultado seja lido como diagnóstico.
 * 2. §6, a organização não pode usar isto para decidir sobre carreiras. É uma
 *    obrigação contratual e não uma recomendação, porque o produto entrega a
 *    uma empresa uma leitura sobre a sua liderança e alguém, algures, vai
 *    querer usá-la para promover ou dispensar.
 * 3. §9, o que é dela e o que é seu. O método é propriedade da empresa; o que
 *    o membro escreve é do membro, e a licença que nos dá é a mínima para lhe
 *    prestarmos o serviço.
 */

import type { LegalDoc } from "./types";
import { ENTITY, PLATFORM, LAST_UPDATED } from "./entity";

export const termsPtPT: LegalDoc = {
  title: "Termos de Utilização",
  summary:
    "As regras de utilização da plataforma IRT®: o que ela é, o que não é, o que pode esperar de nós e o que esperamos de si.",
  updated: LAST_UPDATED,
  sections: [
    {
      id: "quem",
      title: "Quem presta este serviço",
      blocks: [
        {
          kind: "p",
          text: `A ${ENTITY.product} é operada pela ${ENTITY.legalName} (NIPC ${ENTITY.nif}), com sede na ${ENTITY.address}. Neste documento, "nós" é essa empresa e "você" é quem utiliza a plataforma.`,
        },
        {
          kind: "p",
          text: `Contacto: ${ENTITY.email}.`,
        },
        {
          kind: "p",
          text: "Ao utilizar a plataforma IRT® aceita estes termos. Se não os aceitar, não a utilize.",
        },
      ],
    },

    {
      id: "servico",
      title: "O que é a plataforma IRT®",
      blocks: [
        {
          kind: "p",
          text: "O IRT® é um método de desenvolvimento de liderança, e a plataforma é onde ele se percorre. Inclui:",
        },
        {
          kind: "ul",
          items: [
            "o Leadership Snapshot®, um questionário de autoavaliação que produz um Estado e um perfil por dimensões e competências;",
            "um Ciclo IRT® de seis meses, com pontos de situação aos 30 e aos 90 dias e reavaliação aos 180;",
            "Missões de desenvolvimento, atribuídas em função do seu resultado;",
            "o Toolkit, onde a assistente MIA liga a situação que descreve a um Plano de Ação do método;",
            "a Biblioteca, com conteúdos de desenvolvimento associados às competências;",
            "para organizações, uma leitura agregada do grupo inscrito.",
          ],
        },
        {
          kind: "p",
          text: "Podemos alterar, acrescentar ou retirar funcionalidades. Se uma alteração retirar algo de substancial, avisamos com antecedência razoável.",
        },
      ],
    },

    {
      id: "acesso",
      title: "Quem pode utilizar, e como se entra",
      blocks: [
        {
          kind: "p",
          text: `O acesso faz-se com a sua conta ${PLATFORM.name} e depende de pertencer à comunidade IRT® nessa plataforma. Não criamos contas nem guardamos palavras-passe.`,
        },
        {
          kind: "p",
          text: `Quer isto dizer que se aplicam também os termos da ${PLATFORM.name}, em ${PLATFORM.terms}. Se deixar de pertencer à comunidade, perde o acesso à plataforma IRT®, e isso decorre da sua relação com a plataforma, não de uma decisão nossa.`,
        },
        {
          kind: "p",
          text: "A plataforma destina-se a profissionais maiores de 18 anos em funções de liderança, ou a quem se prepara para as assumir.",
        },
        {
          kind: "p",
          text: "O acesso é pessoal. Não partilhe a sua conta nem deixe outra pessoa responder ao Snapshot por si, o que além de violar estes termos produziria um resultado sem valor algum.",
        },
      ],
    },

    {
      id: "pagamento",
      title: "Pagamento",
      blocks: [
        {
          kind: "p",
          text: `A plataforma IRT® não cobra nada diretamente e não processa pagamentos. Se houver um valor a pagar pela adesão à comunidade, por um evento ou por um programa, a transação é da ${PLATFORM.name} e regem-se pelos termos e pela política de reembolsos dela.`,
        },
        {
          kind: "p",
          text: "Quando uma organização contrata um programa para um grupo de líderes, essa contratação é feita por acordo próprio com a nossa empresa, e é esse acordo que prevalece sobre estes termos no que a ele disser respeito.",
        },
      ],
    },

    {
      id: "natureza",
      title: "O que o Leadership Snapshot® não é",
      blocks: [
        {
          kind: "p",
          text: "Esta secção é importante e pedimos que a leia mesmo que salte as outras.",
        },
        {
          kind: "p",
          text: "O Snapshot é um instrumento de autoavaliação e de reflexão orientada. Baseia-se no que você declara sobre si, num momento concreto.",
        },
        { kind: "h3", text: "Não é" },
        {
          kind: "ul",
          items: [
            "um teste psicométrico validado nem um instrumento clínico;",
            "um diagnóstico de saúde, uma avaliação psicológica ou aconselhamento médico;",
            "uma avaliação de desempenho, nem prova de competência ou de aptidão para uma função;",
            "uma previsão de sucesso profissional.",
          ],
        },
        {
          kind: "p",
          text: "O Estado, as pontuações e as Missões são material de trabalho para o seu desenvolvimento. Não substituem julgamento profissional, acompanhamento especializado nem, quando for o caso, apoio clínico. Se o que estiver a viver no trabalho o estiver a afetar na saúde, procure um profissional de saúde e não uma aplicação.",
        },
        {
          kind: "p",
          text: "As respostas da assistente MIA são geradas por um modelo de linguagem a partir do método. Podem conter erros e devem ser lidas com o mesmo distanciamento com que leria uma sugestão de um colega, não como instrução.",
        },
      ],
    },

    {
      id: "organizacoes",
      title: "Utilização por organizações",
      blocks: [
        {
          kind: "p",
          text: "Quando uma organização inscreve um grupo de líderes, obriga-se ao seguinte, que é condição de acesso à leitura agregada:",
        },
        {
          kind: "ul",
          items: [
            "não utilizar os dados do IRT®, em nenhuma forma, para decidir sobre contratação, promoção, remuneração, cessação de contrato ou qualquer medida disciplinar;",
            "não exigir a nenhum colaborador que lhe mostre o seu resultado individual, as suas Missões, o que escreveu ou as suas conversas com a MIA, nem condicionar-lhe nada a essa exibição;",
            "não tentar reidentificar pessoas a partir de números agregados, incluindo por cruzamento com informação que já detenha;",
            "informar os colaboradores inscritos de que o fez e para quê.",
          ],
        },
        {
          kind: "p",
          text: "Do nosso lado, a plataforma foi construída para tornar isto difícil de violar e não apenas proibido: o cálculo do agregado nunca monta uma linha por pessoa, as estatísticas só aparecem a partir de 5 participantes avaliados e a utilização do Toolkit é contada sobre um código irreversível. A Política de Privacidade descreve exatamente o que uma organização vê.",
        },
        {
          kind: "p",
          text: "O incumprimento destas obrigações permite-nos suspender de imediato o acesso da organização à leitura agregada.",
        },
      ],
    },

    {
      id: "utilizacao",
      title: "O que esperamos de si",
      blocks: [
        {
          kind: "p",
          text: "Ao utilizar a plataforma, compromete-se a:",
        },
        {
          kind: "ul",
          items: [
            "responder ao Snapshot com honestidade, porque um resultado construído sobre respostas de conveniência não lhe serve de nada;",
            "não tentar aceder a dados de outras pessoas, contornar as verificações de acesso, sondar o serviço à procura de falhas ou extrair conteúdos de forma automatizada;",
            "não copiar, redistribuir nem reutilizar os conteúdos do método fora do seu uso pessoal, conforme a secção seguinte;",
            "não utilizar a plataforma para assediar, difamar ou prejudicar alguém;",
            "não contornar os limites de utilização, incluindo o limite de 40 mensagens por dia na MIA.",
          ],
        },
        { kind: "h3", text: "Sobre o que anexa" },
        {
          kind: "p",
          text: "Pode anexar ficheiros às conversas com a MIA. Frequentemente contêm informação sobre outras pessoas, como avaliações 360º ou mensagens de colegas. É você quem decide partilhá-los connosco e é sua a responsabilidade de ter legitimidade para o fazer.",
        },
        {
          kind: "p",
          text: "Não anexe dados de saúde, dados de menores, informação confidencial que não lhe pertença nem nada que não mostraria à pessoa em causa. Remova nomes quando não forem necessários à pergunta. Apagamos os ficheiros ao fim de 30 dias, e podemos remover antes disso qualquer conteúdo que viole esta regra.",
        },
      ],
    },

    {
      id: "propriedade",
      title: "O que é nosso e o que é seu",
      blocks: [
        { kind: "h3", text: "Nosso" },
        {
          kind: "p",
          text: "O método IRT®, a marca, o Leadership Snapshot®, as afirmações do questionário, a taxonomia de dimensões e competências, os Planos de Ação, as Missões, os conteúdos da Biblioteca e o software são propriedade da nossa empresa e estão protegidos por direitos de autor e de propriedade industrial.",
        },
        {
          kind: "p",
          text: "Damos-lhe uma licença pessoal, não exclusiva e não transmissível para os utilizar enquanto tiver acesso, e apenas para o seu próprio desenvolvimento. Não pode reproduzi-los, adaptá-los, formar terceiros com eles nem usá-los para construir um serviço concorrente.",
        },
        { kind: "h3", text: "Seu" },
        {
          kind: "p",
          text: "As suas respostas, reflexões, evidências, conversas e ficheiros são seus. Não reclamamos propriedade sobre nada disso.",
        },
        {
          kind: "p",
          text: "Dá-nos apenas a licença necessária para guardar e tratar esse conteúdo com o fim de lhe prestar o serviço, nos exatos termos da Política de Privacidade. Não o usamos para treinar modelos, não o vendemos e não o mostramos a terceiros fora do que lá está descrito. Essa licença cessa quando o conteúdo for apagado.",
        },
        {
          kind: "p",
          text: "O resultado do seu Snapshot é seu e pode pedir-nos uma cópia a qualquer momento.",
        },
      ],
    },

    {
      id: "disponibilidade",
      title: "Disponibilidade do serviço",
      blocks: [
        {
          kind: "p",
          text: "Fazemos o que é razoável para manter a plataforma disponível, mas não garantimos funcionamento ininterrupto nem isento de erros, e não há um nível de serviço contratado.",
        },
        {
          kind: "p",
          text: "Em particular, a assistente MIA funciona sobre um saldo pré-pago junto do fornecedor do modelo. Esgotado esse saldo, ou havendo indisponibilidade do fornecedor, a MIA deixa de responder enquanto o resto da plataforma continua a funcionar. É uma condição prevista e não uma avaria, e a aplicação di-lo em vez de falhar em silêncio.",
        },
        {
          kind: "p",
          text: "Pode haver interrupções para manutenção. Sempre que possível, fora do horário de trabalho.",
        },
      ],
    },

    {
      id: "responsabilidade",
      title: "Limitação de responsabilidade",
      blocks: [
        {
          kind: "p",
          text: "A plataforma é disponibilizada no estado em que se encontra. Na medida máxima permitida por lei, não damos garantias de que os resultados sejam adequados a um fim específico seu.",
        },
        {
          kind: "p",
          text: "Não respondemos por decisões que tome, ou que outra pessoa tome, com base num resultado do Snapshot, numa Missão ou numa resposta da MIA. Essas decisões são suas.",
        },
        {
          kind: "p",
          text: "Não respondemos por danos indiretos, lucros cessantes, perda de oportunidade ou perda de dados causada por facto que não nos seja imputável, nem por indisponibilidade da plataforma Cobuntu ou de qualquer dos fornecedores identificados na Política de Privacidade.",
        },
        {
          kind: "p",
          text: "Nada nestes termos exclui ou limita a nossa responsabilidade por dolo, por culpa grave, por danos à vida ou à integridade física, nem afasta os direitos que a lei reconhece aos consumidores e que não podem ser afastados por contrato.",
        },
      ],
    },

    {
      id: "suspensao",
      title: "Suspensão e cessação",
      blocks: [
        {
          kind: "p",
          text: "Pode deixar de utilizar a plataforma quando quiser, e pedir o apagamento dos seus dados nos termos da Política de Privacidade.",
        },
        {
          kind: "p",
          text: "Podemos suspender ou encerrar o seu acesso se violar estes termos de forma grave ou reiterada, designadamente as regras sobre utilização por organizações ou sobre o que anexa. Salvo quando a gravidade o impedir, avisamos primeiro e damos-lhe oportunidade de corrigir.",
        },
        {
          kind: "p",
          text: "Se descontinuarmos a plataforma, avisamos com antecedência razoável e damos-lhe a possibilidade de obter uma cópia dos seus dados antes de a encerrarmos.",
        },
      ],
    },

    {
      id: "alteracoes",
      title: "Alterações a estes termos",
      blocks: [
        {
          kind: "p",
          text: "Podemos alterar estes termos. A data no topo indica a última versão. Se a alteração for substancial, avisamos na aplicação ou por email com antecedência razoável, e a continuação da utilização depois da entrada em vigor vale como aceitação. Se não aceitar, pode deixar de utilizar a plataforma e pedir o apagamento dos seus dados.",
        },
      ],
    },

    {
      id: "lei",
      title: "Lei aplicável e foro",
      blocks: [
        {
          kind: "p",
          text: "Estes termos regem-se pela lei portuguesa.",
        },
        {
          kind: "p",
          text: "Para qualquer litígio é competente o foro da comarca de Lisboa, com expressa renúncia a qualquer outro, sem prejuízo do direito de o consumidor recorrer ao tribunal do seu domicílio quando a lei lho garanta.",
        },
        {
          kind: "p",
          text: "Sendo consumidor, pode ainda recorrer a uma entidade de resolução alternativa de litígios. A lista das entidades registadas está disponível no Portal do Consumidor, em https://www.consumidor.gov.pt.",
        },
        {
          kind: "p",
          text: "Se alguma cláusula destes termos for considerada inválida, as restantes mantêm-se em vigor.",
        },
        {
          kind: "p",
          text: "Esta é a versão portuguesa e é a que prevalece. A versão inglesa é uma tradução de cortesia e, se as duas divergirem, vale esta.",
        },
      ],
    },
  ],
};
