import { Layout, LegacyCard } from '@shopify/polaris'
import React from 'react'

export function Card({title,data,productCard , collectionCard , orderCard , fulfillCard , remainsCard }) {
  return (
    <Layout.Section oneThird>
        <LegacyCard title={title} sectioned>
            <h2>{ productCard && data}{collectionCard && data} {orderCard && data} {fulfillCard && data} {remainsCard && data}</h2>
        </LegacyCard>
    </Layout.Section>
  )
}

 