export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public errors?: Record<string, string[]>;

  constructor(
    message: string,
    statusCode: number = 500,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; 
    this.errors = errors;
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export const notFound = (msg = 'not found') =>
  new AppError(msg, 404);

export const unauthorized = (msg = 'not allowed') =>
  new AppError(msg, 401);

export const forbidden = (msg = 'Entry is prohibited') =>
  new AppError(msg, 403);

export const badRequest = (msg: string, errors?: Record<string, string[]>) =>
  new AppError(msg, 400, errors);