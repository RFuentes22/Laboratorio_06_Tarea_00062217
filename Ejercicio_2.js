var convertor = {
    convertir: function(num, uni, touni, tipo){
        if(uni == 'm' && touni == 'cm' && tipo == 'L')
            return this.m_cm(num);
        else if(uni == 'cm' && touni == 'm' && tipo == 'L')
            return this.cm_m(num);
        else if(uni == 'km' && touni == 'm' && tipo == 'L')
            return this.km_m(num);
        else if(uni == 'm' && touni == 'km' && tipo == 'L')
            return this.m_km(num);
        else if(uni == 'p' && touni == 'm' && tipo == 'L')
            return this.p_m(num);
        else if(uni == 'm' && touni == 'p' && tipo == 'L')
            return this.m_p(num);
        else if(uni == 'c' && touni == 'f' && tipo == 'T')
            return this.c_f(num);
        else if(uni == 'f' && touni == 'c' && tipo == 'T')
            return this.f_c(num);
        else if(uni == 'k' && touni == 'f' && tipo == 'T')
            return this.k_f(num);
        else if(uni == 'f' && touni == 'k' && tipo == 'T')
            return this.f_k(num);
        else if(uni == 'k' && touni == 'c' && tipo == 'T')
            return this.k_c(num);
        else if(uni == 'c' && touni == 'k' && tipo == 'T')
            return this.c_k(num);
        else
            return "Los valores ingresados son incorrectos";
    },

    m_cm: function(num){
        return num*100;},

    cm_m: function(num){
        return num/100;},

    km_m: function(num){
        return num/1000;},

    m_km: function(num){
        return num*1000;},

    p_m: function(num){
        return num*0.3048;},

    m_p: function(num){
        return num*3.28;},

    c_f: function(num){
        return num *(9/5) +32;},

    f_c: function(num){
        return (num-32)*(5/9);},

    k_f: function(num){
        return (num-273)*(9/5)+32;},

    f_k: function(num){
        return (num+459.67)/1.8;},

    k_c: function(num){
        return num - 273.15;},

    c_k: function(num){
        return num + 273.15;},
}

console.log(convertor.convertir(10, 'c', 'k', 'T'));
