import { useState } from 'react';
import {
    getUserProfile,
    logout,
    postLogin,
    register,
} from '../services/AuthService';
import User from '../types/entities/User';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await postLogin(email, password);
      setToken(response.token);
      setUser(response.user);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('There was an error trying to login');
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string,
  ) => {
    setLoading(true);
    try {
      const response = await register(name, email, password);
      setToken(response.token);
      setUser(response.user);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('There was an error trying to register the user');
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    setToken(null);
    logout();
  };

  const fetchUserProfile = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const userProfile = await getUserProfile(token);
      setUser(userProfile);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('There was an error trying to fetch the user profile');
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    token,
    authError: error,
    authLoading: loading,
    loginUser,
    registerUser,
    logoutUser,
    fetchUserProfile,
  };
};

export default useAuth;
