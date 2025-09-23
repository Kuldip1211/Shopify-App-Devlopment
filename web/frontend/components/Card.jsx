import { Layout, LegacyCard } from '@shopify/polaris'
import React from 'react'

export function Card({title,data,productCard , collectionCard}) {
  return (
    <Layout.Section oneThird>
        <LegacyCard title={title} sectioned>
            <h2>{ productCard && data}{collectionCard && data}</h2>
        </LegacyCard>
    </Layout.Section>
  )
}

 