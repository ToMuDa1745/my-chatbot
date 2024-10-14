document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbot = document.querySelector('.chatbot');
    const closeBtn = document.querySelector('.chatbot header .material-symbols-outlined');
    const sendBtn = document.querySelector('#send-btn');
    const inputField = document.querySelector('.chat-input textarea');
    const chatBox = document.querySelector('.Chatbot');

    // Toggle chatbot visibility when the button is clicked
    chatbotToggler.addEventListener('click', () => {
        chatbot.classList.toggle('show-chatbot');
    });

    // Close chatbot when the close button is clicked
    closeBtn.addEventListener('click', () => {
        chatbot.classList.remove('show-chatbot');
    });


    const responses = {
        greeting: ["Hello!", "Hi there!", "Greetings! How can I help?"],
        about: ["I am a chatbot built to assist you with information.", "I provide answers to your queries."],
        help: ["What can I help you with today?", "Feel free to ask me anything!"],
        farewell: ["Goodbye!", "Take care!", "Have a great day!"]
    };



    // Handle message sending
    sendBtn.addEventListener('click', () => {
        let message = inputField.value.trim();
        if (message) {
            let outgoingMessage = document.createElement('li');
            outgoingMessage.classList.add('chat', 'outgoing');
            outgoingMessage.innerHTML = `<p>${message}</p>`;
            chatBox.appendChild(outgoingMessage);

            inputField.value = ''; // Clear the input field

            // Auto scroll to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;

            // Simulate bot response after sending a message
            setTimeout(() => {
                let botResponse = document.createElement('li');
                botResponse.classList.add('chat', 'incoming');

        let response;

            if (/hello|hi|hey/.test(message)) {
                response = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
            } else if (/who are you|about/.test(message)) {
                response = responses.about[Math.floor(Math.random() * responses.about.length)];
            } else if (/help|assist/.test(message)) {
                response = responses.help[Math.floor(Math.random() * responses.help.length)];
            } else if (/bye|goodbye/.test(message)) {
                response = responses.farewell[Math.floor(Math.random() * responses.farewell.length)];
            }
            
            else if (/name/i.test(message)) {
                response = "My name is MOPSE Bot!";
            }
            
            else {
                response = "Sorry, I don't have information on that.";
            }

                botResponse.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${response}</p>`;
            chatBox.appendChild(botResponse);
            
            }, 1000); // Simulate delay for bot response
        }
    });
});
