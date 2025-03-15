import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import MainSection from "@/app/components/main";

export default function Home() {
    return (
        <div className="bg-white flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-grow">
                <MainSection />
                <Footer />
            </div>
        </div>
    );
}
