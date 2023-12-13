import '../styles/CenterCard.css'
import React from 'react';


function CenterCard({onClickJoin}) {

    const onButtonClicked = () => {
        onClickJoin();
    }

    return (
        <div className="center-card">
            <h2>Explore Your Passion: Blog about Cars!</h2>
            <p>Share your unique car stories, insights, and expert tips with our 'Blog about Cars' feature.
                Contribute to our growing community,
                and if your post resonates with readers, they might just buy you a coffee to show their appreciation.</p>
            <button onClick={onButtonClicked}>Join Waitlist</button>
        </div>
    );
}

export default CenterCard;