import { Request, Response } from 'express';
import { CreateMessageService } from '@services/CreateMessageService';

class CreateMessageController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { message } = request.body;
    const { id: user_id } = request.user;

    const service = new CreateMessageService();

    try {
      const result = await service.execute(message, user_id);

      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateMessageController };
