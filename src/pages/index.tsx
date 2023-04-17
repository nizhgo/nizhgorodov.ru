import Header from "@/components/header/Header";
import Profile from "@/components/profile/Profile";
import Projects from "@/components/petProjects/Projects";
import Footer from "@/components/footer/Footer";
import Head from "next/head";


export default function Home() {
    return (
        <>
            <Head>
                <title>Aleksey Nizhgorodov</title>
                <meta name="description" content="Алексей Нижгородов - Frontend разработчик. Node.js, React, Next.js, TypeScript, JavaScript, HTML, CSS"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700;800;900&family=Press+Start+2P&display=swap"
                    rel="stylesheet"/>
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



