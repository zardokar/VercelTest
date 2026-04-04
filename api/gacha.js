const rates = require('../json/gacha_rate.json')
const items = require('../json/items.json')
const rands = require('../libs/random')

// --------------------------------------------------------------------
function onRequestGacha(resp)
{   
    const result = rands.drawGacha(rates, items)
    console.log( result )
    resp.write( JSON.stringify(result) )
}
// --------------------------------------------------------------------

module.exports = {
    onRequestGacha
}