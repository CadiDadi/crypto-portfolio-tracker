import React from 'react'

const LittleBtcChart = () => { 
    return ( 
        <div>
            <div className='little-btc-chart1' style={{width: '400px', height: '220px', backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'content-box', border: '1px solid #56667F', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', blockSize: '220px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #56667F', padding: '0px', margin: '10px'}}>
                <div className='little-btc-chart2' style={{height: '200px'}}>
                    <iframe title='little-btc-chart-iframe'  src="https://widget.coinlib.io/widget?type=single_v2&theme=light&coin_id=157&pref_coin_id=1505" width={400} height={196} scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0, lineHeight: '14px', boxSizing: 'content-box'}} />
                </div>
                <div className='little-btc-chart3' style={{color: '#FFFFFF', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'content-box', margin: '3px 6px 10px 0px', fontFamily: 'Verdana, Tahoma, Arial, sans-serif'}}>
                    <a href="https://coinlib.io" target="_blank" style={{fontWeight: 500, color: '#FFFFFF', fontSize: '11px', textDecoration: 'none'}}>Coinlib</a>
                </div>
            </div>
        </div>
    )
}

export default LittleBtcChart