import type { Blog } from '~/types/blog'

export const useBlogs = () => {
  const api = useApi()

  return useAsyncData('blogs', () => api<Blog[]>('/blogs'))
}
