import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roleSubject = new BehaviorSubject<string>('public');
  role$ = this.roleSubject.asObservable();

  private fullNameSubject = new BehaviorSubject<string>('');
  fullName$ = this.fullNameSubject.asObservable();

  setRole(newRole: string) {
    this.roleSubject.next(newRole);
    localStorage.setItem('role', newRole);
  }

  getRole(): string {
    return this.roleSubject.value;
  }

  setFullName(name: string) {
    this.fullNameSubject.next(name);
    localStorage.setItem('fullName', name);
  }

  getFullName(): string {
    return this.fullNameSubject.value;
  }

  logout() {
    this.roleSubject.next('public');
    this.fullNameSubject.next('');
    localStorage.removeItem('role');
    localStorage.removeItem('fullName');
  }
}