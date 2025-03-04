// src/data/cryptocurrencies.ts

import chart1 from '@/public/marcketPriceCardIcon/Path-1.svg'
import chart2 from '@/public/marcketPriceCardIcon/Path-2.svg'
import chart3 from '@/public/marcketPriceCardIcon/Path-3.svg'
import chart4 from '@/public/marcketPriceCardIcon/Path-4.svg'
import bitcoin from '@/public/marcketPriceCardIcon/Bitcoin.png'
import bitcoinCash from '@/public/marcketPriceCardIcon/BitcoinCash.png'
import etherium from '@/public/marcketPriceCardIcon/Etherium.png'
import litecoin from '@/public/marcketPriceCardIcon/Litecoin.png'

export const cryptocurrencies = [
  { 
    symbol: 'BTC',
    name: 'Bitcoin',
    price: '6,239',
    change: 2,
    trend: 'up',
    icon: bitcoin,
    chart: chart4
  },
  { 
    symbol: 'ETH',
    name: 'Ethereum',
    price: '334',
    change: 2,
    trend: 'up',
    icon: etherium,
    chart: chart1 
  },
  { 
    symbol: 'LTC',
    name: 'Litecoin',
    price: '194', 
    change: -3,
    trend: '',
    icon: litecoin,
    chart: chart2 
  },
  { 
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    price: '1,239',
    change: 2,
    trend: 'up',
    icon: bitcoinCash,
    chart: chart3
  }
]
