import { useState } from 'react';
import More_detailed from './moredetailed/more_detailed';
import {TG_LINK} from "/app/config.js"

export default function Services_card({ img, title, subtitle, price, description, id }) {
    const [showModal, setShowModal] = useState(false);

    function handleMoreDetailed() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <>
            <div className="Services-item">
                <div className="Services-item-t">
                    <div className="Services-ico">
                        <img src={img} alt="" />
                    </div>
                    <h2>{title}</h2>
                    <h4>{subtitle}</h4>
                </div>

                <div className="Services-item-m">
                    <div className="Services-item-m-price">
                        <h2>{price}₽</h2>
                        <p>за 1 шт.</p>
                    </div>
                    <p>{description}</p>
                </div>

                <div className="Services-item-d">
                    <a href={TG_LINK} className="Services-item-btn">Заказать</a>
                    <button className="Services-item-btn" id="detail" onClick={handleMoreDetailed}>Подробнее</button>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <More_detailed id= {id}/>
                    </div>
                </div>
            )}
        </>
    )
}