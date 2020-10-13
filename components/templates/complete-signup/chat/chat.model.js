export const types = {
  WHERE_ARE_YOU_GOING: 'WHERE_ARE_YOU_GOING',
  MEET_YOU_BETTER: 'MEET_YOU_BETTER', 
  OLD: 'OLD',
  GENDER: 'GENDER',
  TICKET: 'TICKET',
  TICKET_IS_REQUIRED: 'TICKET_IS_REQUIRED',
};

export const questions = {
  WHERE_ARE_YOU_GOING: [
    'Olá {{username}}! Eu sou a Nômade e vou te ajudar na sua jornada pela Oasi.',
    'Para onde você está indo?',
  ],
  TICKET: ['E já tem ingresso?'],
  MEET_YOU_BETTER: [
    'Ingresso para {{event}} aceito!',
    'Posso te conhecer melhor?',
  ],
  TICKET_IS_REQUIRED: [
    'Para entrar no nosso mundo, você precisa de um ingresso! Veja nossa lista de eventos e compre um ingresso.',
  ],
  OLD: ['Qual é a sua idade?'],
  GENDER: ['E o seu gênero?'],
};

