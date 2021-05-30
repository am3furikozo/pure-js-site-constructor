import {TextBlock, TitleBlock, ColumnsBlock, ImgBlock} from './classes/blocks'
import img from './assets/img.jpg'

export const model = [
    new TitleBlock('Your ad could be here', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImgBlock(img, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        imgStyles: {
            height: '300px'
        },
        alt: 'This is a picture (or not, guess)'
    }),
    new ColumnsBlock([
        'This is a pure JavaScript application',
        'I like JavaScript',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
            }
        }),
    new TextBlock('Here comes the text, blah blah', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weigth': 'bold'
        }
    }) 
]
