import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { Card, OrderDetails, OrderGraphs } from "../components";
import "./index.css";
import { useEffect, useState } from "react";

export default function HomePage() {
  let [count, setCount] = useState(0);
  let [Collectioncount, setCollectionCount] = useState(0);

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
      // fetch Total Product Count
      let request = await fetch("/api/collections/count");
      let responce = await request.json();
      setCollectionCount(responce.count);
    } catch (e) {
      alert("Error " + e);
    }
  }

  useEffect(()=>{
    TotalProductCount();
    TotalCollection();
  }, []);

  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graph-section">
          <OrderGraphs />
        </div>
        <div className="card-section">
          <Layout>
            <Card title="Total Orders" />
            <Card title="Fulfilled Orders" />
            <Card title="Remaining Orders" />
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
