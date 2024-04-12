import PageContent from '@/components/page-content'
import pageData from '@/utilities/page-data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug?: string
  }
}

export default async function Page(props: PageProps) {
  const page = await pageData(props.params.slug || '/')

  if (!pageData) return notFound()

  return (
    <>
      <h1>{page.title}</h1>
      <PageContent content={page.content} />
    </>
  )
}
