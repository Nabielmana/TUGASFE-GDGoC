const input = require('prompt-sync')({sigint: true})

const nama = input()
const umur = Number(input())

if (umur >= 21) {
    console.log("Uang lu ada berapa?")
    const uang = Number(input())
    if (uang < 500000) {
        console.log(`Maaf ${nama}, uang kamu cuma ${uang/1000} ribu, datang lagi lain kali`)
    } else
        console.log(`Selamat datang ${nama}`)
} else
    console.log("Maaf " + nama + ", umur kamu kurang", 21 - umur + " tahun lagi")