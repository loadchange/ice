import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  router: {
    type: 'browser',
  },
  request: {
    // 拦截器
    interceptors: {
      request: {
        onConfig: (config) => {
          const key = 'interceptors-request-count';
          const count = Number(localStorage.getItem(key)) || 0;
          console.log(key, '=>', count);
          localStorage.setItem(key, String(count + 1));
          return config;
        },
        onError: (error) => {
          return Promise.reject(error);
        },
      },
    },
  },
};

runApp(appConfig);
