import React from 'react'
import "./SpecialityStyle.css";
import { GiMilkCarton,GiCoffeeCup } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";
import { BiCoffeeTogo } from "react-icons/bi";

const Speciality = () => {
    return (
        <div className='special-container'>
            <div className='banner'>
                <img src="https://img.freepik.com/free-photo/espresso-details-close-up-pouring-coffee-into-white-cup-from-coffee-pot-selective-focus-concept-making-coffee-bar-pub-restaurant-brewing-coffee-cezve_166373-2016.jpg?w=360&t=st=1673362447~exp=1673363047~hmac=6c2cd9a103cb245054e2d118cfdd1f1a8ab98373223613b24942b784c250db2e" alt="coffee make" />
            </div>
            <div className='speciality'>
                <h3 className='title-header'>What makes our coffee special?</h3>
                <div className='ingredients'>
                    <GiMilkCarton className='icon'></GiMilkCarton>
                    <div>
                    <h5 className='title-header'>Pure Milk</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, harum quae ipsam laudantium dolores enim repudiandae deserunt consectetur explicabo ratione.</p>
                    </div>
                </div>
                <div className='ingredients'>
                    <GiCoffeeCup className='icon'></GiCoffeeCup>
                    <div>
                    <h5 className='title-header'>Sustanibility</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, harum quae ipsam laudantium dolores enim repudiandae deserunt consectetur explicabo ratione.</p>
                    </div>
                </div>
                <div className='ingredients'>
                    <MdCoffeeMaker className='icon'></MdCoffeeMaker>
                    <div>
                    <h5 className='title-header'>Environmentalism</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, harum quae ipsam laudantium dolores enim repudiandae deserunt consectetur explicabo ratione.</p>
                    </div>
                </div>
                <div className='ingredients'>
                    <BiCoffeeTogo className='icon'></BiCoffeeTogo>
                    <div>
                    <h5 className='title-header'>Formula Transparency</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, harum quae ipsam laudantium dolores enim repudiandae deserunt consectetur explicabo ratione.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Speciality
