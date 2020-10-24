import { useRouter } from 'next/router'

import { mainRoutes } from '@lib/etc'

export function useBackground() {
  const { route } = useRouter()
  return mainRoutes.includes(route) ? 'homeBg' : 'white'
}
