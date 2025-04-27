export const convertToBinary = (num, setresult) => {
    if (isNaN(num)) {
        alert("Invalid Input! Insert only numbers")
        return
        
    } 

    num = num[0] == "0" ? num.replace(num[0],"") : num

    let divisionResult = parseInt(num)
    let BinaryValue = ""

    while (divisionResult >= 1) {
        
        BinaryValue += divisionResult % 2
        divisionResult = Math.floor(divisionResult / 2)
    }

    setresult(BinaryValue.split("").reverse().join(""))
}

export const convertToDecimal = (num, setresult) => {
    debugger
    if (isNaN(num)) {
        alert("Invalid Input! Insert only numbers")
        return
        
    } else if (/[2-9]/.test(num)) {
        setresult(num)
        return
    }

    let decimalResult = 0
    num = num.split("").reverse().join("")
    
    for (let i = num.length-1; i>=0; i--) {
        decimalResult+= parseInt(num[i]) * Math.pow(2,i)
    }

    setresult(decimalResult)

    
    /*
        TODO

        EDGE CASES:

            - Check if the num is a interger 
            - Return the same value if it's true

        1- Take a binary value
        2- binary digit * 2^length of binary value
        3- Sum up with the interger result
        3- Decrease power value by 1
        4- Repeat the process until 2*0

    
    */ 
}