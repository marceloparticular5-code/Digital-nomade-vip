export interface NomadVisaInfo {
  country: string;
  flag: string;
  visaName: string;
  minMonthlyIncomeUSD: number;
  duration: string;
  keyRequirements: string[];
  taxOverview: string;
}

export const NOMAD_VISAS: NomadVisaInfo[] = [
  {
    country: "Brasil",
    flag: "🇧🇷",
    visaName: "Visto Temporário VITEM XIV",
    minMonthlyIncomeUSD: 1500,
    duration: "1 ano (renovável por mais 1 ano)",
    keyRequirements: [
      "Comprovação de renda de US$ 1.500/mês ou saldo bancário de US$ 18.000",
      "Contrato de trabalho ou prestação de serviços com empresa fora do Brasil",
      "Seguro saúde com cobertura nacional válida",
      "Atestado de antecedentes criminais apostilado"
    ],
    taxOverview: "Geralmente passa a ser considerado residente fiscal após completar 183 dias no país dentro de um período de 12 meses."
  },
  {
    country: "Portugal",
    flag: "🇵🇹",
    visaName: "Visto D8 (Nômade Digital)",
    minMonthlyIncomeUSD: 3500,
    duration: "1 ano (ou autorização de residência de 2 anos)",
    keyRequirements: [
      "Renda comprovada de 4 salários mínimos portugueses (aprox. € 3.280 / US$ 3.500/mês)",
      "Contrato de trabalho remoto ou contratos de prestação de serviços com clientes externos",
      "Comprovante de alojamento em Portugal",
      "Seguro de saúde ou PB4 (para brasileiros)"
    ],
    taxOverview: "Regime fiscal com regras específicas para novos residentes que substituem o antigo RNH; requer planejamento tributário prévio."
  },
  {
    country: "Espanha",
    flag: "🇪🇸",
    visaName: "Visto Nômade Digital (Ley de Startups)",
    minMonthlyIncomeUSD: 2800,
    duration: "1 ano (visto consular) ou 3 anos (se solicitado na Espanha)",
    keyRequirements: [
      "Renda equivalente a 200% do SMI espanhol (aprox. € 2.650 / US$ 2.800/mês)",
      "Empresa contratante existente há mais de 1 ano e trabalho 100% remoto",
      "Diploma universitário ou 3 anos de experiência comprovada na área",
      "Seguro médico privado sem coparticipação na Espanha"
    ],
    taxOverview: "Possibilidade de adesão à 'Lei Beckham' com alíquota fixa especial de 24% para rendas aplicáveis."
  },
  {
    country: "Tailândia",
    flag: "🇹🇭",
    visaName: "Destination Thailand Visa (DTV)",
    minMonthlyIncomeUSD: 1800,
    duration: "Válido por 5 anos (entradas múltiplas de 180 dias)",
    keyRequirements: [
      "Comprovação financeira de no mínimo 500.000 THB (aprox. US$ 14.000)",
      "Portfólio profissional e contrato de prestação de serviços remotos",
      "Taxa consular acessível e facilidade de renovação in-country",
      "Custo de vida extremamente competitivo em Chiang Mai e Bangkok"
    ],
    taxOverview: "Renda auferida fora da Tailândia não remetida no mesmo ano fiscal possui regras específicas favoráveis para nômades."
  },
  {
    country: "Colômbia",
    flag: "🇨🇴",
    visaName: "Visa V Nómadas Digitales",
    minMonthlyIncomeUSD: 1400,
    duration: "Até 2 anos",
    keyRequirements: [
      "Renda de 3 salários mínimos colombianos (aprox. US$ 1.400/mês)",
      "Carta da empresa internacional ou faturas de clientes estrangeiros",
      "Seguro de saúde com cobertura internacional para emergências e repatriação",
      "Medellín e Bogotá como polos vibrantes com centenas de coworkings"
    ],
    taxOverview: "Isenção de tributação sobre renda de fonte exclusivamente estrangeira durante o período do visto."
  }
];

