import { Message, User } from '.prisma/client';
import { io } from '../app';
import { prismaClient } from '../prisma';

class CreateMessageService {
  public async execute(
    text: string,
    user_id: string,
  ): Promise<
    Message & {
      user: User;
    }
  > {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit('new_message', infoWS);

    return message;
  }
}

export { CreateMessageService };
