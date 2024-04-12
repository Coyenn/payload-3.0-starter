import ImageBlockComponent from '@/components/blocks/image-block'
import TextBlockComponent from '@/components/blocks/text-block'
import { getPayload } from 'payload'
import { Page } from 'payload-types'
import configPromise from '@payload-config'

export interface PageContentProps {
  content?: Page['content']
}

export default async function PageContent(props: PageContentProps) {
  const { content } = props
  const payload = await getPayload({
    config: configPromise,
  })

  return (
    <>
      {content?.map((block) => {
        switch (block.blockType) {
          case 'Image':
            return <ImageBlockComponent {...block} key={block.id} />
          case 'Text':
            return <TextBlockComponent {...block} payload={payload} key={block.id} />
          default:
            return null
        }
      })}
    </>
  )
}
