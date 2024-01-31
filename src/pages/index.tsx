import PageLayout from "../../components/Layout/pageLayout";
import Hero from "../../components/Hero.main";
import createSchool from "../../functions/artSchool/addNewSchool";
import IArtSchool from "../../interfaces/artSchoolInterface";
import updateSchool from "../../functions/artSchool/updateSchool";


export default function Home() {

  const getData = async () => {
    // const data = await updateSchool('rBqLbIjQzNAo8ygOSO2Q', {
    //   email: "DN Art Academy",
    // } as Partial<IArtSchool>)
    // console.log(data);

  }
  return (
    <PageLayout>
      <Hero />
      <button onClick={getData} className="btn-brown w-fit mx-auto">get Data</button>
    </PageLayout>
  );
}
