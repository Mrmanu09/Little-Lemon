import '../Css/About.css';

import FoundersPhoto from '../Assets/Mario and Adrian A.jpg';
import LogoInGreen from '../Assets/Asset 7@4x.png';

function About() {
    return (
        <div className="About">
            <div class="Text-Block1">
                <h1 className="Title">Little Lemon</h1>
                <h2 className="Sub-Title">Chicago</h2>
                <p>
                    Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused
                    on traditional recipes served with a modern twist. The chefs draw inspiration from Italian,
                    Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally.
                    The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a
                    popular place for a meal any time of the day.
                </p>
            </div>
            <img src={LogoInGreen} alt="lemon logo in green"/>
            <p class="Text-Block2">
                Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United
                States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies
                on family recipes and his experience as a chef in Italy. Adrian does all the marketing for
                the restaurant and led the effort to expand the menu beyond classic Italian to incorporate
                additional cuisines from the Mediterranean region.
            </p>
            <img src={FoundersPhoto} alt="Mario and Adrian, owners of little lemon, in the kitchen"/>
        </div>
    )
}

export default About;