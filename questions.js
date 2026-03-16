/**
 * ARQUIVO: questions.js
 * DESCRIÇÃO: 10 perguntas focadas em Uso Permitido de Dados, Penalidades e Estudo de Caso
 */

const questions = [
  {
    question: "Quais tipos de dados são considerados 'autorizados' para uso acadêmico sem expor indivíduos?",
    options: [
      "Nomes completos e CPFs dos pacientes.",
      "Estatísticas agregadas, casos anonimizados e bases públicas (ex: DATASUS).",
      "Fotos de rostos sem tarjas de identificação.",
      "Prontuários originais com diagnósticos visíveis."
    ],
    answer: 1
  },
  {
    question: "O que significa o TCLE no contexto do uso de dados de pacientes?",
    options: [
      "Termo de Controle Logístico e Estrutural.",
      "Tratado de Convivência Legal e Ética.",
      "Termo de Consentimento Livre e Esclarecido.",
      "Tabela de Coleta de Dados Estatísticos."
    ],
    answer: 2
  },
  {
    question: "Qual processo técnico impede a identificação direta ou indireta do titular dos dados, conforme a LGPD?",
    options: [
      "Criptografia simples.",
      "Anonimização.",
      "Arquivamento digital.",
      "Publicação em base pública."
    ],
    answer: 1
  },
  {
    question: "Qual destas informações é estritamente PROIBIDA de divulgar em trabalhos acadêmicos?",
    options: [
      "A média de idade de um grupo de pacientes.",
      "O número total de atendimentos de uma clínica.",
      "Dados genéticos, biométricos ou documentos (CPF, RG).",
      "A cidade onde a pesquisa foi realizada."
    ],
    answer: 2
  },
  {
    question: "Qual é a penalidade administrativa máxima que a ANPD pode aplicar por infrações de dados?",
    options: [
      "R$ 1 milhão.",
      "R$ 10 milhões.",
      "R$ 50 milhões.",
      "R$ 100 milhões."
    ],
    answer: 2
  },
  {
    question: "A detenção de 3 meses a 1 ano por revelar segredo profissional sem justa causa está prevista em qual esfera?",
    options: [
      "Esfera Ética (Conselho Regional).",
      "Esfera Civil (Indenização).",
      "Esfera Criminal (Código Penal, Art. 154).",
      "Esfera Administrativa (ANPD)."
    ],
    answer: 2
  },
  {
    question: "No estudo de caso da estudante Ana (ADS), qual foi a principal falha ética cometida?",
    options: [
      "Ela usou um exemplo fictício em vez de real.",
      "Ela fotografou a ficha clínica mantendo nome e diagnóstico visíveis.",
      "Ela não citou a bibliografia corretamente.",
      "Ela entregou o trabalho fora do prazo."
    ],
    answer: 1
  },
  {
    question: "Qual seria o 'Caminho Ético' correto para a situação da estudante Ana?",
    options: [
      "Publicar a foto original apenas em grupos de mensagens.",
      "Pedir autorização verbal apenas para o professor.",
      "Utilizar bases públicas anonimizadas ou criar casos fictícios baseados na literatura.",
      "Mudar apenas o nome do paciente e manter o diagnóstico visível."
    ],
    answer: 2
  },
  {
    question: "Por que a proteção de dados de saúde ajuda a prevenir a discriminação?",
    options: [
      "Porque impede que os pacientes saibam seus próprios diagnósticos.",
      "Porque evita que dados sejam usados para negar empregos ou seguros.",
      "Porque garante que todos os tratamentos sejam gratuitos.",
      "Porque obriga os médicos a trabalharem mais rápido."
    ],
    answer: 1
  },
  {
    question: "Qual órgão é responsável pela validação ética obrigatória de projetos de pesquisa (Sistema CEP/CONEP)?",
    options: [
      "Conselho Federal de Medicina.",
      "Comitê de Ética em Pesquisa (CEP).",
      "Ministério da Educação.",
      "Agência Nacional de Proteção de Dados."
    ],
    answer: 1
  }
];
