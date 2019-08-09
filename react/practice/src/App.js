import React from 'react';
import './App.css';
import data from './data'

const Pet = (pet) =><div style={pet.style}>
  <span>
    One {pet.breed}
  </span> 
  &nbsp;
  <span> 
    named {pet.name}. 
  </span> 
</div>

const petListStyle = {
  margin: '12px',
}
const PetsList = (props) => props.pets.map((pet,index)=><Pet 
  style={petListStyle}
  name={pet.name} 
  breed={pet.breed} 
  key={index+pet.name}
/>)

const Friend = (props) =>
  <div style={{
    display: 'inline-block',
    backgroundColor: "#F3F3F3",
    width: "300px",
    minHeight: "300px",
    borderRadius: "5px",
    margin: '20px',
    boxShadow: "0px 6px 14px 4px rgba(80,80,80,0.1)",
    }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
    <hr />
    <h3>Pets:</h3>
    <PetsList pets={props.pets}/>
  </div>

const FriendsList = () => data.map((friend,index) => 
  <Friend
    name = {friend.name}
    age = {friend.age}
    pets = {friend.pets}
    key = {index}
  />)

export default () => 
  <div className="App" style={{
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  }}>
    <FriendsList />
  </div>
