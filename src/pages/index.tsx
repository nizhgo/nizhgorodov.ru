import Head from 'next/head'
import styled from "styled-components";
import Header from "@/components/header/Header";
import Profile from "@/components/profile/Profile";
import Projects from "@/components/petProjects/Projects";
import Footer from "@/components/footer/Footer";


export default function Home() {
    return (
        <>
            <Head>
                <title>Aleksey Nizhgorodov</title>
                <meta name="description" content="Фpонтенд разрабочтик. React + Typescript"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header/>
                <Profile/>
                <Projects/>
            </main>
            <Footer/>
        </>
    )
}


const Title = styled.h1`
  font-family: 'Press Start 2P';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 166%;
  /* or 33px */

  text-align: center;

  color: #CBFF00;
`
