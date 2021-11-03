import config from './config.json';

export const fetchClasses = async () => {
  const response = await fetch(config.api.classes);
  const data = await response.json();
  return data;
};

export const createClass = async (data) => {
  const response = await fetch(config.api.classes, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.status;
};
