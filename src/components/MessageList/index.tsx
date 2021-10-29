import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { api } from '../../services/api';
import { io } from 'socket.io-client';

import { MESSAGES_EXAMPLE } from '../../utils/messages';

import { Message, MessageProps } from '../Message';

import { styles } from './styles';

// initializing a new variable on memory = line of messages received from socket and removed after exhibited
// initial value = MESSAGES_EXAMPLE
let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;

// get current messages in real time
const socket = io(String(api.defaults.baseURL));
// event on back-end
socket.on('new_message', (newMessage) => {
    // set a time to remove a message from messagesQueue until there is no messages there
    messagesQueue.push(newMessage);
    // check if its happening
    console.log(newMessage); 
});

export function MessageList() {
    const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

    // 1-search the 3 first messages | then - search the current messages
    useEffect(() => {
        async function fetchMessages() {
            const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
            setCurrentMessages(messagesResponse.data);
        }

        fetchMessages();
    }, [])

    // set a timer on useEffect
    useEffect(() => {
        // setInterval = a function will be executed for each 3000 ms (3 s)
        const timer = setInterval(() => {
            // is there anything, on messagesQueue?
            if(messagesQueue.length > 0) {
                // prevState = recover the previous state of screen messages
                // message 1 (messageQueue[0]) = placed on position 2 (prevState[1])
                // message 2 (messageQueue[1]) = placed on position 3 (prevState[2])
                // message 3 = remove from screen
                setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]]);
                // remove the 1st element of messageQueue array
                messagesQueue.shift();
            }
        }, 3000);

        // reset timer for each 3 seconds
        return () => clearInterval(timer);
    }, [])

    return (
        // ScrollView activates scroll properties if messages don't fit enough space on screen
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.content} 
            // Determines when the keyboard should stay visible after a tap
            keyboardShouldPersistTaps="never"
        > 
            {/* For list elements, its necessary to use a key (unique elements) */}
            {currentMessages.map((message) => <Message key={message.id} data={message} /> )}
        </ScrollView>
    )
}