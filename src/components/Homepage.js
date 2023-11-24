import React from 'react'
import "../styles/Home.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate= useNavigate();

    const restaurants = [
        {
          name: 'Mcdonalds',
          image: 'https://www.2foodtrippers.com/wp-content/uploads/2022/11/Big-Mac-Meal-at-McDonalds.jpg.webp',
          tags: ['American', 'Fast Food', 'Burgers'],
          minWaitTime: 10,
          maxWaitTime: 30,
          deliveryFee: '5.99'
        },
        {
          name: 'Pizza Hut',
          image: 'https://gray-wistv-prod.cdn.arcpublishing.com/resizer/l_ZlW86PPJ0CTOQ6SDMPW4Si8KU=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/YMFAE4MTJZD5RIN2ZAZII2RRII.jpg',
          tags: ['Italian', 'Pizza', 'Fast Food'],
          minWaitTime: 15,
          maxWaitTime: 40,
          deliveryFee: '4.99'
        },
        {
          name: 'Sushi Express',
          image: 'https://miro.medium.com/v2/resize:fit:4000/1*yGK9jD35goWdn3XtRq9y4Q.jpeg',
          tags: ['Japanese', 'Sushi', 'Asian'],
          minWaitTime: 20,
          maxWaitTime: 45,
          deliveryFee: '7.99'
        },
        {
          name: 'Taco Bell',
          image: 'https://www.tacobell.com/medias/home-for-the-holidays-2020.jpg?context=bWFzdGVyfGltYWdlc3wyMTk5NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGJhL2gzNy85MDM3MzQwODM1ODcwLmpwZ3xhZTdmNDFlZDMzOWRmNDM4YmE1ZDg0M2EyOWIxNjkzNTdmNjMxOGNmZGI5N2M3YjBlMWE3NmEyYzkzZmU0MDY0',
          tags: ['Mexican', 'Fast Food', 'Tacos'],
          minWaitTime: 12,
          maxWaitTime: 35,
          deliveryFee: '6.49'
        },
        {
          name: 'Subway',
          image: 'https://cdn.winsightmedia.com/platform/files/public/2020-12/background/800x1000/Menu-Helo_1200x800_72dpi_Hero_1607368897.png?VersionId=UdKek8CYhMeUWDA1BEmGKWZki7.PkMCv',
          tags: ['American', 'Fast Food', 'Subs'],
          minWaitTime: 18,
          maxWaitTime: 38,
          deliveryFee: '5.00'
        },
        {
            name: 'Mexican Grill',
            image: 'https://morenosmexicangrillaz.com/wp-content/uploads/2021/07/Steak-image-470x270.jpg',
            tags: ['Mexican', 'Tacos', 'Burritos'],
            minWaitTime: 18,
            maxWaitTime: 38,
            deliveryFee: '5.49'
          },
      ];
      
  return (
    <div>
        <div className='top-content'>
            <div className='overlay'></div>
            <img src={restaurants[1].image} alt='Favorite Food Img'/>
            <div className='inside-top-content'>
            <p id='cta-text'>
                Your favorite food, delivered while coding
            </p>
            <Link to={'/pizza'} id='order-pizza'>Pizza?</Link>
            </div>
        </div>

        <div className='top-bottom-content'>
            <h2 className='bottom-content-title'>
                Food Delivery in Gothem City
            </h2>
            <div className='bottom-content'>
                {restaurants.map((restaurant, i) => {
                    return(
                        <div className='cards' key={i} onClick={() => navigate("/pizza")}>
                        {/* the div below represents img */}
                        <img src={restaurant.image} alt='Pic of Food' />
                            <h3 className='cards-title'>{restaurant.name}</h3>
                            <div className='tags'>
                            {restaurant.tags.map((tag, i) => {
                                return(
                                    <p key={i}>
                                        {tag}
                                    </p>
                                )
                            })}
                            </div>
                            <div className='time'>
                                <p>{restaurant.minWaitTime}-{restaurant.maxWaitTime} Min</p>
                                <p>${restaurant.deliveryFee} Delivery Fee</p>
                            </div>
                       </div>
                    )
                })}
              
            </div>
        </div>
    </div>
  )
}
