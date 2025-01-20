/* eslint-disable react/prop-types */
function CountryList({cities,isloading})
{

    const countries = cities.reduce((accumulator, currentCity) => {
        if (!accumulator.some(el => el.country === currentCity.country)) {
            accumulator.push({ country: currentCity.country, emoji: currentCity.emoji });
        }
        return accumulator;
    }, []);
    

    if(isloading)
        return <Loader/>
    return(
        <ul className="grid mt-10 grid-cols-3 gap-6">
            {countries.map((city)=>
            <li key={city.id} className=" grid w-48 h-26 bg-gray-600 gap-4 border-l-4 border-orange-500 rounded-lg p-4 text-2xl">
                <span style={{ fontFamily: "Noto Color Emoji" }}>{city.emoji}</span>
                <p>{city.country}</p>
            </li>)}
        </ul>
    )
}

function Loader()
{
    return(
        <div className="h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-transparent to-gray-400 mask-radial animate-spin"></div>
        </div>
    )
}
export default CountryList