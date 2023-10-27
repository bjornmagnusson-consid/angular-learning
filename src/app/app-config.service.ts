import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Config {
  url: string;
}

export interface IAppConfig {
  load: () => Promise<void>;
}

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  apiUrl?: string;

  constructor(private httpClient: HttpClient) { }

  public load(): Promise<void> {
    return this.httpClient
      .get<Config>('./assets/config.json')
      .toPromise()
      .then(config => {
        this.apiUrl = config?.url;
        console.log(`Config found, using apiUrl ${this.apiUrl}`)
      })
      .catch(error => {
        console.warn(`Config not found, using apiUrl ${this.apiUrl}`)
      });
  }

  getApiUrl(path: string) : string {
    const apiUrl = this.apiUrl || '';
    const apiUrlAndPath = `${apiUrl}${path}`
    console.log(`Using API @ ${apiUrlAndPath}`)
    return apiUrlAndPath
  }
}

export function initConfig(config: AppConfig): () => Promise<void> {
  return () => config.load();
}