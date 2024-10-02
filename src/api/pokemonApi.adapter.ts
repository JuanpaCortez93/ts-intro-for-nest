import axios from "axios";

export interface IPokemonApiResponseAdapter {
  get<T>(url: string): Promise<T>;
  post<T>(url: string): Promise<T>;
  put<T>(url: string): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export class PokemonApiAdapter implements IPokemonApiResponseAdapter {
  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }

  async post<T>(url: string) {
    const { data } = await axios.post<T>(url);
    return data;
  }

  async put<T>(url: string) {
    const { data } = await axios.put<T>(url);
    return data;
  }

  async delete<T>(url: string) {
    const { data } = await axios.delete<T>(url);
    return data;
  }
}
