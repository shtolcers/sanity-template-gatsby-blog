export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '<#<deployments.studio.providerInfo.buildHookId>#>',
                  name: 'Content Studio',
                  siteId: '<#<deployments.studio.providerInfo.siteId>#>'
                },
                {
                  buildHookId: '<#<deployments.web.providerInfo.buildHookId>#>',
                  name: 'Blog Website',
                  siteId: '<#<deployments.web.providerInfo.siteId>#>'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/<#<repository.owner>#>/<#<repository.name>#>',
            category: 'Code'
          },
          { title: 'Frontend', value: '<#<deployments.web.url>#>', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
