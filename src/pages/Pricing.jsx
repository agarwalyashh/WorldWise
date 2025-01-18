import PageNav from "../components/PageNav"
import pricing from '../../public/img-2.jpg'
function Pricing(){
    return(
        <div className="bg-gray-800 h-[70rem]">
            <PageNav/>
            <div className="flex gap-20 p-28">
                <div>
                    <h1 className="text-7xl font-bold text-left">Simple Pricing.<br/>Just $9/month.</h1> 
                    <br/><br/>
                    <p className="text-2xl text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam, veniam, 
                    ex vitae in dolorem pariatur harum ullam, eius eum fuga magni. Doloremque perspiciatis qui 
                    molestiae minus assumenda deserunt explicabo illo. Modi, minima. 
                    </p>
                </div>
                <img src={pricing} alt='image' className="h-[40rem] w-[40rem]"></img>
            </div>
        </div>
    )
}
export default Pricing