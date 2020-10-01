export const API_OASI = 'API_OASI';

export const API_IDA = 'API_IDA';

const routes = {};

routes[API_OASI] = {
  login: () => ({ url: '/todos/1', data: {} }),
  logoff: (params) => ({
    url: `/todos/1`,
    data: { todo: 1, name: 'logoff', ...params.data },
  }),
};

routes[API_IDA] = {
  login: () => ({ url: '/todos/1', data: {} }),
  logoff: (params) => ({
    url: `/todos/1`,
    data: { todo: 1, name: 'logoff', ...params.data },
  }),
};

const RequestBuilder = (api, path, params) => {
  try {
    return routes[api][path](params);
  } catch (e) {
    e.message = `Caminho de rota '${path}' não foi encontrado no objeto routes`;
    throw e;
  }
};

export default RequestBuilder;
