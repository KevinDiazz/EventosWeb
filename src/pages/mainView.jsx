import TopEvents from "../components/topEvents";
import Header from "../components/header";
import { ListOfCategories } from "../components/listCategories";
export default function Main() {
  return (
    <>
      <Header></Header>
      <div className="d-flex mt-5">
        <div className="col-6">
        <TopEvents></TopEvents>
        </div>
        <div className="col-6">
        <ListOfCategories></ListOfCategories>
        </div>
      </div>
    </>
  );
}
