import Sidebar from "@/app/components/ui/sidebar";
import Footer from "@/app/components/ui/footer";
import MainSection from "@/app/components/main";
import Nav from "@/app/components/ui/nav";

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#DBCDC6]"> 
                <Nav />
                <MainSection />
                <Footer />
        </div>
    );
}
