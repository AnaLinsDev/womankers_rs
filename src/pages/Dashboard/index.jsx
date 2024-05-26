import Card from "../../components/Dashboard/CardComponent/index";

export default function Dashboard() {

  const hasWindow = typeof window !== 'undefined';

  function getMinWifht() {
    const width = hasWindow ? window.innerWidth : null;
    return width < 620 ? 400 : 200
  }

  return (
    <div>
      <h2 className="title">Dashboard</h2>

      <div className="flex_wrap ma-40 center">
        <Card width={400} height={200}></Card>

        <Card width={400} height={200}></Card>

        <Card width={getMinWifht()} height={200}></Card>

        <Card width={getMinWifht()} height={200}></Card>

        <Card width={400} height={200}></Card>

        <Card width={400} height={200}></Card>

        <Card width={400} height={200}></Card>

        <Card width={400} height={200}></Card>

        <Card width={getMinWifht()} height={200}></Card>
      </div>
    </div>
  );
}
