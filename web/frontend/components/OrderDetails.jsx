import { Layout, LegacyCard } from '@shopify/polaris'
import React from 'react'

export function OrderDetails() {
  return (
    <>
    <Layout>
        <Layout.Section>
            <LegacyCard title="OrderDetails" sectioned>
                <p className='text-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque magni reiciendis dolorum labore ipsa, laborum nisi nesciunt iure reprehenderit consectetur magnam vel rerum veniam repellat vitae sed ab distinctio cupiditate?</p>
            </LegacyCard>
        </Layout.Section>
    </Layout>
    </>
  )
}

