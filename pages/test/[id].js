import { useRouter } from "next/router"
import SEO from "../../src/seo"

const Test = ({ img }) => {
  const { id } = useRouter()
  return (
    <div>
      <SEO
        description="test"
        title="test"
        siteTitle="test"
        image={id === "1" ? img.t1 : img.t2}
      />
      <p>Test: {id}</p>
      <img src={id === "1" ? img.t1 : img.t2} alt="me" />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {
      img: {
        t1: "/assets/unnamed.jpg",
        t2: "/assets/void2.jpg",
      },
    },
  }
}

export default Test
