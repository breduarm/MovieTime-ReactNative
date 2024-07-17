import User from '../types/entities/User';
import AuthResponse from '../types/responses/AuthResponse';

export const postLogin = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const request: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  };
  const response = await fetch('https://api.example.com/auth/login', request);

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  const json = await response.json();
  return json;
};

export const logout = async (): Promise<void> => {
  // TODO: Perform any necessary cleanup or token invalidation
  return;
};

export const register = async (
  name: string,
  email: string,
  password: string,
): Promise<AuthResponse> => {
  const request: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, email, password}),
  };
  const response = await fetch(
    'https://api.example.com/auth/register',
    request,
  );

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  const json = await response.json();
  return json;
};

export const getUserProfile = async (token: string): Promise<User> => {
  const request: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch('https://api.example.com/auth/profile', request);

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  const json = await response.json();
  return json;
};
