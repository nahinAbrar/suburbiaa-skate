import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';


type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <SmoothScrollProvider>

                <Header />
                {children}
                <Footer />
            </SmoothScrollProvider>
        </>
    )
}