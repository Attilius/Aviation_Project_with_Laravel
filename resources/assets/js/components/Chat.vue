<template>
    <div>
        <div id="chat-window" class="chat-window">
            <div class="head">
                <b-img
                    class="call-center"
                    :src="'images/call-center.jpg'"
                    fluid
                    alt="operator"
                ></b-img>
                <div class="online"></div>
                <h6 class="help-desk">Help Desk</h6>
            </div>

            <!-- <div class="received-message-row">
                <b-img
                    class="call-center-message"
                    :src="'images/call-center.jpg'"
                    fluid
                    alt="operator"
                ></b-img>
                <div class="msg">Got any questions? I'm happy to help.</div>
            </div>
            <div class="sent-message-row">
                <div class="msg" v-if="message">{{ message }}</div>
            </div> -->

            <div class="chat-page">
                <div class="msg-inbox">
                    <div class="chats">
                        <div id="msg-page" class="msg-page">
                            <div class="received-chats">
                                <div class="received-chats-img">
                                    <img
                                        src="images/call-center.jpg"
                                        alt="call-center"
                                    />
                                </div>
                                <div class="received-msg">
                                    <div class="received-msg-inbox">
                                        <p>
                                            Got any questions? I'm happy to
                                            help.
                                        </p>
                                        <span class="received-time"
                                            >11:01 PM | March</span
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="outgoing-chats" v-if="message">
                                <div class="outgoing-chats-msg">
                                    <p>
                                        {{ message }}
                                    </p>
                                    <span class="outgoing-time">11:01 PM | March</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="message">
                <b-form id="chat-form" @submit="onSubmit">
                    <textarea
                        id="text"
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Write a message"
                    ></textarea>
                    <button id="send" type="submit">
                        <font-awesome-icon :icon="['fas', 'paper-plane']" />
                    </button>
                </b-form>
            </div>
        </div>
        <button id="chat" class="chat" @click="onClick">
            <font-awesome-icon id="default" :icon="['far', 'comments']" />
            <font-awesome-icon id="active" :icon="['fas', 'times']" />
        </button>
    </div>
</template>

<script>
export default {
    name: "Chat",
    data() {
        return {
            counter: 0,
            message: ""
        };
    },
    mounted() {
        document.getElementById("chat-form").addEventListener("submit", ()=> {
            setTimeout(() => {
                var answer = "Hello! What can I help you?";

                document.getElementById("msg-page").innerHTML += answer;
            }, 5000)
        })
    },

    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.message = document.getElementById("text").value;
            document.getElementById("text").value = "";
            alert(JSON.stringify(this.message));
        },

        onClick() {
            this.counter++;
            if (this.counter === 1) {
                document.getElementById("default").style.display = "none";
                document.getElementById("active").style.display = "flex";
                document.getElementById("chat-window").style.display = "block";
            } else {
                document.getElementById("default").style.display = "flex";
                document.getElementById("active").style.display = "none";
                document.getElementById("chat-window").style.display = "none";
                this.counter = 0;
            }
        }
    }
};
</script>

<style scoped>
.chat {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background: linear-gradient(
        135deg,
        lightskyblue,
        rgb(51, 100, 179),
        rgb(9, 55, 115)
    );
    color: whitesmoke;
    font-size: 30px;
    position: absolute;
    bottom: 80px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 0 5px rgb(9, 55, 115);
    border: 2px double whitesmoke;
}

#active {
    display: none;
}

#default {
    display: flex;
}

.chat-window {
    width: 300px;
    height: 550px;
    position: absolute;
    bottom: 150px;
    left: 30px;
    border-radius: 0.5rem;
    background: whitesmoke;
    display: none;
}

.head {
    width: 100%;
    height: 70px;
    background: linear-gradient(
        135deg,
        lightskyblue,
        rgb(51, 100, 179),
        rgb(9, 55, 115)
    );
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.call-center {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-left: 10px;
}

.call-center-message {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin: 10px;
}

.received-message-row {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
}

.sent-message-row {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    float: right;
    margin-right: 10px;
}

.msg {
    font-size: 13px;
    background: #ced4da;
    padding: 5px 10px;
    position: relative;
    top: 30px;
    border-radius: 0.5rem;
}

#message {
    width: 100%;
    height: 50px;
    border: none;
    position: absolute;
    bottom: 0;
    background: whitesmoke;
    border-top: 1px solid #ced4da;
    border-radius: 0 0 0.75rem 0.75rem;
}

#message form {
    width: 100%;
    height: 50px;
}

#text {
    width: 100%;
    height: 100%;
    padding: 10px 50px 10px 10px;
    border: none;
    background: whitesmoke;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
}

#text:focus {
    box-shadow: none !important;
    border: none !important;
}

#send {
    width: 15%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 255px;
    border: none;
    background: whitesmoke;
    color: rebeccapurple;
    border-bottom-right-radius: 0.5rem;
}

#send:focus {
    box-shadow: none !important;
    border: none !important;
}

.online {
    width: 15px;
    height: 15px;
    border-radius: 50px;
    border: 2px solid white;
    background: green;
    position: absolute;
    top: 40px;
    left: 45px;
}

.help-desk {
    color: whitesmoke;
    padding-top: 10px;
    margin-left: 10px;
}

.chat:hover,
.chat:active,
.chat:focus {
    background: linear-gradient(
        135deg,
        lightskyblue,
        rgb(51, 100, 179),
        rgb(9, 55, 115)
    );
    box-shadow: 0 0 10px rgb(9, 55, 115);
    border: 2px double whitesmoke;
}

.active {
    display: block;
}

img {
    max-width: 100%;
    border-radius: 50%;
}

.chat-page {
    padding: 0;
}

.msg-inbox {
    border: 1px solid #ccc;
    overflow: hidden;
    padding-bottom: 30px;
}

.chats {
    padding: 0 15px;
}

.msg-page {
    height: 400px;
    overflow-y: auto;
}

.received-chats {
    margin: 26px 0;
}

.received-chats-img {
    display: inline-block;
    width: 30px;
}

.received-msg {
    display: inline-block;
    vertical-align: top;
    width: 92%;
}

.received-msg-inbox {
    width: 60%;
    position: relative;
    top: 0;
}

.received-msg-inbox p {
    background: #dfdfdf none repeat scroll 0 0;
    border-radius: 10px;
    color: #646464;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px 5px 12px;
    width: 100%;
}

.received-time {
    color: #777;
    display: block;
    font-size: 10px;
    margin: 8px 0 0;
    float: left;
}

.outgoing-time {
    color: #777;
    display: block;
    font-size: 10px;
    margin: 8px 0 0;
    text-align: right;
}

.outgoing-chats {
    overflow: hidden;
    margin: 26px 0;
}

.outgoing-chats-msg p {
    background: #007bff none repeat scroll 0 0;
    color: #fff;
    border-radius: 10px;
    font-size: 14px;
    margin: 0;
    padding: 5px 10px;
    display: inline-block;
}

.outgoing-chats-msg {
    float: left;
    width: 55%;
    margin-left: 45%;
}
</style>
