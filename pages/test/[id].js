import { useRouter } from "next/router"
import SEO from "../../src/seo"

const Test = ({ img }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <SEO
        description="test"
        title="test"
        siteTitle="test"
        image={id === "1" ? img.t2 : img.t1}
      />
      <p>Test: {id}</p>
      <img src={id === "1" ? img.t2 : img.t1} alt="me" />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {
      img: {
        t1:
          "https://s3.amazonaws.com/dev.landsbe.boom.ai/static/media/EVGA_Z15_RGB_Gaming_Keyboard_RGB_Backlit_LED_Hotswappable_Mechanical_Kailh_Speed_Sliver_Switches_Linear_.jpeg",
        t2:
          "https://s3.amazonaws.com/dev.landsbe.boom.ai/static/media/78d9414c-edcb-4aab-873c-456ee606e859/profileImg.jpeg",
      },
    },
  }
}

export default Test
