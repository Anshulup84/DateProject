const form = document.querySelector("form");
const user1Input = document.querySelector("input #user-1");
const user2Input = document.querySelector("input #user-2");

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const [dateString, timeString] = user1Input.value.split(' ')
    const [user1Day, user1Month, user1Year] = dateString.split('/').map((el) => Number(el))
    const [user1Hour, user1Minute] = timeString.split(':').map((el) => Number(el))
    const user1DOB = new Date(user1Year ,user1Month-1, user1Day, user1Hour, user1Minute)
})

function parseDateString(dateString) {
    const [dateString, timeString] = user1Input.value.split(' ')
    const [user1Day, user1Month, user1Year] = dateString.split('/').map((el) => Number(el))
    const [user1Hour, user1Minute] = timeString.split(':').map((el) => Number(el))
    const user1DOB = new Date(user1Year ,user1Month-1, user1Day, user1Hour, user1Minute)
}