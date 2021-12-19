import React from 'react'

export default function HomePage(){
    return(
        <div>
            <section class="container">
                <article>
                    <p>Standard</p>
                    <img src="../pic/smallroom.jpg" alt="" width="800" height="450"/>
                    <p>Single king size bed with working space and a bathroom.</p>
                    <p>1,990 THB</p>
                    <a href="Reservation.html">Book a room now</a>
                </article>
                <article>
                    <p>Deluxe</p>
                    <img src="../pic/bigroom.jpg" alt="" width="800" height="450"/>
                    <p>Double queen size bed with working space, TV, and a bathroom.</p>
                    <p>3,490 THB</p>
                    <a href="Reservation.html">Book a room now</a>
                </article>
            </section>
        </div>
    )
}