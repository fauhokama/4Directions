export default {
    target: 'static',
  
    head: {
      title: 'website-v2',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: ''},
        {name: 'format-detection', content: 'telephone=no'},
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      ],
    },
  
    css: [
      '@/assets/css/main.css',
    ],
  
    components: true,
  
    buildModules: [
      '@nuxt/postcss8',
    ],
  
    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  };
  