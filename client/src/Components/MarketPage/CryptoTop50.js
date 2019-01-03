import React from 'react'

const CryptoTop50 = () => {
    return(        
        <div className='top50-outer'>
            <div style={{height: '3029px', backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'content-box', border: '1px solid #3333cc', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #3333cc', padding: '0px', margin: '0px', width: '99%'}}>
                <div style={{height: '3009px'}}>
                    <iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=50&pref_coin_id=1505&graph=yes" width="100%" height={3005} scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0}}>
                    </iframe>
                </div>
                <div style={{color: '#FFFFFF', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'content-box', margin: '3px 6px 10px 0px', fontFamily: 'Verdana, Tahoma, Arial, sans-serif'}}>powered by&nbsp;<a href="https://coinlib.io" target="_blank" style={{fontWeight: 500, color: '#FFFFFF', textDecoration: 'none', fontSize: '11px'}}>Coinlib</a>
                </div>
            </div>
      </div>  
    )
}

export default CryptoTop50

