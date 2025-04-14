import h from 'hastscript'
import { Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export const remarkCustomDirective: Plugin<[], Root> = () => {
  return (tree) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree, (node: any) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        if (node.name === 'affiliate-message') {
          node.attributes.class = 'message message-affiliate'

          const data = node.data || (node.data = {})
          const tagName = node.type === 'textDirective' ? 'span' : 'div'

          data.hName = tagName
          data.hProperties = h(tagName, node.attributes || {}).properties
        } else if (node.name === 'amazon-link') {
          node.attributes.class = 'flex flex-wrap justify-center items-end'
          const data = node.data || (node.data = {})
          const tagName = node.type === 'textDirective' ? 'span' : 'div'

          data.hName = tagName
          data.hProperties = h(tagName, node.attributes || {}).properties

          const cards = node.children[0].children
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((child: any) => child.type === 'link')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((child: any) => {
              const amazonUrl = child.url
              const imagePath = child.children[0].value

              return h(
                'div',
                {
                  class:
                    'card w-60 md:w-48 xl:w-60 bg-base-300 shadow-xl mx-2 xl:mx-3 my-4',
                },
                [
                  h('img', {
                    src: imagePath,
                    alt: 'Amazon',
                    class: 'px-4 pt-2 my-2 rounded-xl',
                  }),
                  h(
                    'div',
                    {
                      class: 'card-body items-center text-center py-4',
                    },
                    [
                      h(
                        'div',
                        {
                          class: 'card-actions',
                        },
                        [
                          h(
                            'a',
                            {
                              href: amazonUrl,
                              class: 'btn btn-md btn-accent rounded-xl',
                            },
                            'Amazon'
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              )
            })

          data.hChildren = cards
        }
      }
    })
  }
}
