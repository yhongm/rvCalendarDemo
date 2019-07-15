import generateView from 'rvcalendar'
window.onload = function () {
    generateView("#app", function (selectDate) {
        alert("selectDate,:"+selectDate)
    })
}