export interface Mapper<T, P, K> {

  toDebitDTO: (param1: T, params2: P) => K;
}
