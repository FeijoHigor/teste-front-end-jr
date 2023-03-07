import { useRef } from 'react'

import brandLogo from '../../images/headerImages/logo.svg'

import './BrandCarousel.scss'

const brandList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]

function BrandsCarousel(props) {

    const brandsListRef = useRef(null)

    const moveList = (side) => {
        if(side == 'left') {
            brandsListRef.current.scrollLeft -= 600
        }else if(side == 'right') {
            brandsListRef.current.scrollLeft += 600
        }
    }

    return (
        <div style={{position: 'relative'}}>
            <button className={`brand-arrow brand-left ${7 <= 4 ? 'arrow-desactive' : ''}`} onClick={() => moveList('left')} >
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00964 11.8506L9.3545 11.5L9.00964 11.1494L0.701707 2.70288L2.66397 0.712239L13.2979 11.5L2.66397 22.2878L0.701706 20.2971L9.00964 11.8506Z" fill="#0080BF" stroke="white"/>
                </svg>
            </button>
            <ul ref={brandsListRef} className="brand-carousel">
                {brandList.map((e, i) => <li style={i == 0 ? {marginLeft: 15} : {}} key={i} title={'VTEX'}>
                    <img src={brandLogo} alt="logo da VTEX" />
                </li>)}
            </ul>
            <button className={`brand-arrow brand-right ${6 >= 10 ? 'arrow-desactive' : ''}`} onClick={() => moveList('right')}>
                <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00964 11.8506L9.3545 11.5L9.00964 11.1494L0.701707 2.70288L2.66397 0.712239L13.2979 11.5L2.66397 22.2878L0.701706 20.2971L9.00964 11.8506Z" fill="#0080BF" stroke="white"/>
                </svg>
            </button>
        </div>
    )
}

export default BrandsCarousel