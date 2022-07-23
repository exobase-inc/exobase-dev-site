import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

export const documentationNav = {
  'Getting Started': [
    pages['getting-started'],
    {
      title: 'Installation',
      href: '/docs/installation',
      match: /^\/docs\/installation/,
    },
  ],
}
