import "./services.css";
import Services_card from './Services_card'
import React, { useEffect, useState } from "react";

export default function Services() {
    const getInitialStatePlatform = () => "vk";
    const getInitialStateService = () => "Subscribers";

    const [platformValue, setPlatformValue] = useState(getInitialStatePlatform);
    const [servicesValue, setServicesValue] = useState(getInitialStateService);

    const [VkSubscribers, setVkSubscribers] = useState([]);
    const [VkLikes, setVkLikes] = useState([]);
    const [TgSubscribers, setTgSubscribers] = useState([]);

    useEffect(() => {
        const fetchVkSubscribers = async () => {
            try {
                const response = await fetch('api/vk/subscribers');
                const data = await response.json();
                setVkSubscribers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchVkSubscribers();
    }, []);

    useEffect(() => {
        const fetchVkLikes = async () => {
            try {
                const response = await fetch('api/vk/likes');
                const data = await response.json();
                setVkLikes(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchVkLikes();
    }, []);

    useEffect(() => {
        const fetchTgSubscribers = async () => {
            try {
                const response = await fetch('api/tg/subscribers');
                const data = await response.json();
                setTgSubscribers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchTgSubscribers();
    }, []);

    const platformChange = (e) => {
        setPlatformValue(e.target.value);
    };

    const servicesChange = (e) => {
        setServicesValue(e.target.value);
    };

    return (
        <section id="Services">
            <h2>Наши услуги</h2>
            <div id="Services-wrapper">
                <div id="Services-top">
                    <label id="platformes">
                        <p>Площадка</p>
                        <select value={platformValue} onChange={platformChange}>
                            <option value="vk">Вконтакте</option>
                            <option value="tg">Telegram</option>
                        </select>
                    </label>

                    <label id="type-of-service">
                        <p>Тип услуги</p>
                        <select value={servicesValue} onChange={servicesChange}>
                            <option value="Subscribers">Подписчики</option>
                            <option value="likes">Лайки</option>
                            <option value="Views">Просмотры</option>
                        </select>
                    </label>
                </div>

                <div id="Services-down">
                    {platformValue === 'vk' && servicesValue === 'Subscribers' &&
                        VkSubscribers.map((element, index) => (
                            <Services_card key={index} {...element} platform="vk" />
                        ))
                    }

                    {platformValue === 'vk' && servicesValue === 'likes' &&
                        VkLikes.map((element, index) => (
                            <Services_card key={index} {...element} platform="vk" />
                        ))
                    }

                    {platformValue === 'tg' && servicesValue === 'Subscribers' &&
                        TgSubscribers.map((element, index) => (
                            <Services_card key={index} {...element} platform="tg" />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}