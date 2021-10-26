import { Request, Response } from 'express';
import { ProfileUserService } from '@services/ProfileUserService';

class ProfileUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const service = new ProfileUserService();

    const result = await service.execute(user_id);

    return response.json(result);
  }
}

export { ProfileUserController };
