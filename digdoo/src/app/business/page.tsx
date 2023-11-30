import BusinessNav from "./_bComponents/_bNav";

export default function BusinessHome() {

    const SettingsButton = ({ text }: { text:string }) => {
        return (
            <div className="w-[250px] h-[250px] flex items-center justify-center">
                <div className="bg-white hover:bg-gray-100 hover:cursor-pointer h-[200px] w-[200px] hover:h-[230px] hover:w-[230px] transition-all rounded-full flex justify-center">   
                    <p className="self-center mb-4">{text}</p>
                </div>
            </div>
        )
    }

    return (
        <main className="flex flex-col bg-gray-100 h-screen">
            <div className="h-12 bg-blue-500">
            </div>
            <span className="flex flex-row justify-center p-8">
                <SettingsButton text={"View Website"} />
                <SettingsButton text={"Update Website"} />
                <SettingsButton text={"Website Settings"} />
                <SettingsButton text={"Billing"} />
            </span>
            <div className="flex flex-col p-2">
                <div className="flex flex-row justify-center gap-2">
                    <div className="bg-white w-[75%]">
                        <p>this is the table area</p>
                    </div>
                    <div className="flex flex-col w-[25%] gap-2">
                        <div className="bg-white">
                            <p>this is the pie chart</p>
                        </div>
                        <div className="bg-white">
                            <p>this is the bottom right menu</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}