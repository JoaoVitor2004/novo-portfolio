const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

// animation gsap

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1
});

const animarPagina = () => {

    const texts = document.querySelectorAll(".text")

    texts.forEach((text) => {

        const split = SplitText.create(".text", {
            type: "lines words chars",
            mask: "lines"
        })

        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            stagger: .1,
            ScrollTrigger: {
                trigger: text
            }
        })

    })

    gsap.from("#img-hero", {
        y: -100,
        duration: 2
    })

}

const tl = gsap.timeline({
    onComplete() {
        gsap.to("#preloader", {
            opacity: 0,
            display: "none"
        })
        document.body.style.overflow = "visible"
        animarPagina()
    }
})

tl.to("#preloader path", {
    strokeDashoffset: 0,
    duration: 2,
})

tl.to("#preloader path", {
    fill: "rgb(245, 174, 42)",
    duration: 1,
})

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

    if (nameInput.value === "") {
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
    form.reset()
})