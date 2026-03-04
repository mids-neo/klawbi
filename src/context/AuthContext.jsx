import { createContext, useState, useEffect, useContext } from 'react'
import { defaultUser } from '../data/mockUser'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // On mount, restore session from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('klawbi_user')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser(parsed)
        setIsAuthenticated(true)
      } catch {
        localStorage.removeItem('klawbi_user')
      }
    }
  }, [])

  const login = (email, password) => {
    const newUser = {
      ...defaultUser,
      email,
      plan: 'pro',
      joinedAt: '2026-02-15'
    }
    localStorage.setItem('klawbi_user', JSON.stringify(newUser))
    setUser(newUser)
    setIsAuthenticated(true)
  }

  const signup = (name, email, password, plan) => {
    const newUser = {
      id: 1,
      name,
      email,
      plan: plan || 'free',
      joinedAt: new Date().toISOString().split('T')[0]
    }
    localStorage.setItem('klawbi_user', JSON.stringify(newUser))
    setUser(newUser)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('klawbi_user')
    setUser(null)
    setIsAuthenticated(false)
  }

  const updateUser = (updates) => {
    setUser((prev) => {
      const updated = { ...prev, ...updates }
      localStorage.setItem('klawbi_user', JSON.stringify(updated))
      return updated
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
