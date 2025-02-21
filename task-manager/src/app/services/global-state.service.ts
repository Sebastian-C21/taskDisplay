import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto lo hace global
})
export class GlobalStateService {
  // Variables globales aquí
  private variables: Map<string, any> = new Map();

  // Guardar una variable
  set(key: string, value: any): void {
    this.variables.set(key, value);
  }

  // Obtener una variable
  get(key: string): any {
    return this.variables.get(key);
  }

  // Comprobar si existe una variable
  has(key: string): boolean {
    return this.variables.has(key);
  }

  // Eliminar una variable
  delete(key: string): void {
    this.variables.delete(key);
  }

  // Limpiar todas las variables
  clear(): void {
    this.variables.clear();
  }
}
