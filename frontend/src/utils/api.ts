// src/utils/api.ts
import axios from "axios";

const API_BASE = "https://double-j-gulf-services.onrender.com";

export const api = axios.create({
  baseURL: API_BASE,
  withCredentials: false, // set true if you later use cookies
});

// ---------- AUTH ----------

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const login = async (data: LoginPayload) => {
  const res = await api.post("/api/auth/login", data);
  return res.data; // { token, user }
};

export const register = async (data: RegisterPayload) => {
  const res = await api.post("/api/auth/register", data);
  return res.data;
};

// ---------- ORDERS ----------

export interface OrderPayload {
  serviceType: string;
  description?: string;
}

export const createOrder = async (token: string, data: OrderPayload) => {
  const res = await api.post("/api/orders", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getMyOrders = async (token: string) => {
  const res = await api.get("/api/orders/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// ---------- ADMIN ----------

export const getAllOrders = async (token: string) => {
  const res = await api.get("/api/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const updateOrderStatus = async (
  token: string,
  orderId: string,
  status: string
) => {
  const res = await api.put(
    `/api/orders/${orderId}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
