import { CourseModule } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: "Módulo 1 — START",
    subtitle: "Do zero à primeira direção de renda digital",
    objective: "Ajudar o aluno a entender seu ponto de partida, escolher uma rota possível de renda digital e montar uma base sólida para começar antes de fazer as malas.",
    unlockCondition: "Liberado no cadastro",
    unlockedByDefault: true,
    practicalTool: "Mapa Start Interativo",
    deliverable: "Rota principal escolhida, meta financeira mensal e plano de ação de 7 dias.",
    lessons: [
      {
        id: "m1-l1",
        moduleId: 1,
        day: 1,
        title: "01. O que significa viver da internet",
        duration: "22 min",
        summary: "Diferença entre renda digital, emprego remoto CLT, freelancing e micro-empreendedorismo. Alinhando liberdade com responsabilidade.",
        description: "Compreenda a realidade do trabalho remoto sem ilusões de dinheiro fácil. Desmistifique o estilo de vida nômade, entendendo os pilares de consistência, disciplina diária e autonomia profissional.",
        keyTakeaways: [
          "Renda digital não é sorteio: é troca de valor e solução de dores reais.",
          "Diferenças entre freelancing ágil, agência digital e produtos digitais.",
          "O tripé do nômade: clareza de serviço, controle financeiro e compromisso com o cliente."
        ],
        actionItem: "Escreva em uma frase qual valor você quer gerar para o mercado nos próximos 6 meses.",
        deliverable: "Definição de intenção inicial."
      },
      {
        id: "m1-l2",
        moduleId: 1,
        day: 2,
        title: "02. Diagnóstico pessoal e profissional",
        duration: "25 min",
        summary: "Mapeamento das habilidades que você já possui e como transformá-las em serviços comercializáveis.",
        description: "Faça um raio-x das suas experiências passadas, conhecimentos técnicos, facilidades de comunicação ou organização que podem virar serviços remotos de alto valor percebido.",
        keyTakeaways: [
          "Todo mundo tem pelo menos uma competência que alguém pagaria para não ter que fazer.",
          "Análise de tempo disponível: plano de transição de 10h a 20h semanais.",
          "Equilíbrio entre o que você gosta, o que faz bem e o que o mercado compra."
        ],
        actionItem: "Liste 5 coisas em que amigos ou colegas costumam pedir sua ajuda ou conselho.",
        deliverable: "Inventário de habilidades monetizáveis."
      },
      {
        id: "m1-l3",
        moduleId: 1,
        day: 3,
        title: "03. O Número da Liberdade",
        duration: "30 min",
        summary: "Cálculo do custo de vida mensal mínimo, reserva de segurança e meta antes de comprar a primeira passagem.",
        description: "Aprenda a calcular com exatidão matemática o valor necessário para se manter no Brasil e no exterior. Saiba quanto guardar de reserva de emergência e separe faturamento de lucro líquido.",
        keyTakeaways: [
          "O 'Número da Liberdade' (NL): Custo de vida essencial + seguro saúde + reserva de imprevistos.",
          "Reserva mínima de 3 a 6 meses de NL em moeda estável antes de viajar.",
          "Separação estrita de conta PJ e PF para evitar quebrar o negócio."
        ],
        actionItem: "Preencha a Calculadora do Número da Liberdade na aba Ferramentas.",
        deliverable: "Planilha de Custo Mensal e Meta Financeira de Partida."
      },
      {
        id: "m1-l4",
        moduleId: 1,
        day: 4,
        title: "04. Mentalidade de CEO",
        duration: "28 min",
        summary: "Clareza de direção, posicionamento, postura de autoridade e foco em uma oferta inicial sem dispersão.",
        description: "Deixe para trás a mentalidade passiva de funcionário. Aprenda a tomar decisões rápidas, a precificar pelo valor entregue e a focar em UMA oferta irresistível antes de querer abraçar o mundo.",
        keyTakeaways: [
          "Um CEO foca nas alavancas que geram receita: oferta, prospecção e entrega de excelência.",
          "Evite a 'síndrome do objeto brilhante': dominar um canal antes de abrir outro.",
          "Posicionamento de especialista: quem faz tudo para todos, não é lembrado por ninguém."
        ],
        actionItem: "Escreva seu pitch de 30 segundos explicando o que você resolve e para quem.",
        deliverable: "Declaração de Posicionamento Estratégico."
      },
      {
        id: "m1-l5",
        moduleId: 1,
        day: 5,
        title: "05. Escolha da primeira rota digital",
        duration: "35 min",
        summary: "Avaliação comparativa: gestão de redes sociais, assistência virtual, criação de sites, tráfego pago, redação e consultoria.",
        description: "Análise aprofundada das principais rotas digitais com menor barreira de entrada e maior velocidade para conquistar o primeiro cliente pagante.",
        keyTakeaways: [
          "Serviços locais (redes sociais e sites para empresas de bairro): dinheiro rápido em 1 a 2 semanas.",
          "Freelance internacional (Upwork, Fiverr, LinkedIn): ganhe em dólar e euro.",
          "Infoprodutos e afiliados: construa em paralelo após ter fluxo de caixa ativo."
        ],
        actionItem: "Preencha o Mapa Start com sua rota definitiva e clique em Concluir Módulo 1.",
        deliverable: "Mapa Start validado para desbloqueio do Módulo 2."
      }
    ]
  },
  {
    id: 2,
    title: "Módulo 2 — DESCOBRIMENTO DE POSSIBILIDADES",
    subtitle: "Como transformar habilidade em oportunidade e demanda real",
    objective: "Apresentar diferentes modelos de receita pela internet e ensinar o aluno a validar uma oferta viável no mercado nacional e internacional.",
    unlockCondition: "Conclusão do Módulo 1 e preenchimento do Mapa Start",
    unlockedByDefault: false,
    practicalTool: "Matriz de Oportunidades 1 a 5",
    deliverable: "3 modelos avaliados, 1 oportunidade vencedora definida e roteiro de prospecção pronto.",
    lessons: [
      {
        id: "m2-l1",
        moduleId: 2,
        day: 6,
        title: "06. Serviços para empresas locais e turismo",
        duration: "30 min",
        summary: "Gestão de Google Meu Negócio, Instagram profissional, cardápios digitais e atendimento via WhatsApp para negócios físicos.",
        description: "Empresas da sua cidade ou dos destinos turísticos por onde você viaja precisam desesperadamente de presença digital. Como fechar contratos recorrentes de R$ 600 a R$ 1.800/mês.",
        keyTakeaways: [
          "Negócios locais valorizam quem traz clientes para a porta ou para o WhatsApp.",
          "O pacote 'Presença Total': Google Perfil de Empresa + 3 posts semanais + resposta rápida a leads.",
          "Como propor parcerias em pousadas e restaurantes em troca de hospedagem ou honorários."
        ],
        actionItem: "Abra o Google Maps da sua região e identifique 10 comércios com perfis desatualizados.",
        deliverable: "Lista de 10 negócios locais com diagnóstico inicial."
      },
      {
        id: "m2-l2",
        moduleId: 2,
        day: 7,
        title: "07. Freelancing nacional e internacional",
        duration: "32 min",
        summary: "Montagem de portfólio de alto impacto, plataformas globais e cuidados ao receber em moeda estrangeira.",
        description: "Como se posicionar no Upwork, Workana, LinkedIn e plataformas internacionais para prestar serviços para clientes dos EUA, Europa e América Latina recebendo em moedas fortes.",
        keyTakeaways: [
          "Como criar conta e receber com taxas justas via Wise, Payoneer ou Husky.",
          "Propostas personalizadas que vencem concorrentes que só competem por preço baixo.",
          "Como mostrar estudos de caso visuais mesmo começando do zero."
        ],
        actionItem: "Crie um perfil estruturado no LinkedIn e organize uma pasta de portfólio no Notion ou Google Drive.",
        deliverable: "Portfólio de amostras e perfil profissional otimizado."
      },
      {
        id: "m2-l3",
        moduleId: 2,
        day: 8,
        title: "08. Conteúdo, nicho e construção de autoridade",
        duration: "26 min",
        summary: "Criação de audiência qualificada sem depender de dancinhas ou viralização vazia.",
        description: "Aprenda a produzir conteúdo educativo, comercial e de relacionamento focado em atrair clientes dispostos a pagar pelo seu serviço ou mentoria.",
        keyTakeaways: [
          "O tripé do conteúdo: 50% autoridade/ensino, 30% bastidores/lifestyle, 20% chamada direta para ação.",
          "Constância sustentável: programar postagens da semana em apenas 2 horas.",
          "Como usar o stories para gerar conversas no direct que viram propostas."
        ],
        actionItem: "Grave ou redija um post ensinando a resolver um problema comum do seu cliente ideal.",
        deliverable: "Calendário editorial de 7 dias."
      },
      {
        id: "m2-l4",
        moduleId: 2,
        day: 9,
        title: "09. Afiliados e indicação responsável",
        duration: "24 min",
        summary: "Como recomendar ferramentas, hospedagens, seguros de viagem e softwares ganhando comissões recorrentes.",
        description: "Conheça os melhores programas de afiliados para nômades: SafetyWing, Booking, Amazon, plataformas de e-learning e ferramentas SaaS (Notion, Canva, ActiveCampaign).",
        keyTakeaways: [
          "Transparência é a chave: nunca recomende algo que você não testaria ou usaria.",
          "Afiliados de SaaS com comissão mensal recorrente (MRR) geram renda passiva real.",
          "Como criar reviews honestos que geram vendas orgânicas nos mecanismos de busca."
        ],
        actionItem: "Cadastre-se em 2 programas de afiliados de ferramentas que você usa diariamente.",
        deliverable: "Link de parceiro integrado em bio ou página pessoal."
      },
      {
        id: "m2-l5",
        moduleId: 2,
        day: 10,
        title: "10. Produtos digitais e consultoria online",
        duration: "28 min",
        summary: "E-books, templates de Notion/Canva, mentorias individuais e consultorias gravadas.",
        description: "Como empacotar seu método e conhecimento em produtos digitais de baixo tíquete ou consultorias de alto valor com entrega 100% digital.",
        keyTakeaways: [
          "Valide a demanda antes de passar 3 meses gravando um curso: venda a mentoria piloto primeiro.",
          "Templates e ferramentas digitais têm margem de 90%+ e não exigem estoque.",
          "Entregas ao vivo criam proximidade e geram depoimentos fortes."
        ],
        actionItem: "Desenhe o sumário de um minicurso ou template que seu público compraria por R$ 47 a R$ 97.",
        deliverable: "Estrutura de Produto Digital Piloto."
      },
      {
        id: "m2-l6",
        moduleId: 2,
        day: 11,
        title: "11. E-commerce e operações sem estoque",
        duration: "27 min",
        summary: "Loja virtual enxuta, atendimento automatizado e cuidados com fornecedores internacionais.",
        description: "Entenda o modelo de e-commerce remoto, marcas próprias ou dropshipping responsável, gerenciando pedidos e atendimento ao cliente de qualquer país.",
        keyTakeaways: [
          "Margem de lucro, tempo de entrega e qualidade do suporte determinam a longevidade da loja.",
          "Atendimento profissional via WhatsApp Web e e-mail resolve 95% das dúvidas de clientes.",
          "Como mitigar riscos tributários e cambiais nas transações internacionais."
        ],
        actionItem: "Pesquise 3 produtos em alta e analise custo do fornecedor vs. preço final de venda.",
        deliverable: "Análise de viabilidade de produto."
      },
      {
        id: "m2-l7",
        moduleId: 2,
        day: 12,
        title: "12. Decisão estratégica: Matriz de Oportunidades",
        duration: "30 min",
        summary: "Critérios de Habilidade, Demanda, Venda, Mobilidade, Margem e Escalabilidade (notas de 1 a 5).",
        description: "Use nossa metodologia prática para escolher a rota mais rápida e lucrativa para o seu momento atual, eliminando a paralisia por análise.",
        keyTakeaways: [
          "Não escolha pelo que parece mais fácil no YouTube, escolha pelo que você executa hoje.",
          "Pontuação ponderada de mobilidade geográfica e velocidade do primeiro faturamento.",
          "Compromisso de foco: 90 dias sem desviar de rota."
        ],
        actionItem: "Preencha a Matriz de Oportunidades com 3 caminhos e selecione o vencedor.",
        deliverable: "Matriz de Oportunidades preenchida para desbloqueio do Módulo 3."
      }
    ]
  },
  {
    id: 3,
    title: "Módulo 3 — EXECUTAR NA PRÁTICA ENQUANTO VIVE O EXTRAORDINÁRIO",
    subtitle: "Do planejamento à renda ativa e rotina sustentável em movimento",
    objective: "Colocar o aluno em ação, fechar os primeiros clientes, organizar a rotina viajando, fuso horário, visto e blindagem financeira.",
    unlockCondition: "Conclusão do Módulo 2 e aprovação da Matriz de Oportunidades",
    unlockedByDefault: false,
    practicalTool: "Desafio 21 Dias & Plano de Crescimento de 90 Dias",
    deliverable: "Oferta pronta para venda, lista de 30 leads, roteiro de abordagem e rotina nômade blindada.",
    lessons: [
      {
        id: "m3-l1",
        moduleId: 3,
        day: 13,
        title: "13. Criação da primeira oferta comercial",
        duration: "33 min",
        summary: "Nome do serviço, problema resolvido, entregas, prazos, garantias e precificação irresistível.",
        description: "Construa uma proposta comercial de 1 página que qualquer decisor entenda em menos de 2 minutos. Exemplo: 'Pacote de Captação e Conteúdo para Pequenos Negócios de Turismo'.",
        keyTakeaways: [
          "O cliente não compra horas de trabalho, compra a transformação e o resultado final.",
          "Como ancorar o preço mostrando o custo de não resolver o problema.",
          "Cláusulas essenciais: escopo delimitado, prazos de pagamento e limites de revisões."
        ],
        actionItem: "Escreva a proposta oficial da sua oferta com nome, 3 entregáveis e preço.",
        deliverable: "Proposta Comercial de 1 Página."
      },
      {
        id: "m3-l2",
        moduleId: 3,
        day: 14,
        title: "14. Prospecção e geração de leads sem spam",
        duration: "36 min",
        summary: "Como encontrar clientes no Instagram, Google, LinkedIn e indicações com abordagem personalizada.",
        description: "Abordar desconhecidos com spam afasta pessoas. Aprenda a técnica do 'Diagnóstico Cortesia', chamando atenção com elogio genuíno e sugestão prática de melhoria.",
        keyTakeaways: [
          "Regra 30/3: mapear 30 potenciais clientes para gerar 3 conversas qualificadas.",
          "A mensagem de abertura perfeita: específica, breve e focada no benefício do cliente.",
          "Como usar o LinkedIn para encontrar tomadores de decisão em empresas remotas."
        ],
        actionItem: "Mapeie 30 potenciais clientes com nome, contato e 1 ponto de melhoria identificado.",
        deliverable: "Planilha de Prospecção Ativa (30 Leads)."
      },
      {
        id: "m3-l3",
        moduleId: 3,
        day: 15,
        title: "15. Vendas, negociação e follow-up responsável",
        duration: "31 min",
        summary: "Como conduzir uma reunião de diagnóstico, lidar com objeções ('está caro', 'vou pensar') e fazer follow-up que converte.",
        description: "A maioria das vendas acontece no 3º ao 5º contato. Aprenda a fazer acompanhamento respeitoso, sem parecer desesperado, registrando o consentimento do lead.",
        keyTakeaways: [
          "Como responder ao 'vou pensar': pergunte educadamente qual dúvida ainda impede a decisão.",
          "Follow-up de valor: envie uma dica ou artigo útil entre um contato e outro.",
          "Transição suave: da conversa no chat para a chamada de vídeo de 15 minutos."
        ],
        actionItem: "Envie a abordagem para os primeiros 5 leads da sua lista e registre o status.",
        deliverable: "Controle de Follow-up de Vendas."
      },
      {
        id: "m3-l4",
        moduleId: 3,
        day: 16,
        title: "16. Entrega profissional em trânsito (Onboarding e SLA)",
        duration: "29 min",
        summary: "Briefing organizado, calendário compartilhado no Trello/Notion, relatórios simples e solicitação de depoimentos.",
        description: "Como surpreender o cliente desde o primeiro dia, garantindo que suas entregas cheguem no prazo mesmo enquanto você está em um voo ou trocando de acomodação.",
        keyTakeaways: [
          "Comunicação antecipada: nunca avise de um imprevisto na hora da entrega; avise com 24h de antecedência.",
          "O formulário de onboarding que economiza 10 horas de reuniões desnecessárias.",
          "Como pedir depoimento em vídeo assim que o cliente comemora o primeiro resultado."
        ],
        actionItem: "Crie um modelo de formulário de briefing com as 5 perguntas essenciais para seu serviço.",
        deliverable: "Kit de Onboarding de Cliente."
      },
      {
        id: "m3-l5",
        moduleId: 3,
        day: 17,
        title: "17. Rotina nômade: fusos, conectividade e foco",
        duration: "34 min",
        summary: "Blocos de foco (Deep Work), internet primária e backup (eSIM/Starlink), gestão de tempo e prevenção de burnout.",
        description: "Viajar não são férias perpétuas. Descubra a metodologia de blocos de trabalho matinais, escolha de coworkings com gerador e internet redundante para nunca ficar na mão.",
        keyTakeaways: [
          "Regra de ouro da conectividade: sempre compre um eSIM local antes de aterrissar no aeroporto.",
          "Bloco 4x4: 4 horas de trabalho focado e produtivo superam 8 horas de distração em escritório.",
          "Como lidar com clientes em fusos opostos estabelecendo horários fixos de resposta."
        ],
        actionItem: "Monte seu cronograma semanal dividindo dias de deslocamento e dias de foco.",
        deliverable: "Grade de Rotina Nômade e Plano de Conectividade."
      },
      {
        id: "m3-l6",
        moduleId: 3,
        day: 18,
        title: "18. Finanças, vistos, residência fiscal e segurança",
        duration: "38 min",
        summary: "Contratos de prestação de serviços internacionais, bancos digitais multimoeda, seguro viagem obrigatório e vistos de nômade digital.",
        description: "Panorama educativo sobre tributação no Brasil e no exterior (regra dos 183 dias), vistos para nômades (Portugal, Espanha, Brasil, Tailândia) e segurança de senhas e Wi-Fi público.",
        keyTakeaways: [
          "Segurança digital indispensável: use gerenciador de senhas (1Password/Bitwarden) e VPN em redes públicas.",
          "Cartão de débito global e contas multimoeda (Wise / Nomad / Revolut).",
          "Consulte sempre órgãos oficiais e contadores especializados em tributação internacional."
        ],
        actionItem: "Instale uma VPN confiável e ative autenticação de dois fatores (2FA) em todas as contas críticas.",
        deliverable: "Checklist de Segurança Digital e Vistos."
      },
      {
        id: "m3-l7",
        moduleId: 3,
        day: 19,
        title: "19. Plano de crescimento e escala de 90 dias",
        duration: "35 min",
        summary: "Aumento gradual de preços, transição para contratos de retenção mensal, terceirização de tarefas operacionais e networking global.",
        description: "Como sair da cobrança por projeto e construir um ecossistema com previsibilidade de caixa que permite morar nos melhores destinos do planeta com tranquilidade financeira.",
        keyTakeaways: [
          "Aumente o preço a cada 3 novos clientes fechados até encontrar o teto de mercado.",
          "Contratos de recorrência mensal (retainer) são a chave para a estabilidade do nômade.",
          "Networking estratégico em comunidades globais de nômades digitais."
        ],
        actionItem: "Elabore seu plano de metas para os próximos 30, 60 e 90 dias.",
        deliverable: "Plano de Crescimento Nômade 90 Dias."
      }
    ]
  }
];

export const CHALLENGE_21_DAYS = [
  { days: "Dias 1 a 3", phase: "Fundação", task: "Definir oferta, público e preço inicial.", icon: "Target" },
  { days: "Dias 4 a 7", phase: "Posicionamento", task: "Montar apresentação, portfólio e perfil profissional.", icon: "Briefcase" },
  { days: "Dias 8 a 12", phase: "Mapeamento", task: "Mapear 30 potenciais clientes qualificados.", icon: "Users" },
  { days: "Dias 13 a 16", phase: "Ativação", task: "Enviar abordagens personalizadas e registrar respostas.", icon: "Send" },
  { days: "Dias 17 a 19", phase: "Conversão", task: "Realizar conversas, diagnósticos e apresentar propostas.", icon: "DollarSign" },
  { days: "Dias 20 e 21", phase: "Consolidação", task: "Revisar resultados, colher aprendizados e traçar os próximos 30 dias.", icon: "Award" }
];
