import User from '../entities/User';

type AuthResponse = {
  token: string;
  user: User;
};

export default AuthResponse;
