export const OK = (message, data = null) => {
    return {
        name: 'OK',
        message: message,
        status: 200,
        data: data,
    };
};
export const BAD_REQUEST = (message, data = null) => {
    return {
        name: 'BAD REQUEST',
        message: message,
        status: 400,
        data: data,
    };
};
export const CREATED = (message, data = null) => {
    return {
        name: 'CREATED',
        message: message,
        status: 201,
        data: data,
    };
};
export const NOT_FOUND = (message, data = null) => {
    return {
        name: 'NOT FOUND',
        message: message,
        status: 404,
        data: data,
    };
};
