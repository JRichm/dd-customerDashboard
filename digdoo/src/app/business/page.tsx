import BusinessNav from "./_bComponents/_bNav";

export default function BusinessHome() {
    return (
        <main className="flex flex-row">
            <BusinessNav />
            <div>
                <p>this is the main business area</p>
            </div>
        </main>
    )
}