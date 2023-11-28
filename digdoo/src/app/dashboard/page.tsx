import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedDashboard() {
    const session = await getServerSession();

    if (!session || !session.user) {
        redirect ("/api/auth/signin");
    }

    const DashItem = ({ color, name }: { color: string, name: string }) => {
        console.log(color)
        return (
            <div className={`w-[150px] h-[150px] shadow-md rounded flex flex-col justify-end p-3`} style={{background: color}}>
                <hr />
                <p className="text-center text-white font-medium tracking-wide mt-2">{name}</p>
            </div>
        )
    }

    const SheetTab = ({ name }: {name: string}) => {
        return (
            <p>{ name }</p>
        )
    }

    const SheetData = () => {
        return (
            <div>
                {}
            </div>
        )
    }

    return (
        <main>
            <div className="h-12 bg-blue-500">
            </div>
            <span className="flex flex-row justify-center gap-8 p-16 bg-gray-100">
                <DashItem color={'#FF6F23'} name={'No Due Date'}/>
                <DashItem color={'#EF4444'} name={'Overdue Items'} />
                <DashItem color={'#3B82F6'} name={'Due Today'} />
                <DashItem color={'#3B82F6'} name={'Due Tomorrow'} />
                <DashItem color={'#3B82F6'} name={'Due This Week'} />
                <DashItem color={'#3B82F6'} name={'Due Next Week'} />
            </span>
            <div className="bg-gray-100 min-h-screen">
                <div>
                    <span className="">
                        <SheetTab name={'tickets'} />
                        <SheetTab name={'messages'} />
                        <SheetTab name={'new businesses'} />
                    </span>
                    <div>
                        <SheetData />
                    </div>
                </div>
            </div>
        </main>
    )
}