import Joi from "joi";

export const newUserValidation = (req, res, next) => {
  try {
    const schema = Joi.object({
      fName: Joi.string().required(),
      lName: Joi.string().required(),
      phone: Joi.string().allow("", null),
      email: Joi.string().email({ minDomainSegments: 2 }),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    error
      ? res.json({
          status: "error",
          message: error.message,
        })
      : next();
  } catch (error) {
    next(error);
  }
};
