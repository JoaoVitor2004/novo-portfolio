const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

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
            background:"#000",
        },
        onClick: function () { }
    }).showToast();
}

form.addEventListener("submit", (ev) => {

    ev.preventDefault()

    if (nameInput.value === "" && typeof nameInput !== "string") {
        showMessageError("Digite apenas letras")
        return
    }

    if (!checkEmail(email.value)) {
        showMessageError("Digite um email valido")
        return
    }

    if (message.value === "") {
        showMessageError("Prencha este campo!")
        return
    }

    ev.reset()
    ev.submit()
})