import Link from 'next/link'
// import aaa from '../components/layout6'

const Nav = () => {
    return (
        <ul>
            <li><Link href="/layout2">ニュース</Link></li>
            <li><Link href="/layout6">斜め四角</Link></li>
            <li><Link href="/menu1">カフェ</Link></li>
            <li><Link href="/menu4">flex box</Link></li>
            <li><Link href="/menu5">flex 丸</Link></li>
            {/* <li><Link href="/layout3">LAYOUT3</Link></li> */}
        </ul>
    )
}

export default Nav