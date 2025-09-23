import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { Card, OrderDetails, OrderGraphs } from "../components";
import "./index.css";
import { useEffect, useState } from "react";
// import { Item } from "@shopify/polaris/build/ts/latest/src/components/ActionList/components";

export default function HomePage() {
  let [count, setCount] = useState(0);
  let [Collectioncount, setCollectionCount] = useState(0);
  let [Orders , setOrders] = useState(0)
  let [Fullfield , setFullfield] = useState(0)
  let [Remaing , setRemaing] = useState(0)



  async function TotalProductCount() {
    try {
      // fetch Total Product Count
      let request = await fetch("/api/products/count");
      let responce = await request.json();
      setCount(responce.count);
    } catch (e) {
      alert("Error " + e);
    }
  }

  async function TotalCollection(){
        try {
      // fetch Total Collection Count
      let request = await fetch("/api/collections/count");
      let responce = await request.json();
      setCollectionCount(responce.count);
    } catch (e) {
      alert("Error " + e);
    }
  }

  // Fetch All Order Count
  async function TotalOrders(){
    try{
       let request = await fetch("/api/orders/count");
    let response = await request.json();
    setOrders(response.count);
    let fullfieldorders = response.data.filter(Item => Item.fulfillment_status === 'fulfilled');
    setFullfield(fullfieldorders.length);
    setRemaing(response.count - fullfieldorders.length);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    TotalProductCount();
    TotalCollection();
    TotalOrders();
  }, []);

  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graph-section">
          <OrderGraphs />
        </div>
        <div className="card-section">
          <Layout>
            <Card title="Total Orders" data={Orders} orderCard />
            <Card title="Fulfilled Orders" data={Fullfield} fulfillCard />
            <Card title="Remaining Orders" data={Remaing} remainsCard />
            <Card title="Total Product" data={count} productCard />
            <Card title="Total Collection" data={Collectioncount} collectionCard />
          </Layout>
        </div>
        <div className="order-details-section">
          <OrderDetails />
        </div>
      </div>
    </Page>
  );
}
