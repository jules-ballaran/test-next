import { useRouter } from "next/router"
import SEO from "../../src/seo"

const Test = ({ id }) => {
  return (
    <div>
      <SEO
        description="test"
        title="test"
        siteTitle="test"
        image={id === "1" ? "/assets/unnamed.jpg" : "/assets/void2.jpg"}
      />
      <p>Test: {id}</p>
      <img
        src={id === "1" ? "/assets/unnamed.jpg" : "/assets/void2.jpg"}
        alt="me"
      />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const { id } = await useRouter()

  // Pass data to the page via props
  return { props: { id } }
}

export default Test
