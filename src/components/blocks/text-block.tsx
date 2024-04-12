import lexicalToHTML from '@/utilities/lexical-to-html'
import { TextBlock as TextBlockType } from 'payload-types'
import { Block, Payload } from 'payload/types'

export default async function TextBlockComponent(props: TextBlockType & { payload: Payload }) {
  const html = await lexicalToHTML(props.text, props.payload)

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export const TextBlock: Block = {
  slug: 'Text',
  interfaceName: 'TextBlock',
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
    },
  ],
}
