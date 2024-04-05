

function Badge({site}:{site:string}){
    return(
        <>
        {site === "fb" && (
            <img src="https://www.multivu.com/players/English/8426751-facebook-marketplace-for-the-holiday-tips/image/FacebookMarketplace_1543953635750-HR.jpg"
            className="w-20">
            </img>

        )}
        {site === "offerup" && (
            <img src="https://about.offerup.com/wp-content/uploads/2017/12/OU-Icon-1024x1024.png"
            className="w-10">
            </img>

        )}
        </>
    );
}

export default Badge;