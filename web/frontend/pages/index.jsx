import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { Card, OrderDetails, OrderGraphs } from "../components";
import "./index.css";

export default function HomePage() {
  return (
    <Page fullWidth>
      <div className="home-section">
        <div className="graph-section">
          <OrderGraphs />
        </div>
        <div className="card-section">
          <Layout>
            <Card title="Order" />
            <Card title="Order" />
            <Card title="Order" />
            <Card title="Order" />
            <Card title="Order" />
            <Card title="Order" />
          </Layout>
        </div>
        <div className="order-details-section">
          <OrderDetails />
        </div>
      </div>
    </Page>
  );
}
