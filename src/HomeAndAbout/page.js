import React, { useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-scroll';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './home__page.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIosRounded'
import StartupLife from './Components/Static/StartupLife.gif'
import SearchEngines from './Components/Static/SearchEngines.gif'

export default function HomePage(){
    useEffect(()=>{
        AOS.init({duration: 2000});
    }, []);

    const history = useHistory();

    const schAlgos = ['First come first served', 'Shortest Job First',
    'Shortest remaining time first', 'Priority',
    'Priority (preemptive)', 'Round robin']

    const pageReplaceAlgos = [ 'Least Recently Used', 'Optimal',
     'First in First out']

    return (
        <div className='home__page'>

            <section>
                <img src={StartupLife} alt='person with pc' />
                <div>
                    <Typography variant='h4' className='title'>
                        Struggling with operating system algorithms!
                    </Typography>
                    <Typography variant='subtitle1' className='subtitle'>
                        Don't worry we have solution of your problems
                    </Typography>
                    <Link to='links_to_algo' smooth={true} duration={800}>
                        <Button variant='contained' color='primary' >
                            Start Learning
                        </Button>
                    </Link>
                </div>
            </section>

            <div className='divider__wrapper'>
                <div />
            </div>

            <section>
                <div data-aos="fade-up">
                    <Typography variant='h4' className='title'>
                        Enter, Visualize and Understand
                    </Typography>
                    <Typography variant='subtitle1' className='subtitle'>
                        Pick a algorithm, fill the entries and get in depth solution
                        with detailed steps 
                    </Typography>
                    <Link to='links_to_algo' smooth={true} duration={800}>
                        <Button variant='contained' color='primary' >
                            Start Learning
                        </Button>
                    </Link>
                </div>
                <img src={SearchEngines} alt='person with pc' />
            </section>

            <div className='divider__wrapper'>
                <div />
            </div>

            <div id='links_to_algo'>
                <div>
                    <Typography variant='h4'>
                        Algorithms you will Master
                    </Typography>
                </div>

                <div className='cards__container' >
                    <div className='algo__card' data-aos="fade-up"
                        onClick={()=>history.push('/ProcessScheduling')}>
                        
                        <div>
                            <Typography variant='h5'>
                                Process Scheduling
                            </Typography>
                        </div>

                        <div className='algo__card__body'>
                            {schAlgos.map(title => (
                                <div>
                                    <ArrowForwardIosIcon />
                                    <p>{title}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className='algo__card' data-aos="fade-up"
                        onClick={()=>history.push('/PageReplacement')}>
                        
                        <div>
                            <Typography variant='h5'>
                                Page Replacement
                            </Typography>
                        </div>

                        <div className='algo__card__body'>
                            {pageReplaceAlgos.map(title => (
                                <div>
                                    <ArrowForwardIosIcon />
                                    <p>{title}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}