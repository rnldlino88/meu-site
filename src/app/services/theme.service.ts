import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isDark = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this._isDark.asObservable();

  get isDarkMode(): boolean {
    return this._isDark.value;
  }

  toggle(): void {
    const next = !this._isDark.value;
    this._isDark.next(next);
    document.body.classList.toggle('dark-theme', next);
    document.body.classList.toggle('light-theme', !next);
  }

  /** Inicializa a classe no body na primeira carga */
  init(): void {
    document.body.classList.add('light-theme');
  }
}
