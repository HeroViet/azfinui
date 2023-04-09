import Sidebar from '~/layouts/components/Sidebar';
import SidebarLeft from '~/layouts/components/SidebarLeft';
import News from '~/layouts/DefaultLayout/News';

function Home() {
    return (
        <div className="flex flex-wrap flex-col lg:flex-row w-screen sm:w-[48rem] md:w-[72.6rem] lg:w-[94rem] xl:w-[117rem] ">
            <News />
            <SidebarLeft />
            <Sidebar home />
        </div>
    );
}

export default Home;
