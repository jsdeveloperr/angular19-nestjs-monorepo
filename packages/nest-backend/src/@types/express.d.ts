import { User } from '../users/user.entity';

declare global {
  namespace Express {
    interface User extends User {}
  }
}
