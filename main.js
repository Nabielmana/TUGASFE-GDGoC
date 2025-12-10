const input = require('prompt-sync')({sigint: true})

const nama = input()
const umur = Number(input())

if (umur >= 21) {
    // console.log("Uang lu ada berapa?")
    // const uang = Number(input())
    // if (uang < 500000)
        
} else
    console.log("Maaf " + nama + ", umur kamu kurang", 21 - umur + " tahun lagi")