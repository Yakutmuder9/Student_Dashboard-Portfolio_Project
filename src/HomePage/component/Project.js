import React from 'react'
import {SiOpslevel} from 'react-icons/si'
import {MdCleaningServices} from 'react-icons/md'
import {BiCopy, BiNetworkChart} from 'react-icons/bi'

const Project = () => {
  return (
    <div className='project'>
        <div className='project-titel'>
            <h2>Employing The Latest Blockchain Tech to Support Your Comapany's Success</h2>
        </div>
        <div className='project-filter'>
            <div className='filter-btn-overlay'>
                <div></div> <div></div><div></div><div></div><div></div>
            </div>
            <div className='btn-backgroung'></div>
                <div className='active-btn'>
                <div className='core-center'></div>
                    <div className='inner-active'>
                    </div>
                        <div className='center-active'></div>
                </div>
            <div className='filter-btn'>
                <button>Enterprise Areas</button>
                <button>Techology Stack</button>
                <button>Blockchain</button>
                <button>Applications</button>
            </div>
            <div className='filterd-lists'>
                <div className='one-filter'>
                    <MdCleaningServices className='filter-icon'/>
                    <p>Protocol Layer</p>
                </div>
                <div className='two-filter'>
                    
                <BiCopy className='filter-icon'/>
                    <p>Protocol Layer</p>
                </div>
                <div className='three-filter'>
                    
                <BiNetworkChart className='filter-icon'/>
                    <p>Protocol Layer</p>
                </div>
                <div className='four-filter'>
                    
                <SiOpslevel className='filter-icon'/>
                    <p>Protocol Layer</p>
                </div>
                <div className='five-filter'>
                    
                <MdCleaningServices className='filter-icon'/>
                    <p>Protocol Layer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project