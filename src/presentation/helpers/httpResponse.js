const MissingParamError = require('./missingParamsErrors.js')

module.exports = class HttpResponse {
  static badRequest (paramName) { return ({ body: new MissingParamError(paramName), statusCode: 400 }) }
  static internalServerError (paramName) { return ({ body: new MissingParamError(paramName), statusCode: 500 }) }
}
