import { Message, User } from '.prisma/client';
import { prismaClient } from '../prisma';

class GetLast3MessagesService {
  public async execute(): Promise<
    (Message & {
      user: User;
    })[]
  > {
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export { GetLast3MessagesService };
