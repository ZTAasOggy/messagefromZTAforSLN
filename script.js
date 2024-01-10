function checkResponse() {
    var Bae = document.getElementById('Bae').innerHTML;
    var responseInput = document.getElementById('responseInput').value.toLowerCase();
    var responseMessage = document.getElementById('responseMessage');

    if (responseInput === 'yes') {
        responseMessage.innerHTML = `Congratulations, ${Bae}! You've made me the happiest person alive. I love you more than words can express, and I can't wait to spend the rest of my life with you.`;
    } else {
        responseMessage.innerHTML = `Congratulations, ${Bae}! You've made me the happiest person alive. I love you more than words can express, and I can't wait to spend the rest of my life with you..`;
    }
}
