// VidyaSetu Authentication & Session Service
import { sampleUsers } from '../data/sample-data.js';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';

class AuthService {
  constructor() {
    this.currentUser = this.loadInitialUser();
    this.listeners = new Set();
  }

  loadInitialUser() {
    const saved = localStorage.getItem('vidyasetu_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    // Default to student Aarav
    return sampleUsers[0];
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getRole() {
    return this.currentUser?.role || 'student';
  }

  isTeacher() {
    return this.getRole() === 'teacher' || this.getRole() === 'admin';
  }

  isAdmin() {
    return this.getRole() === 'admin';
  }

  switchRole(roleName) {
    const matched = sampleUsers.find(u => u.role === roleName) || {
      id: `user-${roleName}`,
      role: roleName,
      name: `${roleName.charAt(0).toUpperCase() + roleName.slice(1)} User`,
      stars: 20
    };
    this.currentUser = matched;
    localStorage.setItem('vidyasetu_user', JSON.stringify(matched));
    this.notify();
    return matched;
  }

  setGradeLevel(grade) {
    if (this.currentUser && this.currentUser.role === 'student') {
      this.currentUser.grade_level = Number(grade);
      localStorage.setItem('vidyasetu_user', JSON.stringify(this.currentUser));
      this.notify();
    }
  }

  addStars(count) {
    if (this.currentUser) {
      this.currentUser.stars = (this.currentUser.stars || 0) + count;
      localStorage.setItem('vidyasetu_user', JSON.stringify(this.currentUser));
      this.notify();
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this.currentUser);
      } catch (err) {
        console.error('Auth listener error:', err);
      }
    }
  }
}

export const authService = new AuthService();
