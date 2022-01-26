export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f1744d5ed95bea8a7098a3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t13qbfia',
                  apiId: 'c10a047a-64b1-43ff-a070-fbe23c09a1a3'
                },
                {
                  buildHookId: '61f1744c667774d30613d2a7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pqsfov9t',
                  apiId: '4b9a3b21-e7f8-4de7-8f33-ea0c2f9b96a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dylanschoenmakers/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pqsfov9t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
