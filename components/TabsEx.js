import React, { useState } from 'react';
import Card from './Card';
// import '../styles/global.css'
const TabsEx = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
            title: 'Title 1',
            content: 'Every developerdata scientistsystem adminmobile developergame developer has aen to Stack Overflow'
        },
        {
            id: 2,
            tabTitle: 'Tab 2',
            title: 'Title 2',
            content: 'A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.'
        },
        {
            id: 3,
            tabTitle: 'Tab 3',
            title: 'Title 3',
            content: 'A web-based platform to increase productivity, decrease cycle times, accelerate time to market, and protect institutional knowledge.'
        },
        {
            id: 4,
            tabTitle: 'Tab 4',
            title: 'Title 4',
            content: <Card/>
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i} >
                        {currentTab === `${tab.id}` && <div><p className='title'>{tab.title}</p><p className='para'>{tab.content}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TabsEx;