import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class updateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<void> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new Error('Only authenticated users can change avatar.');
    }
  }
}

export default updateUserAvatarService;
