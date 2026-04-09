const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smooth: 2,
    effects: true
});

const checkEmail = (value) => {
    const regex = new RegExp(
        /^[a-zA-Z0-9-_\.]+@+[a-zA-Z]+\.+[a-z]{3}/
    )

    if (regex.test(value)) {
        return true
    }

    return false
}

const showMessageError = (error) => {
    Toastify({
        text: error,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
            fontSize: "16px",
            background: "#000",
        },
        onClick: function () { }
    }).showToast();
}

form.addEventListener("submit", (ev) => {

    ev.preventDefault()

    if (nameInput.value === "" || nameInput.value.match(/[0-9]/gm)) {
        showMessageError("Digite um nome valido!")
        return
    }

    if (!checkEmail(email.value)) {
        showMessageError("Digite um email valido")
        return
    }

    if (message.value === "") {
        showMessageError("Digite uma mensagem!")
        return
    }

    alert("Dados enviados!")
    form.submit()
})