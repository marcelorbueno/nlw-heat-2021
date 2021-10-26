import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '@shared/errors/AppError';

interface ITokenPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('Token inválido', 401, 'token.invalid');
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      process.env.JWT_SECRET,
    ) as ITokenPayload;

    request.user = {
      id: user_id,
    };

    return next();
  } catch (err) {
    throw new AppError('Token expirado', 401, 'token.expired');
  }
}
