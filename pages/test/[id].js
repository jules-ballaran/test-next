import { useRouter } from "next/router"
import SEO from "../../src/seo"

const Test = () => {
  const router = useRouter()
  const { id } = router.query

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

export default Test
