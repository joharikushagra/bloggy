import React from "react";
import { FaThumbsUp, FaComment,FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"
import '../styles/Card.css'; 

function Card({user,post}) {  
  return ( (
      <div className="card__container" key={post.id}>
      <div className="card__author">
        {/* <h4 className="card__authorName"><FaUserCircle className="card__authorAvatar" style={{marginRight:'4px'}}/>Raushan Sinha, Web Developer, Amazon</h4> */}
        <h4 className="card__authorName"><FaUserCircle className="card__authorAvatar" style={{marginRight:'4px'}}/>{user && user.name}</h4>
        <p>Posted a day ago</p>
      </div>
      <div className="card__heading">
        {/* <h3>{L3 Data Scientist interview at amzona}</h3> */}
        <Link to={`/post/${post.id}`} style={{textDecoration:'none'}} >
        <h3 className="card__headingTitle">{post && post.title}</h3>
        </Link>
        
        <h6 className="card__headingLocation">Data Science, Machine Learning, Amazon</h6>
      </div>
      <div className="card__content">
        <p>
         {post.body}
        </p>
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ullam
          molestias minus vitae, laboriosam quod nostrum hic voluptas.
          Consequatur rem ratione voluptatem officia odit. Et eveniet laudantium
          reiciendis facere eius commodi, repudiandae expedita dolore quisquam
          amet deserunt labore repellat, dolorum illum perferendis possimus
          nesciunt ut eaque unde magni omnis incidunt laboriosam sit?
        </p> */}

        <div className="card__icons">
          <FaThumbsUp /><span style={{marginLeft:'6px'}}>2k</span>
          <FaComment style={{"marginLeft":"12px"}} /><span style={{marginLeft:'6px'}}>10</span>
        </div>
      </div>

      <div className="card__comment">
      <div className="card__commentBg">
          <input className="card__commentInput" type="text" placeholder="Add Comment here..." name="comment"/>
          <button className="card__commentButton">Add</button>
      </div>
      </div>
    </div>
    )
   
  );
}

export default Card;