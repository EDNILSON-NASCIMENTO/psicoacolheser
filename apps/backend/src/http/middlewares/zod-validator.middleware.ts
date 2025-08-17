import { Request, Response, NextFunction } from 'express'
import { ZodType } from 'zod'

interface ValidatedRequest extends Request {
  validatedQuery?: any
}

function zodMiddlewareValidator<T>(schema: ZodType<T>, property: 'body' | 'params' | 'query') {
  return (req: ValidatedRequest, res: Response, next: NextFunction) => {
    const data = req[property]
    const result = schema.safeParse(data)

    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error,
      })
    }

    if(property === 'query'){
      req.validatedQuery = result.data
    } else {
      req[property] = result.data
    }

    next()
  }
}

export default zodMiddlewareValidator
