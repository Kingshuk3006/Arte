import PageLayout from "../../components/Layout/pageLayout";
import Hero from "../../components/Hero.main";
import getProductById from "../../functions/product/getProductById";
import createOrder from "../../functions/order/createOrder";
import { IOrder } from "../../interfaces/userInterface";
import updateOrder from "../../functions/order/updateOrder";


export default function Home() {

  const getData = async () => {
    const data = await updateOrder('sdcsdmc', {
      status: 'Cancelled',
    }, 'DZpIadsuyb95lOlX54c9')
    console.log(data);

  }
  return (
    <PageLayout>
      <Hero />
      <button onClick={getData}>get Data</button>
    </PageLayout>
  );
}
