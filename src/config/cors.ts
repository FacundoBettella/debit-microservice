 /* Dominios permitidos */
 const whiteList: Array<String> = [
  'http://localhost:3000',
];

export const corsOptions = {
  origin: (origin: any, callback: CallableFunction) => {
    if (whiteList.includes(origin)) {
      /* 1arg:error(null)  , 2arg: acceso(permitido)*/
      callback(null, true);
    } else {
      callback(new Error('Acceso No Permitido'));
    }
  },
};
