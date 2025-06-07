export const routes = {
  home: '/',
  register: '/register',
  about: '/about',
  contact: '/contact',
  catalog: {
    root: '/catalog',
    bySlug: (slug: string) => `/catalog/${slug}`,
  },
  product: {
    root: '/product',
    bySlug: (slug: string) => `/product/${slug}`,
  },
  cart: '/cart',
  favorites: '/favorites',
  terms_and_conditions: '/terms-and-conditions',
  cookies_policy: '/cookies-policy',
  privacy_policy: '/privacy-policy',
  profile: {
    root: '/profile',
    edit: '/profile/edit',
    orders: '/profile/orders',
    auth: '/profile/auth',
    organization: '/profile/organization',
    offer: {
      root: '/profile/offer',
      create: '/profile/offer/create',
    },
  },
}