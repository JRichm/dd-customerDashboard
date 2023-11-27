"use client"

export default function BusinessNav() {
    return (
        <div className="w-[400px] bg-gray-200 min-h-screen flex flex-col text-right tracking-wider">
                <NavButton label={"new ticket"} buttonLink={"/business/ticket"} />
                <NavButton label={"view tickets"} buttonLink={"/business/status"} />
        </div>
    )
}

interface NavButtonType {
    label: string;
    buttonLink: string;
} 
``
function NavButton({label, buttonLink}: NavButtonType) {

    const handleClick = () => {
        window.location.href = buttonLink
        console.log(`clicked the ${label} button`)
    }

    return (
        <span onClick={handleClick} className="hover:cursor-pointer hover:bg-black/10">
            <p className="text-xl py-3 px-8">{label}</p>
        </span>
    )
}