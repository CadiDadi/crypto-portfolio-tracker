import React from 'react'
import CoinbaseCommerceButton from 'react-coinbase-commerce'
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css'

const ShopPage = () => {
    return (
        <div>

            <div className='donate-button-div'>
            < a className="donate-with-crypto"
            href="https://commerce.coinbase.com/checkout/cea1ded1-2757-4b38-a56d-5e89a7d47811">
                <span>Donate with Crypto</span>
            </a>
            <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
            </script>
            </div>
            <CoinbaseCommerceButton checkoutId={'cea1ded1-2757-4b38-a56d-5e89a7d47811'}/>
            <div className='buy-button-div'>
            <a className="buy-with-crypto"
                href="https://commerce.coinbase.com/checkout/122a9818-7a44-4d8c-999d-89ee6105d13b">
                <span>Buy with Crypto</span>
            </a>
            <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
            </script>
            </div>

        </div>
    )
}

export default ShopPage