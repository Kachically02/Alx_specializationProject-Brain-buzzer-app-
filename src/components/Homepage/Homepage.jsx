import React from 'react'
import Applogo from '../../Assets/Applogo.svg'
import Heroimg from '../../Assets/heroimage.svg'
import Appfooterlogo from '../../Assets/Appfooterlogo.svg'
import Facebook from '../../Assets/facebook.svg'
import Linkedin from '../../Assets/linkedin.svg'
import Mail from  '../../Assets/Mail.png'
import X from '../../Assets/X.svg'
import Msg from '../../Assets/msg.svg'
import Phone from '../../Assets/phone.svg'
import "./home.css"

function Homepage() {
  return (
    <div>
    <div>
      <nav>
        <img src={Applogo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Browse Quiz</li>
          <li>About Us</li>
        </ul>
        <button>Login</button>
      </nav>
      <div class="Hero-section">
        <div class="Desc">
          <h3>Challenge Yourself With Expert <br/> Designed Quizzes</h3>
          <p>
            With BrainBuzzer, students can test their understanding, learn new
            concepts,<br/> and sharpen their critical thinking abilities through
            interactive quizzes
          </p>
          <div class="buttons">
            <button className='signup'>SignUp</button>
            <button className='teacher'>Are you a Teacher</button>
          </div>
        </div>
        <div class="Hero-image">
          <img src={Heroimg} alt="image" />
        </div>
      </div>
      <div className='Main-footer'>
      <div class="footer">
        <div class="info">
          <img src={Appfooterlogo} alt="footer logo" />
          <p>
            BrainBuzzer is a fun and engaging platform<br/> designed to help students
            learn and master <br/>various subjects. With a wide range of quizzes<br/>
            covering different topics, BrainBuzzer offers a <br/> personalized
            learning experience.
          </p>
          <div class="social">
            <p>Follow Us:</p>
            <img src={Facebook} alt="" />
            <img src={Msg} alt="" />
            <img src={Linkedin} alt="" />
            <img src={X} alt="" />
          </div>
        </div>
        <div class="quicklinks">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div class="Category">
          <h4>Quiz Category</h4>
          <ul>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
          </ul>
        </div>
        <div class="newsletter">
          <h4>Subscribe For Notification on Updates</h4>
          <p>
            By subscribing, you are agreeing to BrainBuzzer’s terms and <br/>
            conditions
          </p>
          <div class="form">
            <input type="Email" placeholder="Email Address"/>
            <button>Subscribe</button>
          </div>
          <div class="contact">
            <img src={Phone} alt=""/>
            <p>Phone Number:  +234 7037 194 573</p>
          </div>
          <div class="Email">
            <img src={Mail} alt=""/>
            <p>Email Address:   brainbuzzer@gmail.com</p>
          </div>
        </div>
      </div>
      </div>
      <div class="copyright">
        <p>
            &copy; 2024 BrainBuzzer. All Rights Reserved.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Homepage