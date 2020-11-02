import moment from 'moment';

export const getMonth = (month) => {
  const monthName = () => ({
    0: 'Janeiro',
    1: 'Fevereiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro',
  });

  return monthName()[month];
};

export const getMonthAbbreviated = (month) => {
  const monthName = () => ({
    0: 'jan',
    1: 'fev',
    2: 'mar',
    3: 'abr',
    4: 'mai',
    5: 'jun',
    6: 'jul',
    7: 'ago',
    8: 'set',
    9: 'out',
    10: 'nov',
    11: 'dez',
  });

  return monthName()[month];
};

export const stringToDate = (dateString, locale = 'BRL', separator = '/') => {
  const splited = dateString.split(separator);
  switch (locale) {
    case 'BRL': {
      // YYYY MM DD
      return new Date(Date.UTC(splited[2], splited[1], splited[0], 0, 0, 0));
    }
    default:
      // BRL default
      return new Date(Date.UTC(splited[2], splited[1], splited[0], 0, 0, 0));
  }
};

export const dateToLabel = (startDate, endDate, format = null) => {
  const start = moment(startDate, format).utc();
  const end = moment(endDate, format).utc();

  let label = '';
  if (start.dayOfYear() === end.dayOfYear()) {
    label = `${start.date()} de ${getMonth(start.month())}`;
  } else if (start.month() === end.month()) {
    label = `${start.date()} a ${end.date()} de ${getMonth(start.month())}`;
  } else {
    label = `${start.date()} de
    ${start.getMonth(start.month())} a ${end.date()} de ${getMonth(
      end.month()
    )}`;
  }
  // if same start and end hour, add hour
  if (start.hours() === end.hours())
    label = `${label} - ${start.hours()}:${String(start.minutes()).padStart(
      2,
      '0'
    )}`;

  return label;
};
