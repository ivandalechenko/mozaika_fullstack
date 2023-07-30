import React from 'react';
import './USP.scss';

const USP = (props) => {
    return (
        <div className='usp'>
            <div className="container">
                <div className="usp_text">
                    <div className="h1">
                        Сервис по созданию мозаики по своему фото
                    </div>
                    <div className="h2">
                        Удобный сервис,  который поможет сделать из фотографии мозаику по номерам
                    </div>
                    <button className="button">
                        Создать мозайку
                    </button>
                </div>
                <div className="usp_images">

                </div>
            </div>
        </div>
    )
}

export default USP