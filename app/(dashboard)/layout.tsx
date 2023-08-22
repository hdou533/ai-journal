import { UserButton } from "@clerk/nextjs"

const DashboardLayout = ({children}: {
    children: React.ReactNode
  }) => {
    return <div className="h-screen w-screen relative ">
        <aside className="absolute top-0 left-0 h-full w-[200px] border-r border-black/10">
            Mood
        </aside>
        <div className="ml-[200px]">
            <header className="h-[60px] border-black/10">
                <div className="h-full w-full px-5 flex items-center justify-end">
                    <UserButton/>
                </div>
            </header>
            <div>
            { children }
            </div>
        </div>
       
        </div>
}

export default DashboardLayout
