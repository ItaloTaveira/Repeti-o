function exe1() {
    let cont2 = 1
    while (cont2 <= 5) {
        let a = Number(prompt("Informe valor de A")) 
        let b = Number(prompt("Informe valor de B"))
        let c = Number(prompt("Informe valor de C"))
        let d = Number(prompt("Informe valor de D"))
        let cont = 1
        let aux
        while (cont <= 3) {
            if (a > b){
                aux = a; a = b; b =aux
            }
            if (b > c){
                aux = b; b = c; c = aux
            }
            if(c > d ){
                aux = d; c = d; aux = d
            }
            cont ++  
            }
            
        
    
        cont2++
        console.log(`Ordem crescente ${a} ; ${b} ; ${c} ; ${d}`)
        
    }
}
