import store from '../store'

export default function dateFilter(value, format = "date") {
  const option = {};
  if (format.includes("date")) {
    option.day = "2-digit";
    option.month = "long";
    option.year = "numeric";
  }
  if (format.includes("time")) {
    option.hour = "2-digit";
    option.minute = "2-digit";
    option.second = "2-digit";
  }


  const locale = store.getters.info.locale || 'ru-RU'
  return new Intl.DateTimeFormat(locale, option).format(new Date(value));
}
