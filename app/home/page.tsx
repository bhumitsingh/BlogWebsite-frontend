import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <div className="flex flex-col">        
                <Sidebar />
                <Footer />
            </div>
        </>
    )
}