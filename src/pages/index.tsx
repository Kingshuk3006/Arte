import PageLayout from "../../components/Layout/pageLayout";
import Hero from "../../components/Hero.main";
import getProductById from "../../functions/product/getProductById";


export default function Home() {

  const getData = async () => {
    const data = await getProductById('OMg1CQ11niK0GDah7OBI')
    console.log(data);

  }
  return (
    <PageLayout>
      <Hero />
      <button onClick={getData}>get Data</button>
    </PageLayout>
  );
}
