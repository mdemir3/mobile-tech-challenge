import type { Browser } from 'webdriverio'
import type { ExpectStatic } from 'expect-webdriverio'

declare global {
  const browser: Browser
  const expect: ExpectStatic
}

export {}
