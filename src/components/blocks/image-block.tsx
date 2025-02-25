import Image from 'next/image'
import { ImageBlock as ImageBlockType, Media } from 'payload-types'
import { Block } from 'payload/types'

export default function ImageBlockComponent(props: ImageBlockType) {
  const image = props.image as Media

  return (
    <Image
      src={image?.url ?? ''}
      alt={image?.alt ?? 'No alt text provided'}
      width={image?.width ?? 0}
      height={image?.height ?? 0}
    />
  )
}

export const ImageBlock: Block = {
  slug: 'Image',
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
}
