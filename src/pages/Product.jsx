import PageNav from "../components/PageNav"
import product from '../../public/img-1.jpg'

function Product(){
    return(
        <div className="bg-gray-800 h-[70rem]">
            <PageNav/>
            <div className="flex gap-20 p-28">
                <img src={product} alt='image' className="h-[40rem] w-[40rem]"></img>
                <div>
                    <h1 className="text-7xl font-bold">About WorldWise.</h1> 
                    <br/><br/>
                    <p className="text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quibusdam, veniam, 
                        ex vitae in dolorem pariatur harum ullam, eius eum fuga magni. Doloremque perspiciatis qui 
                        molestiae minus assumenda deserunt explicabo illo. Modi, minima. Explicabo cumque tenetur non eum 
                        doloribus itaque possimus voluptatibus soluta, libero quos sunt, totam voluptate facilis blanditiis 
                        reiciendis neque ex doloremque.
                    </p>
                    <br/><br/>
                    <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum qui quae, esse rem, quod nobis repellat 
                        repudiandae earum architecto, nulla et saepe optio modi porro deleniti ea voluptatum dolor tenetur amet?</p>
                </div>
            </div>
        </div>
    )
}
export default Product