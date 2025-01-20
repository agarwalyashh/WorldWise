import { useParams } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

function City()
{
    // eslint-disable-next-line no-unused-vars
    const {id} = useParams(); // it gives the :id , called params
    return(
        <div>
            OH BHENCHO
        </div>
    )
}
export default City