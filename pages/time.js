import Head from 'next/head'
import Link from 'next/link'

export default function Home({time}) {
  return (
    <>
    <h1>It's {time}</h1>
    <hr/>
    <Link href="/"><a>top</a></Link><br/>
    <Link href="/time"><a>time</a></Link><br/>
    <Link href="/time2"><a>time2</a></Link>
    </>
  )
}

export async function getStaticProps() {

  const date = new Date()
  const y = date.getFullYear()
  const d = date.getDate()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds().toString()
  const time = `${y}/${m}/${d} ${h}:${m}:${s.padStart(2,"0")}`

  return {
    props: {time}, // will be passed to the page component as props
  }
}
