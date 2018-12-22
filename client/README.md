MaterialUI
    - page layouts, TABLES, components, etc 
    - https://material-ui.com/getting-started/usage/ 
    - learn - https://material-ui.com/getting-started/learn/
    - tables - https://material-ui.com/demos/tables/
//////////////////////////////////////////
chart widgets - https://coinlib.io/widgets

****good - coin prices
Acct
    - https://www.cryptocompare.com/cryptopian/api-keys
    - c@g pw8
    - API KEY - 85902babd490353363f521ff093d32bdc35fed2f3d9c30d77158e7bb3eff335e  
PRICES OF MULTIPLE COINS - ENTER COINS YOU WANT
    - https://min-api.cryptocompare.com/documentation?key=Price&cat=multipleSymbolsPriceEndpoint



****try these if needed 
my stuff in fiv

nomics
    - API docs can be found here: https://api.nomics.com/
    - API key: 38937e3408036db6d88a46703518b337
    - Email: scottashcroft@gmail.com
    - Our API support telegram group may be found here: https://t.me/cryptocurrencyapi
    - Information about our API may be found here: https://p.nomics.com/cryptocurrency-bitcoin-api/
    - Our docs may be found here: https://docs.nomics.com/
    - please note that the https://Nomics.com website runs entirely off of our free API, so anything you see us doing there (see here for an example), you can do with our product
cryptonator
    - https://www.cryptonator.com/api

//////////////////////////////////////////
---no good---only 1 request/conversion?

https://pro.coinmarketcap.com/account 
i@c3 pw8
API key: bae06332-bec7-4462-8b19-8e49c4b5b862

//////////////////////////////////////////

Coinbase Commerce. i@c3 pw10
https://commerce.coinbase.com/signin
---------------
Secret/recovery phrase - health account syrup luxury juice fit cigar noise lend transfer device kiss

Two-Factor Recovery Codes
Backup codes can be used to access your account in the event you lose access to your device and cannot generate two-factor authentication codes.
    2945-6296, 8e7d-dbdc, c563-493a, 9d2f-53bd, 3fe3-89ef, a26a-bf1f, 2590-773e, 781b-cdbb, 4c4d-9a1b, 21e7-662d, 9953-f3b2, 6abd-44c9, 0182-afae, 0ae3-2d85, e161-5429, fa56-007f
Put these in a safe spot. If you lose your device and don’t have the backup codes, you will lose access to your account.
------------

Coinbase - How to:
    -https://commerce.coinbase.com/docs/    - SEE ‘USING REACT’ SECTION
    -https://commerce.coinbase.com/docs/api/#introduction. 

Acct Whitelisted domains:
    https://crypto-currency-concepts.com
    https://localhost:3000/
    https://localhost:8000/

API Key - 27650220-8102-4ee3-9400-9d84ebc35251
Webhook - shared secret 835850b5-c456-470c-a6bc-64aedef13514

REACT METHOD - NOT WORKING
    1. npm i -S react-coinbase-commerce
    2. code:
        import CoinbaseCommerceButton from 'react-coinbase-commerce';
        import 'react-coinbase-commerce/dist/coinbase-commerce-button.css’;   //CSS INSTALLED W/ NPM install
        
        const App = () => {
        return (
            <CoinbaseCommerceButton checkoutId={'My checkout ID'}/>
        )
        };

Donations:
    <div>
    <a class="donate-with-crypto"
        href="https://commerce.coinbase.com/checkout/cea1ded1-2757-4b38-a56d-5e89a7d47811">
        <span>Donate with Crypto</span>
    </a>
    <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
    </script>
    </div>

T-shirt payment button code:
    1. Link - https://commerce.coinbase.com/checkout/122a9818-7a44-4d8c-999d-89ee6105d13b
    2. Embed:
    <div>
    <a class="buy-with-crypto"
        href="https://commerce.coinbase.com/checkout/122a9818-7a44-4d8c-999d-89ee6105d13b">
        <span>Buy with Crypto</span>
    </a>
    <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
    </script>
    </div>

PYTHON (DONT USE) 
    Python - installed globally
    Python is an interpreted, object-oriented, high-level programming language

    Test payment buttons with Python:
    USING PYTHON SERVER
        1. From within the payment-button directory, run python’s SimpleHTTPServer (this assumes you already have python installed):
        $ python -m SimpleHTTPServer
        2. Next navigate to https://localhost:8000 in your browser. You should see your payment button rendered in the browser.

Curl - DONT USE - installed globally
    - https://curl.haxx.se/docs/manpage.html
    -client url library, with high level request functions 
    -curl is a tool to transfer data from or to a server, using one of the supported protocols (DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET and TFTP). The command is designed to work without user interaction.
    -curl offers a busload of useful tricks like proxy support, user authentication, FTP upload, HTTP post, SSL connections, cookies, file transfer resume, Metalink, and more. )

API
    The Coinbase Commerce API provides a simple and powerful REST API to integrate bitcoin, bitcoin cash, litecoin and ethereum payments into your business or application. This API reference provides information on available endpoints and how to interact with them.

        1. curl https://api.commerce.coinbase.com/checkouts \   //(this will create a > prompt)
        2. -H "X-CC-Api Key: 27650220-8102-4ee3-9400-9d84ebc35251" \    //(This is a required HEADER KEY/VALUE PAIR (Postman, etc))
        3. -H "X-CC-Version: 2018-03-22”.   //(this is the current version (Coinbase designated)     //(This is a required HEADER KEY/VALUE PAIR (Postman, etc))

        Adding HEADER KEY/VALUE PAIRS - changes API:
            https://api.commerce.coinbase.com/checkouts ?X-CC-Api-Key=27650220-8102-4ee3-9400-9d84ebc35251&X-CC-Version=2018-03-22

        NOT WORKING:
            1. Curl - error message - {"error":{"type":"authorization_error","message":"You are not authorized to do that."}}
            2. Postman -  error message - not working
