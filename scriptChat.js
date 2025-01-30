document.addEventListener("DOMContentLoaded", function () {
    const chatTrigger = document.getElementById("chat-trigger");
    const chatWindow = document.getElementById("chat-window");
    const chatHeader = document.getElementById("chat-header");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-btn");
    const messagesContainer = document.getElementById("messages-container");
    const typingIndicator = document.getElementById("typing-indicator");

    let isOpen = false;
    let isTyping = false;
    let messages = [
        {
            sender: "ai",
            content: "Hi! I'm Jeiberth AI, your friendly assistant. Got any questions? I'm here to help!",
            error: false
        }
    ];

    const API_KEY = "z6wAUeahaiHmtJgO7rzFJtOoSXWyx6Dc505xsIZ1";
    const API_ENDPOINT = "https://api.cohere.ai/v1/generate";
    const DATA_CONTEXT = "Impersonate Jeiberth Malagon. Brief, concise, direct, informal, add a touch of humor. No need for extra context—just give answer what they ask with a smile in a text NO MORE THAN 50 words! Jeiberth’s Profile: email: jeiberth_camilo@hotmail.com | phoneNumber: +14372559193 Full-stack Developer | Montreal Skilled: HTML, CSS, PHP, JS (React, Vue), Laravel, Firebase, AWS Experience: D2Technologie (Sep2024-Present) - Backend (Laravel, PHP), Frontend (Vue/React), API integration, code reviews. Languages: English, Spanish, French (B1) Projects: Web & Game Design, Service/Product Exchange MobileApp (Quasar, Laravel). Passions: Programming, tech learning, outdoor activities, music, global travel, BoyScouts since 10. Availability: Mon-Fri after 4:30PM, weekends. Core Strengths: Teamwork, adaptability, perfectionism, and problem-solving. (ANSWER UNDER 50 WORDS)Question AI:";

    // // Toggle chat window
    // chatTrigger.addEventListener("click", () => {
    //     isOpen = !isOpen;
    //     chatWindow.classList.toggle("open", isOpen);
    //     chatTrigger.style.right = isOpen ? "calc(350px + 30px)" : "20px";
    // });

    // chatHeader.addEventListener("click", () => {
    //     isOpen = false;
    //     chatWindow.classList.remove("open");
    //     chatTrigger.style.right = "20px";
    // });

    // Toggle chat window
    chatTrigger.addEventListener("click", () => {
        isOpen = true;
        chatWindow.classList.add("open");
        chatTrigger.style.display = "none"; // Hide trigger
    });

    chatHeader.addEventListener("click", () => {
        isOpen = false;
        chatWindow.classList.remove("open");
        setTimeout(() => {
            chatTrigger.style.display = "flex"; // Show trigger after transition
        }, 300);
    });

    sendButton.addEventListener("click", sendMessage);
    chatInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const prompt = chatInput.value.trim();
        if (!prompt) return;

        // Add user message to the chat
        appendMessage("user", prompt);
        chatInput.value = "";

        // Show typing indicator
        isTyping = true;
        typingIndicator.style.display = "flex";

        // Call AI API
        fetchResponse(prompt);
    }

    async function fetchResponse(prompt) {
        try {
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: DATA_CONTEXT + prompt,
                    max_tokens: 120,
                    temperature: 0.3
                })
            });

            const data = await response.json();
            isTyping = false;
            typingIndicator.style.display = "none";

            if (data.generations && data.generations.length > 0) {
                appendMessage("ai", data.generations[0].text.trim());
            } else {
                appendMessage("ai", "Sorry, I didn't understand that.", true);
            }
        } catch (error) {
            console.error("API Error:", error);
            appendMessage("ai", "Sorry, try again later.", true);
            isTyping = false;
            typingIndicator.style.display = "none";
        }

        scrollToBottom();
    }

    function appendMessage(sender, content, isError = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        if (isError) messageDiv.classList.add("error");
        messageDiv.textContent = content;

        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
