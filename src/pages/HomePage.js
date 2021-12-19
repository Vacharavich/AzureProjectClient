import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <div>
            <section class="container">
                <article>
                    <p>Standard</p>
                    <img src="../pic/smallroom.jpg" alt="" width="800" height="450"/>
                </article>
                <article>
                    <p>Deluxe</p>
                    <img src="../pic/bigroom.jpg" alt="" width="800" height="450"/>
                </article>
            </section>
            <Link to="/room">More Detail</Link>
        </div>
    )
}