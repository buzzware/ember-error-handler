import {ExtendableError} from 'ts-error/lib/es';

class EmberErrorHandlerError extends ExtendableError {
    constructor(message) {
        super(message || 'Error in ember-error-handler');
    }
}

export { EmberErrorHandlerError };
