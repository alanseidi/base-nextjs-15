'use server';
import { cookies } from 'next/headers';

export const createCookie = async (name: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(name, value);
};

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const deleteCookie = async (name: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(name);
};
