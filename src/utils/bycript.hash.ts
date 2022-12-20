import { compare } from 'bcryptjs';

export const verifyHandler = async (withOutHash: string, withHash: string) => {
  const isCorrect = await compare(withOutHash, withHash);
  return isCorrect;
};
