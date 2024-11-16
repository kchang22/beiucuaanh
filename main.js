// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn anh đã dành thời gian để nhìn những trò trẻ con của emm và em có những điều muốn gởi gắm đến tình iu của emm❤️. Cảm ơn anh đã đến bên emm những lúc anh buồn tủi khi ở trong quân khu.Cuộc sống thực sự chẳng có ý nghĩa gì nếu không có anh. Anh làm cho em luôn cảm thấy đặc biệt và hoàn hảo. Em chẳng biết nói gì ngoài lời cảm ơn anh, em rất yêu anh my little dog Ki💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 60 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})