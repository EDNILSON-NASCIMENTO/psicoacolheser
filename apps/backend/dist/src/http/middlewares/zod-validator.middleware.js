"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zodMiddlewareValidator(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const result = schema.safeParse(data);
        if (!result.success) {
            return res.status(400).json({
                error: 'Validation failed',
                details: result.error,
            });
        }
        req[property] = result.data;
        next();
    };
}
exports.default = zodMiddlewareValidator;
