import React from 'react'

const BigBchChart = () => {
  return( 
    <div>
        <div className='big-btc-chart1' style={{height: '460px', backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'content-box', border: '1px solid #56667F', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #56667F', padding: '0px', margin: '10px'}}>
            <div className='big-btc-chart2' style={{height: '540px', padding: '0px', margin: '0px'}}>
                <iframe title='big-btc-chart-iframe' src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=157&pref_coin_id=1505" width="100%" height={536} scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0, lineHeight: '14px', boxSizing: 'content-box'}} />
            </div>
            <div className='big-btc-chart3' style={{color: '#FFFFFF', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'content-box', margin: '3px 6px 10px 0px', fontFamily: 'Verdana, Tahoma, Arial, sans-serif'}}>powered by&nbsp;
            {/* eslint-disable-next-line */}
                <a href="https://coinlib.io" target="_blank" style={{fontWeight: 500, color: '#FFFFFF', fontSize: '11px', textDecoration: 'none'}}>Coinlib</a>
            </div> 
        </div>  
    </div>
  )
}

export default BigBchChart