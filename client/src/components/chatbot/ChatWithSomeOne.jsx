import { useState } from "react";
import { config } from "dotenv";
import "./chat.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { BiHome } from "react-icons/bi";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

function ChatWithSomeOne() {
  // State to manage the typing indicator of the chatbot
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);

  // State to store chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello, I am Marta, how can I help you?",
      sender: "ChatGPT",
    },
  ]);

  // Function to handle user messages
  const handleUserMessage = async (userMessage) => {
    // Create a new user message object
    const newUserMessage = {
      message: userMessage,
      sender: "user",
      direction: "outgoing",
    };

    // Update chat messages state with the new user message
    const updatedChatMessages = [...chatMessages, newUserMessage];
    setChatMessages(updatedChatMessages);

    // Set the typing indicator for the chatbot
    setIsChatbotTyping(true);

    // Process user message with ChatGPT
    await processUserMessageToChatGPT(updatedChatMessages);
  };

  // Function to send the user message to ChatGPT API
  async function processUserMessageToChatGPT(messages) {
    // Prepare the messages in the required format for the API
    let apiMessages = messages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // System message for ChatGPT
    const systemMessage = {
      role: "system",
      content:
        "You are chatting as Marta from the support team. of Semaphore company.",
    };

    // Prepare the API request body
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // System message should be in front of user messages
        ...apiMessages,
      ],
    };

    // Send the user message to ChatGPT API
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + OPENAI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // Update chat messages with ChatGPT's response
        setChatMessages([
          ...messages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        // Set the typing indicator to false after getting the response
        setIsChatbotTyping(false);
      });
  }

  return (
    <>
      <div className="chatBox1">
        <div style={{ position: "relative", height: "90vh", width: "680px" }}>
          <div style={{ margin: "10px" }}>
            <a href="/dashBoard" className="item">
              <BiHome className="icon" />
              <span>Back</span>
            </a>
          </div>
          <MainContainer>
            <ChatContainer>
              {/* Display chat messages and typing indicator */}
              <MessageList
                typingIndicator={
                  isChatbotTyping ? (
                    <TypingIndicator content="ChatGPT is thinking" />
                  ) : null
                }
              >
                {/* Map through chat messages and render each message */}
                {chatMessages.map((message, i) => {
                  const isUserMessage = message.sender === "user";

                  return (
                    <div className="messageChat" key={i}>
                      <Message
                        style={{
                          borderRadius: isUserMessage ? "30px" : "0",
                        }}
                        model={message}
                      />
                    </div>
                  );
                })}
              </MessageList>
              {/* Input field for the user to type messages */}
              <MessageInput
                placeholder="Type Message here"
                onSend={handleUserMessage}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  );
}

export default ChatWithSomeOne;
