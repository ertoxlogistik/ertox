export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [{ title }, { name: 'description', content: description }, { name: 'robots', content: 'index, follow' }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: `https://ertox-logistik.de${path}` }, { name: 'twitter:card', content: 'summary_large_image' }],
    links: [{ rel: 'canonical', href: `https://ertox-logistik.de${path}` }],
  };
}