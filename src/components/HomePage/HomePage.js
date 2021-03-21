import React from 'react';
import Rides from '../Rides/Rides';
import SelectedRide from '../SelectedRide/SelectedRide';

const HomePage = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    // const rides = [
    //     {
    //         title: 'Bike',
    //         vehicleId:101,       
    //         imgUrl: 'https://linkpicture.com/q/Frame_7.png',
    //         bed: 1,
    //         capacity: 1,
    //         seatType: 'Single',
    //         price: 119
    //     },
    //     {
    //         title: 'Bus',
    //         vehicleId:102,  
    //         imgUrl: 'https://linkpicture.com/q/Frame-1_5.png',
    //         bed: 1,
    //         capacity: 1,
    //         seatType: 'Single',
    //         price: 119
    //     },
    //     {
    //         title: 'Car',
    //         vehicleId:103,  
    //         imgUrl: 'https://linkpicture.com/q/Frame-2_2.png',
    //         bed: 1,
    //         capacity: 1,
    //         seatType: 'Single',
    //         price: 119
    //     },
    //     {
    //         title: 'Train',
    //         vehicleId:104,  
    //         imgUrl: 'https://linkpicture.com/q/Group_4.png',
    //         bed: 1,
    //         capacity: 1,
    //         seatType: 'Single',
    //         price: 119
    //     }
    // ]
   
    return (
   

    <div className="container">
        {/* <div className="row">
        {
            rides.map(ride => <Rides key={ride.vehicleId} ride={ride}></Rides>)
        }
        </div>

       <div>
       {
             rides.map(ride => <SelectedRide key={ride.vehicleId} ride={ride}></SelectedRide>)
        }
       </div> */}
    </div>
    );
};

export default HomePage;