export const types = {
  CAN_I_CALL_YOU_THAT: 'CAN_I_CALL_YOU_THAT',
  WHERE_ARE_YOU_GOING: 'WHERE_ARE_YOU_GOING',
  MEET_YOU_BETTER: 'MEET_YOU_BETTER', 
  OLD: 'OLD',
  GENDER: 'GENDER',
  OTHER_GENDER: 'OTHER_GENDER',
  TICKET: 'TICKET',
  TICKET_IS_REQUIRED: 'TICKET_IS_REQUIRED',
  STATE: 'STATE',
  CITY: 'CITY',
  COLOR: 'COLOR',
  OTHER_COLOR: 'OTHER_COLOR',
  HAS_DISABILITY: 'HAS_DISABILITY',
  DISABILITY: 'DISABILITY',
  TERMS: 'TERMS',
  JUMP: 'JUMP',
};

export const questions = {
  CAN_I_CALL_YOU_THAT: [
    'Olá {{displayName}}! Posso te chamar assim?',
  ],
  WHERE_ARE_YOU_GOING: [
    'Olá {{displayName}}! Eu sou a Nômade e vou te ajudar na sua jornada pela Oasi.',
    'Para onde você está indo?',
  ],
  TICKET: ['E já tem ingresso?'],
  MEET_YOU_BETTER: ['Ingresso para {{event}} aceito!. \nPosso te conhecer melhor?',],
  TICKET_IS_REQUIRED: ['Para entrar no nosso mundo, você precisa de um ingresso! Veja nossa lista de eventos e compre um ingresso.',],
  OLD: ['Qual é a sua idade?'],
  GENDER: ['E o seu gênero?'],
  OTHER_GENDER: ['Qual?'],
  STATE: ['Qual seu estado?'],
  CITY: ['E sua cidade?'],
  COLOR: ['Qual cor você se autodeclara?'],
  OTHER_COLOR: ['Outra qual?'],
  HAS_DISABILITY: ['Você é uma pessoa com deficiência?'],
  DISABILITY: ['Qual é a deficiência?'],
  TERMS: [
    'Pronto! Sua jornada na Oasi está apenas começando...',
    'Temos algumas regras que precisam ser assinadas antes de você prosseguir. \n Você aceita os termos de uso da plataforma?',
  ],
  JUMP: [
    'Que bom que você veio! A sua presença será fundamental para germinar um mundo novo. É o primeiro passo.',
    'Você só precisa dar um salto de fé...',
  ],
};

