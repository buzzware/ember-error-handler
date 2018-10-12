import {ExtendableError} from 'ts-error/error';

class EmberErrorHandlerError extends ExtendableError {
    constructor(message) {
        super(message || 'Error in ember-error-handler');
    }
}

export { EmberErrorHandlerError };
