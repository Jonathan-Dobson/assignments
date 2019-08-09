import React from 'react';
import Friend from "./Friend";
import friends from './data';

export default () => friends.map((friend,index) => 
<Friend
    name = {friend.name}
    age = {friend.age}
    pets = {friend.pets}
    key = {index}
    />)
