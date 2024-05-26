import InfoComponent from'../../components/Home/InfoComponent/index'
import RegisterComponent from'../../components/Home/RegisterComponent/index'
import TeamComponent from'../../components/Home/TeamComponent/index'

export default function Home() {
  return (
    <>
      <RegisterComponent />

      <InfoComponent />

      <TeamComponent />
    </>
  );
}