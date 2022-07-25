function alfanumerick(symbol = " "){ //alfanumerick test function
    const code = symbol.charCodeAt(0);
    if((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
        return true;
    }
    return false;
}



