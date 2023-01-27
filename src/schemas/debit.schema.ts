import Joi from 'joi';

const userId = Joi.number().integer();
const debitId = Joi.number().integer();

const getUserDebit = Joi.object({
  userId: userId.required(),
  debitId: debitId.required(),
});

const getAllUserDebits = Joi.object({
  userId: userId.required(),
});

export { getUserDebit, getAllUserDebits };
