import React, { useEffect, useState } from "react";
import './more_detailed.css';

export default function More_detailed({ id, platform }) {
    const [DescriptionValue, setDescriptionValue] = useState([]);

    useEffect(() => {
        const fetchDescription = async () => {
            try {

                const response = await fetch(`/api/${platform}/description`);
                const data = await response.json();
                setDescriptionValue(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        if (platform) {
            fetchDescription();
        }
    }, [platform]); 

    const service = DescriptionValue.find(item => item.id === id);

    return (
        <>
            <div id='more-detailed'>
                <div id='more-detailed_Background'>
                    <h2>Описание услуги</h2>
                    <div id='more-detailed-Wrapper'>
                        <div id='more-detailed_Xecution-time'>
                            Среднее время выполнения:
                            <p>до 2 000 в день.</p>
                        </div>
                        <div id='more-detailed_Description'>
                            {service ? (
                                service.description
                            ) : (
                                <p>Описание не найдено</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}