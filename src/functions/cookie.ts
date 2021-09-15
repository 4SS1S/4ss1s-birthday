import Cookies, { CookieAttributes } from 'js-cookie'

/**
 *
 * @description salva um cookie no navegador
 *
 * @param key nome da chave a ser salva
 * @param value valor do cookie
 * @param options opções do cookie
 */
export const cookie = (
  key: string,
  value: string,
  options?: CookieAttributes
): void => {
  Cookies.set(key, value, {
    ...options,
    expires: 1,
    secure: process.env.NODE_ENV === 'production',
  })
}
