import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./apropos.css"
import alex from "../../assets/alex.jpg"
import miss from "../../assets/missbretagnbe.jpg"
import Footer from '../../components/footer/Footer'

export default function Apropos() {
    return (
        <>
            <Navbar />
            <div className="about">
                <h1>À propos de moi</h1>
                <div className="about_container">
                    <div className="about_part_left">

                        <div className="about_image_container">
                            <img src={alex} alt="Alex" className="about_image" />
                        </div>
                        <div className="about_right">
                            <div className="about_title">Alexandra Thebault</div>
                            <div className="about_description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis consectetur modi. Incidunt quos accusantium eligendi magnam, fuga minus ipsa aliquid ullam laborum odit dolor recusandae rem pariatur facilis repellat, sed harum voluptates? Laboriosam dignissimos nisi autem earum quas sapiente deleniti ut repellendus dolor libero odio, neque sint consectetur sequi vel totam impedit vitae id modi doloremque, voluptatem illum! Vel voluptate cum, voluptatibus exercitationem iure nulla odit praesentium est officia rem vero in tempora nesciunt ad? Earum omnis laudantium et tempora nostrum facere quasi eveniet laboriosam assumenda, nihil, pariatur ipsam fugit quibusdam minima dolore. Cupiditate, consequuntur natus. Unde voluptatum sed aliquam a autem ad sit accusantium iure magnam nihil consectetur nisi mollitia error iusto dicta consequatur voluptates, reiciendis nesciunt earum et quasi voluptas rerum voluptatem magni. Ducimus veniam soluta mollitia officiis provident incidunt sunt. Facere deserunt doloremque aut dicta eveniet saepe repellendus, esse nihil at odio ea eius hic doloribus pariatur assumenda? Nihil quam nemo aperiam eum odio repellat sint, nam rerum qui voluptatem obcaecati velit perferendis nobis suscipit animi adipisci incidunt omnis consequuntur? Voluptate, rerum aliquid corporis odio dolorem quae, provident illum suscipit recusandae repellat velit? Dignissimos, vero, sit fugit facilis mollitia nostrum officia officiis temporibus id consequuntur distinctio.
                            </div>
                        </div>
                    </div>
                    <div className="about_part_right">

                        <div className="about_image_container">
                            <img src={miss} alt="missbretagne" className="about_image" />
                        </div>
                        <div className="about_right">
                            <div className="about_title">Miss Bretagne</div>
                            <div className="about_description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis consectetur modi. Incidunt quos accusantium eligendi magnam, fuga minus ipsa aliquid ullam laborum odit dolor recusandae rem pariatur facilis repellat, sed harum voluptates? Laboriosam dignissimos nisi autem earum quas sapiente deleniti ut repellendus dolor libero odio, neque sint consectetur sequi vel totam impedit vitae id modi doloremque, voluptatem illum! Vel voluptate cum, voluptatibus exercitationem iure nulla odit praesentium est officia rem vero in tempora nesciunt ad? Earum omnis laudantium et tempora nostrum facere quasi eveniet laboriosam assumenda, nihil, pariatur ipsam fugit quibusdam minima dolore. Cupiditate, consequuntur natus. Unde voluptatum sed aliquam a autem ad sit accusantium iure magnam nihil consectetur nisi mollitia error iusto dicta consequatur voluptates, reiciendis nesciunt earum et quasi voluptas rerum voluptatem magni. Ducimus veniam soluta mollitia officiis provident incidunt sunt. Facere deserunt doloremque aut dicta eveniet saepe repellendus, esse nihil at odio ea eius hic doloribus pariatur assumenda? Nihil quam nemo aperiam eum odio repellat sint, nam rerum qui voluptatem obcaecati velit perferendis nobis suscipit animi adipisci incidunt omnis consequuntur? Voluptate, rerum aliquid corporis odio dolorem quae, provident illum suscipit recusandae repellat velit? Dignissimos, vero, sit fugit facilis mollitia nostrum officia officiis temporibus id consequuntur distinctio.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
