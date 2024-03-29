/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        Gotham: 'Gotham',
        Minion: 'MinionPro-Regular',
      },
      fontSize: {
        '2xs': ['13px', { lineHeight: '13px' }],
        '3xs': ['13px', { lineHeight: '21px' }],
        'xl3': ['1.625rem', { lineHeight: '1.875rem' }],
        '22px': ['22px', { lineHeight: '26px' }],
        '25px': ['25px', { lineHeight: '40px' }],
        '26px': ['26px', { lineHeight: '47px' }],
        'xl3.5': ['2.7rem', { lineHeight: '3.25rem' }],
        'xl4': ['45px', { lineHeight: '60px' }],
        'xl4.5': ['3.5rem', { lineHeight: '4rem' }],
        'xl5': ['3.69rem', { lineHeight: '4.25rem' }],
        'xl7': ['65px', { lineHeight: '74px' }],
      },
      gridColumn: {
        'span-1/4': 'span 1 / span 2',
      },
      letterSpacing: {
        '0.18': '0.18rem',
        '0.02': '0.02rem',
        '0.03': '0.03rem',
      },
      lineHeight: {
        2: '0.6875rem',
        11: '2.9375rem',
        '15px': '15px',
        '19px': '19px',
        '21px': '21px',
        '42px': '42px',
        '47px': '47px',
        '60px': '60px',
        100: '100px',
      },
      transitionDelay: {
        '0.2': '0.2s',
      },
      transitionDuration: {
        '0.3': '0.3s'
      },
      width: {
        45: '45%',
      },
      colors: {
        'greenshade': ['#787F3D'],
        'greenshade1': ['#787f3db3'],
        'grayshade': ['#494948'],
        'grayshade1': ['#4D4D4F'],
        'grayshade2': ['#ffffff80'],
        'whiteshade': ['#EBECE2'],
        'whiteshade1': ['#F5F5F1'],
        'whiteshade2': ['#FFFEFE'],
      },
      spacing: {
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '13px': '13px',
        '22px': '22px',
        '26px': '26px',
        15: '3.75rem',
        '9.2%': '9.2%',
        per: '15% auto',
        29: '5.0625rem',
        '47px': '47px',
        100: '100px',
        200: '200px',
      },
      borderWidth: {
        0.2: '0.2px',
      },
    },
  },
  plugins: [],
}
