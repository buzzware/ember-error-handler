//import {defineError} from 'ember-exex/error';

const EmberErrorHandlerError = defineError({
    name: 'ErrorHandlerError',
    message: 'Error in ember-error-handler'
});

EmberErrorHandlerError.prototype = Object.create(Error.prototype);
EmberErrorHandlerError.prototype.constructor = EmberErrorHandlerError;
EmberErrorHandlerError.prototype.superclass = Error;

export EmberErrorHandlerError;
