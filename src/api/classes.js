import config from './config.json';

export const fetchClasses = async () => {
  const response = await fetch(config.api.classes);
  const data = await response.json();
  return data;
};
