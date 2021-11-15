import Layout from '../../components/Layout'
import {useRouter} from 'next/router'


function EventPage() {
  const router = useRouter();
  console.log(router)

  return (
    <Layout title={router.query.slug}>
      <h1>My Event</h1>
    </Layout>
  )
}

export default EventPage
