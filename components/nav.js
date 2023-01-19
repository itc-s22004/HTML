import Link from 'next/link'
// import aaa from '../components/layout6'

const Nav = () => {
    return (
        <ul>
            <li><Link href="/news">ニュース</Link></li>
            <li><Link href="/paral">斜め四角</Link></li>
            <li><Link href="/cafe">カフェ</Link></li>
            <li><Link href="/flexbox">flex box</Link></li>
            <li><Link href="/flexcir">flex 丸</Link></li>
            {/* <li><Link href="/jsx_refe">jsx</Link></li> */}
            <li><Link href="/pc">pc</Link></li> 
        </ul>
    )
}

export default Nav