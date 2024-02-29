import './styles.css'

export default function Landing(){
    return (
        <div className='wrapper'>
            <div className='main-div'>
                <div className='card-div'>
                    <div className='left-div'>
                        <h2 className='left-headtitle'>Your Result</h2>
                        <div className='circle-div'>
                            <h1 className='left-title'>76</h1>
                            <p className='left-circletxt'>of 100</p>
                        </div>
                        <h2 className='left-subtitle'>Great</h2>
                        <p className='left-txt center-txt'>You scored higher than 65% of the poeple who have taken these test.</p>
                    </div>
                    <div className='right-div'>
                        <div className='summary-div'>
                            <div className='left'><h2 className='right-title '>Summary</h2></div>
                            <div className='detail-div reaction'>
                                <div className='icon-margin'>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="20" height="20" fill="none" viewBox="0 0 20 20">
                                    <path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg>
                                </div>
                                <p className='item red'>Reaction</p> <div className='color'><strong className='color'>80</strong> / 100</div>
                            </div>
                            <div className='detail-div memory'>
                                <div className='icon-margin'>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg>
                                </div>
                                <p className='item red'>Memory</p><div className='color'><strong className='color'>92 </strong> / 100</div>  
                            </div> 
                            <div className='detail-div verbal'>
                                <div className='icon-margin'>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                     width="20" height="20" fill="none" viewBox="0 0 20 20">
                                    <path stroke="#00BB8F" stroke-linecap="round" stroke-linejoin="round" 
                                    stroke-width="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg>
                                </div>
                                <p className='item red'>Verbal</p> <div className='color'><strong className='color'>61 </strong>/ 100</div>
                            </div>
                            <div className='detail-div visual'>
                                <div className='icon-margin'>
                                  <svg xmlns="http://ww w.w3.org/2000/svg" 
                                  width="20" height="20" fill="none" viewBox="0 0 20 20">
                                  <path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg>
                                </div>
                                <p className='item red'>Visual</p> <div className='color'><strong className='color'>72 </strong>/ 100</div>
                            </div>
                            <button className='continue-btn'>Continue</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}