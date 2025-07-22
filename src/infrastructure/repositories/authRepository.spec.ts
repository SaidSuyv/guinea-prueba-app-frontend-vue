import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AuthRepositoryImpl } from './authRepository'
import type { LoginRequestEntity } from '@/domain/entities/auth/loginRequestEntity'
import type { RegisterEntity } from '@/domain/entities/register/registerEntity'

// Mocks de las funciones HTTP
vi.mock('@/infrastructure/http/auth', () => ({
  login: vi.fn(),
  logout: vi.fn(),
}))

vi.mock('@/infrastructure/http/user/register', () => ({
  register: vi.fn(),
}))

// Importamos los mocks ya creados
import { login, logout } from '@/infrastructure/http/auth'
import { register } from '@/infrastructure/http/user/register'

describe('AuthRepositoryImpl', () => {
  let repo: AuthRepositoryImpl

  beforeEach(() => {
    repo = new AuthRepositoryImpl()
    vi.clearAllMocks()
  })

  it('login() devuelve respuesta exitosa', async () => {
    const credentials: LoginRequestEntity = {
      username: 'john',
      password: '123456',
    }

    const mockResponse = {
      success: true,
      token: 'abc123',
      user: { id: 1, name: 'Test User' },
    }

    ;(login as any).mockResolvedValue(mockResponse)

    const result = await repo.login(credentials)
    expect(result).toEqual(mockResponse)
    expect(login).toHaveBeenCalledWith(credentials)
  })

  it('login() lanza error si falla', async () => {
    (login as any).mockResolvedValue({ success: false })

    await expect(repo.login({ username: '', password: '' }))
      .rejects
      .toThrow('Login failed')
  })

  it('logout() devuelve respuesta', async () => {
    (logout as any).mockResolvedValue(true)

    const result = await repo.logout()
    expect(result).toBe(true)
    expect(logout).toHaveBeenCalled()
  })

  it('register() devuelve respuesta exitosa', async () => {
    const userData: RegisterEntity = {
      name: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      gender: 'M',
      birthdate: '2000-01-01',
      username: 'john',
      password: 'secure123',
    }

    const mockResponse = {
      success: true,
      message: 'Registered successfully',
    }

    ;(register as any).mockResolvedValue(mockResponse)

    const result = await repo.register(userData)
    expect(result).toEqual(mockResponse)
    expect(register).toHaveBeenCalledWith(userData)
  })

  it('register() lanza error si falla', async () => {
    (register as any).mockResolvedValue({ success: false })

    await expect(repo.register({} as RegisterEntity))
      .rejects
      .toThrow('Registration failed')
  })
})
