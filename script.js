let noteindex = 0
document.getElementById("nextnote").addEventListener("click", function () {
    // Get the current note
    let noteTitle = document.getElementById("notetitle")
    let noteText = document.getElementById("notetext")

    // Get the next note
    let notes = [{ title: "Dulzura en el caos", text: "Entre tantos movimientos, entre tanta gente, tanto ruido y tantos nervios, siempre hay un momento de calma, de dulzura en el caos. Eso es lo que aprendi el dia del concierto, con tantos estimulos que me distraian, aun asi pude encontrar los momentos para verte brillar entre tanta gente, esos ojitos que iluminaban mi mundo, como me mirabas... era como si todo desvaneciera frente a mi para solo quedar tu." },
    { title: "Labios dulces", text: "Tus labios dulces, tu sonrisa, tu mirada, tu voz, tu risa, tu todo. Eres mi todo, mi mundo, mi vida, mi amor. Eres la razon por la que me levanto cada dia, la razon por la que sonrio, la razon por la que sigo adelante. Eres mi amor, mi vida, mi todo." },
    { title: "Entre miedos el amor", text: "Entre mis miedos encontre el valor para decirte te amo... por que entre ellos tambien encontre el amor que siento por ti. Tenia miedo a no ser lo que esperabas, por eso me esforeze en serlo, a no ser suficiente, por eso trate de ser lo mejor que podia dar, a no ser lo que necesitas, pero al final me di cuenta que lo que necesitas es amor, y eso es lo que tengo para ti, amor." },
    { title: "Amor en la distancia", text: "Aunque la distancia nos separe, mi amor por ti no disminuye, al contrario, cada dia que pasa mi amor por ti crece mas y mas. Aunque no pueda verte, ni tocarte, ni sentirte, se que estas ahi, en mi corazon, en mi mente, en mi alma. Eres mi amor, mi vida, mi todo." },
    { title: "Lo inesperado en lo esperado", text: "Jugando lol te conoci, quien lo podria esperar? no yo!, pero ahi estabas tu, con tu risa, tu voz, tu forma de ser, tu todo. Y ahi estaba yo, con mis miedos, mi voz temblorosa, mi forma de ser, mis sueños. Y ahi estabamos, tu y yo, juntos, riendo, hablando, jugando, siendo felices sin saber que entre algo tan normal surgiria lo inesperado... el amor." },
    ]
    if(noteindex >= notes.length){
        noteindex = 0
    }
    // Update the note
    noteTitle.innerHTML = notes[noteindex].title
    noteText.innerHTML = notes[noteindex].text
    noteindex++
});
let surprise = document.getElementById("surpriseBtn")
surprise.addEventListener("click", function () {
    let surpriseText = document.getElementById("surpriseMessage")
    surpriseText.classList.add("showCuteMessage")
})