export const TECH_CHECKLIST = [
  {
    category: "Conectividade & Internet Redundante",
    items: [
      { id: "c1", name: "eSIM Internacional (Airalo, Maya ou Holafly)", desc: "Garanta dados 5G antes de aterrissar em qualquer país.", critical: true },
      { id: "c2", name: "Plano móvel local secundário com roteamento de Wi-Fi", desc: "Chip físico local para contingência caso a rede do hotel caia.", critical: true },
      { id: "c3", name: "Speedtest prévio de acomodação", desc: "Sempre peça print do teste de velocidade antes de reservar mais de 7 dias.", critical: false },
      { id: "c4", name: "Hotspot portátil ou Starlink Mini para viagens remotas", desc: "Para quem viaja de van ou frequenta praias e montanhas.", critical: false }
    ]
  },
  {
    category: "Hardware & Acessórios Vitais",
    items: [
      { id: "h1", name: "Adaptador universal de tomadas GaN (100W+)", desc: "Carrega laptop, celular e acessórios em uma única tomada compacta.", critical: true },
      { id: "h2", name: "Powerbank potente homologado para aviação (20.000mAh, <100Wh)", desc: "Evita ficar sem bateria em aeroportos, trens ou cafés.", critical: true },
      { id: "h3", name: "Suporte ergonômico dobrável para laptop + teclado/mouse Bluetooth", desc: "Evita dores cervicais em meses de trabalho na estrada.", critical: false },
      { id: "h4", name: "Fones de ouvido com cancelamento ativo de ruído (ANC)", desc: "Imprescindível para chamadas em aeroportos e cafeterias.", critical: true }
    ]
  },
  {
    category: "Segurança Digital & Backup",
    items: [
      { id: "s1", name: "Gerenciador de senhas (1Password ou Bitwarden)", desc: "Nunca repita senhas e mantenha chaves 2FA protegidas.", critical: true },
      { id: "s2", name: "VPN ativa para redes Wi-Fi públicas (ProtonVPN / Mullvad)", desc: "Protege credenciais de bancos e clientes de sniffing em redes abertas.", critical: true },
      { id: "s3", name: "Backup triplo na nuvem (Google Drive / OneDrive / Backblaze)", desc: "Se o laptop for furtado ou molhar, nenhum arquivo de cliente é perdido.", critical: true },
      { id: "s4", name: "Cópia digitalizada autenticada de passaporte, vistos e vacinas", desc: "Armazenada em pasta criptografada offline no smartphone.", critical: true }
    ]
  },
  {
    category: "Finanças Globais & Gestão",
    items: [
      { id: "f1", name: "Contas multimoeda ativas (Wise + Nomad + Revolut)", desc: "Converta moedas com spread reduzido e sem IOF abusivo de cartão de crédito.", critical: true },
      { id: "f2", name: "Seguro saúde internacional de viagem (SafetyWing / Allianz)", desc: "Nunca viaje para outro país sem cobertura para internação e emergência.", critical: true },
      { id: "f3", name: "Contrato padrão de prestação de serviços bilíngue (PT/EN)", desc: "Define prazos de pagamento, regras de entrega e propriedade intelectual.", critical: true },
      { id: "f4", name: "Planilha de fluxo de caixa e reserva de emergência separada", desc: "Mantenha dinheiro de 3 a 6 meses intocado em reserva líquida.", critical: true }
    ]
  }
];

export const TIMEZONE_HUBS = [
  { city: "Lisboa", country: "Portugal", utc: "UTC+0", lagBr: "+3h ou +4h", wifiScore: "9.5/10", costPerMonthBRL: 8500 },
  { city: "Florianópolis", country: "Brasil", utc: "UTC-3", lagBr: "0h", wifiScore: "9.2/10", costPerMonthBRL: 4800 },
  { city: "Medellín", country: "Colômbia", utc: "UTC-5", lagBr: "-2h", wifiScore: "9.0/10", costPerMonthBRL: 5200 },
  { city: "Chiang Mai", country: "Tailândia", utc: "UTC+7", lagBr: "+10h", wifiScore: "9.7/10", costPerMonthBRL: 4200 },
  { city: "Bali (Canggu)", country: "Indonésia", utc: "UTC+8", lagBr: "+11h", wifiScore: "8.9/10", costPerMonthBRL: 5800 },
  { city: "Cidade do Cabo", country: "África do Sul", utc: "UTC+2", lagBr: "+5h", wifiScore: "8.8/10", costPerMonthBRL: 6400 }
];
