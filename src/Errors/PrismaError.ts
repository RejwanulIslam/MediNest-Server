import { Prisma } from '../../generated/prisma/client';
import { AppError } from './AppError';

export function handlePrismaError(
  err:any
): AppError {
  switch (err.code) {
    case 'P2002': {
      const field = (err.meta?.target as string[])?.join(', ');
      return new AppError(
        `This ${field} Already in use`,
        409
      );
    }
    case 'P2025':
      // Record not found
      return new AppError('Information not found', 404);

    case 'P2003':
      // Foreign key constraint
      return new AppError('Related information does not exist', 400);

    case 'P2014':
      // Required relation violation
      return new AppError('Missed the necessary relationship', 400);

    default:
      return new AppError('There was a database problem.', 500);
  }
}