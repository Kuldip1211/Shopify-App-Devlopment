import React, { useState } from "react";
import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { storeData } from "../data";
import { Chart as ChartJS } from "chart.js/auto";
import { Line , Doughnut , Bar }from "react-chartjs-2";

export function OrderGraphs() {

    let [ data , setData ] = useState(
        {
            labels: storeData.map((d) => d.year),
            datasets : [
                {
                    label: "Order Details",
                    data: storeData.map((e) => e.order),
                    backgroundColor: ['#008170', '#000000', '#8e8e8e', '#81BF37']
                }
            ] 
        }
    )

  return (
    <>
      <Layout>
        <Layout.Section oneHalf>
          <LegacyCard title="Total Order" sectioned>
            <Line data={data} options={{ responsive : true , maintainAspectRatio : false }} />
          </LegacyCard>
        </Layout.Section>
        <Layout.Section oneThird>
          <LegacyCard title="Completed Order" sectioned>
            <Doughnut data={data} options={{ responsive : true , maintainAspectRatio : false }} />
          </LegacyCard>
        </Layout.Section>
        <Layout.Section oneThird>
          <LegacyCard title="Remaining Order" sectioned>
            <Bar data={data} options={{ responsive : true , maintainAspectRatio : false }} />
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </>
  );
}

 
